import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Result from "../context/Auth";

function LoginForm() {
  let { fetchData } = useContext(Result);
  let navigate = useNavigate();
  const [useremail, setUserEmail] = useState("");
  const [userpassword, setPassword] = useState("");
  // !pending login work
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let loginData = await axios.post(
        "http://localhost:3000/user/login",
        { useremail, userpassword },
        { withCredentials: true },
      );
      console.log(loginData.data);
      setUserEmail("");
      setPassword("");
      await fetchData();
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
        <h2 className="text-2xl font-bold mb-5 text-center">Login Form</h2>

        <div className="mb-4">
          <label className="block mb-1">User Email</label>

          <input
            type="email"
            placeholder="Enter email"
            value={useremail}
            onChange={(e) => setUserEmail(e.target.value)}
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
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-500 cursor-pointer"
          >
            Signup
          </span>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
