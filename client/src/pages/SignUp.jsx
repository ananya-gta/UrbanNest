import React from "react";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineUserAdd } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      // since loading is completed
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold text-gray-600 my-7">
        SIGN UP
      </h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />

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
            {loading ? "Creating your account" : "Sign Up"}
          </span>
        </button>

        <div className="flex items-center space-x-4 mt-3">
          <hr className="w-full border border-gray-300" />
          <div className="font-semibold text-gray-400">OR</div>
          <hr className="w-full border border-gray-300" />
        </div>
      </form>

      <OAuth />

      <p className="text-sm mt-6 text-center text-gray-800">
        Already have an account?
        <Link to={"/sign-in"}>
          <span className="text-blue-600 font-semibold hover:underline ml-1">
            Login here
          </span>
        </Link>
      </p>

      {error && <p className="text-red-500 mt-5 text-center">{error}</p>}
    </div>
  );
};

export default SignUp;
