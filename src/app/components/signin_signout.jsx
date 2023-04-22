import Link from "next/link";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { FaUserAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

export const Signin_signout = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const auth = getAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {user ? (
        <div className="flex items-center space-x-2">
          <Link href={"/userprofile"}>
            <FaUserAlt className="text-xl hover:text-amber-600" />
          </Link>

          <button onClick={handleSignOut} className=" hover:text-amber-600">
            Sign Out
          </button>
        </div>
      ) : (
        <Link href="/signin">Sign In</Link>
      )}
    </div>
  );
};
