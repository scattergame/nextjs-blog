"use client";
import React from "react";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import addPost from "@/firebase/auth/addpost";

function Page() {
  const router = useRouter();
  const auth = getAuth();
  const user = auth.currentUser;
  if (user === null) {
    return router.push("/");
  }

  const [postTitle, setpostTitle] = React.useState("");
  const [postBody, setpostBody] = React.useState("");

  const handleForm = async (event) => {
    event.preventDefault();
    console.log(file_upload.id);
    const { result, error } = await addPost(user.uid, postTitle, postBody);

    if (error) {
      return router.push("/admin");
    }

    // else successful
    // console.log(result);
    return router.push("/");
  };

  return (
    <div className="min-h-screen">
      <form onSubmit={handleForm}>
        <div className="flex w-full place-items-center my-6">
          <div className="flex flex-col gap-6 mx-auto">
            <div className="relative w-full min-w-fit sm:min-w-[480px]">
              <textarea
                onChange={(e) => setpostTitle(e.target.value)}
                className="peer h-full min-h-[60px] w-full resize-none rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                name="postTitle"
                id="postTitle"
                required
              ></textarea>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[12px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Title
              </label>
            </div>
          </div>
        </div>
        <div className="flex w-full place-items-center my-3">
          <div className="flex flex-col gap-6 mx-auto">
            <div className="relative w-full min-w-fit sm:min-w-[680px]">
              <textarea
                onChange={(e) => setpostBody(e.target.value)}
                className="peer h-full min-h-[600px] w-full resize-none rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                name="postBody"
                id="postBody"
                required
              ></textarea>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[12px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Article
              </label>
            </div>
          </div>
        </div>
        <div className="flex place-items-center my-3 mx-20">
          <label className="flex justify-center mx-auto w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span className="font-medium text-gray-600">
                Drop files to Attach, or
                <span className="text-blue-600 underline"> browse</span>
              </span>
            </span>
            <input
              type="file"
              name="file_upload"
              id="file_upload"
              className="hidden"
            ></input>
          </label>
        </div>
        <div className="flex w-full place-items-center my-3">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page;
