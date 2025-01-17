import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from 'react-router-dom';

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      // create a pop-up request
      const result = await signInWithPopup(auth, provider);
      console.log(result);

      // send this data to Backend
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      // convert response into json and save inside data
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("Could not sign in with google", error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-[#2c081011] border p-3 w-full rounded-lg mt-6 flex justify-center items-center  hover:opacity-90"
    >
      <FcGoogle className="w-6 h-6" />
      <span className="ml-4 font-semibold">Continue with Google</span>
    </button>
  );
};

export default OAuth;
