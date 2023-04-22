import firebase_app from "../config";
import { updateProfile, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);
export default async function updateUser(displayName, phone, url) {
  let result = null,
    error = null;
  try {
    const user = await auth.currentUser;

    if (user) {
      if (displayName && displayName.trim() != "") {
        result = await updateProfile(user, {
          displayName: displayName,
          photoURL: url,
          phone: phone,
        });
      }
    }
  } catch (error) {
    console.error(error);
  }

  return { result, error };
}
