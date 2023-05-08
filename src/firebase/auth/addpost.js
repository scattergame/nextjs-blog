import firebase_app from "../config";
import { getDatabase, ref, push, set } from "firebase/database";
import { getAuth } from "firebase/auth";

export default async function addPost(user, title, body) {
  let result = null,
    error = null;

  const database = getDatabase();
  const postListRef = ref(database, "posts");
  const newPostRef = push(postListRef);

  try {
    result = await set(newPostRef, {
      author: user,
      title: title,
      body: body,
      timestamp: new Date().getTime(),
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
