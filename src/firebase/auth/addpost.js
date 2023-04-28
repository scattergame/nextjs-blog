import firebase_app from "../config";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

export default async function addPost(user, post_data) {
  let result = null,
    error = null;
  const database = getDatabase();

  return { result, error };
}
