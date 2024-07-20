import React from "react";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineUserAdd } from "react-icons/hi";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold text-[#172b4a] my-7">
        Sign Up
      </h1>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
        />

        <input
          type="email"
          placeholder="Email address"
          className="border p-3 rounded-lg"
          id="email"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
        />

        <button className="bg-[#172b4a] text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80 flex justify-center items-center ">
          <HiOutlineUserAdd class="w-5 h-5" />
          <span class="ml-4">Sign Up</span>
        </button>

        <div class="flex items-center space-x-4">
          <hr class="w-full border border-gray-300" />
          <div class="font-semibold text-gray-400">OR</div>
          <hr class="w-full border border-gray-300" />
        </div>

        <button class="bg-[#2c081011] border p-3 w-full rounded-lg mt-5 flex justify-center items-center  hover:opacity-90">
          <FcGoogle class="w-6 h-6" />
          <span class="ml-4 font-semibold">Continue with Google</span>
        </button>

        <p class="text-sm mt-6 text-center text-gray-800">
          Already have an account?
          <Link to={"/sign-in"}>
            <span class="text-blue-600 font-semibold hover:underline ml-1">
              Login here
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
