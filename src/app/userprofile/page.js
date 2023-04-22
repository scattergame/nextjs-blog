"use client";
import React from "react";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import updateUser from "@/firebase/auth/update";

function Page() {
  //const { user } = useAuthContext();
  const router = useRouter();
  const auth = getAuth();
  const user = auth.currentUser;
  const [displayName, setdisplayName] = React.useState(user.displayName);
  const [photoURL, setphotoURL] = React.useState(user.photoURL);
  const [phone, setphone] = React.useState(user.phoneNumber);

  const handleForm = async (event) => {
    event.preventDefault();
    const { result, error } = await updateUser(displayName, phone, photoURL);

    if (error) {
      return router.push("/admin");
    }

    // else successful
    console.log(result);
    return router.push("/");
  };

  //const [isEditing, setIsEditing] = useState(false);

  console.log(user);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-md w-full bg-white shadow-md rounded-md overflow-hidden">
        <div className="bg-gray-200 h-40 flex items-center justify-center">
          <img
            className="h-32 w-32 object-cover rounded-full"
            src={user.photoURL || "/placeholder.jpg"}
            alt="Profile picture"
          />
        </div>
        <form onSubmit={handleForm}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="displayName"
            >
              Display Name
            </label>
            <input
              onChange={(e) => setdisplayName(e.target.value)}
              required
              placeholder={user.displayName}
              //value={user.displayName}
              className="appearance-none dark:bg-gray-700 dark:text-gray-100 border rounded w-full py-2 px-3 leading-tight"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              value={user.email}
              disabled
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="userId"
            >
              User ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={user.uid}
              disabled
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
