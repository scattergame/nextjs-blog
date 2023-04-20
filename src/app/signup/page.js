"use client";
import React from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Page() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      console.log(error);
    } else {
      console.log(result);
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-amber-100 dark:bg-gray-500 max-w-md w-full p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
        <form onSubmit={handleForm}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className="appearance-none border rounded w-full py-2 px-3 dark:bg-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold mb-2">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="appearance-none border rounded w-full py-2 px-3 dark:bg-gray-700 dark:text-white  leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="confirm password"
              className="appearance-none border rounded w-full py-2 px-3  dark:bg-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>Already have an account?</span>
          <Link href="/signin">
            <h3 className="ml-2 text-blue-500 hover:text-blue-700">Sign In</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
