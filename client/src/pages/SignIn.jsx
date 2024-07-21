import React from "react";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineUserAdd } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInFailure, signInSuccess } from "../redux/user/userSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const {loading, error} = useSelector((state) => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        dispatch(signInFailure(data.message))
        return;
      }
      // since loading is completed
      dispatch(signInSuccess(data))
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <div className="text-center w-full font-bold text-3xl text-gray-600 mb-3 mt-7">
        LOGIN
      </div>
      <p className="text-center text-sm mb-6 text-[#0c2856]">
        Sign in to your account
      </p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="bg-[#172b4a] text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80 flex justify-center items-center "
        >
          <HiOutlineUserAdd className="w-5 h-5" />
          <span className="ml-4">
            {loading ? "Signing in your account" : "Log In"}
          </span>
        </button>

        <div className="flex items-center space-x-4">
          <hr className="w-full border border-gray-300" />
          <div className="font-semibold text-gray-400">OR</div>
          <hr className="w-full border border-gray-300" />
        </div>

        <button className="bg-[#2c081011] border p-3 w-full rounded-lg mt-5 flex justify-center items-center  hover:opacity-90">
          <FcGoogle className="w-6 h-6" />
          <span className="ml-4 font-semibold">Continue with Google</span>
        </button>

        <p className="text-sm mt-6 text-center text-gray-800">
          Do not have an account?
          <Link to={"/sign-up"}>
            <span className="text-blue-600 font-semibold hover:underline ml-1">
              Sign up
            </span>
          </Link>
        </p>

        {error && <p className="text-red-500 mt-5 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default SignIn;
