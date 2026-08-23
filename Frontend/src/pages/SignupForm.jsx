import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignupForm() {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [useremail, setEmail] = useState("");
  const [userpassword, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let signup = await axios.post(
        "http://localhost:3000/user/auth/signup",
        {
          username,
          useremail,
          userpassword,
        },
        { withCredentials: true },
      );

      console.log(signup.data);
      setUsername("");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-5 text-center">Signup Form</h2>

        <div className="mb-4">
          <label className="block mb-1">Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border p-2 rounded-md outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email</label>

          <input
            type="email"
            placeholder="Enter email"
            value={useremail}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded-md outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={userpassword}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded-md outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-md"
        >
          Signup
        </button>

        {/* already account  */}
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-500 cursor-pointer"
          >
            Signup
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;
