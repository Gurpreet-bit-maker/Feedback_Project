import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import useLoader from "../custom/Loader";
import Dashboard from "./Dashboard";

export default function Home() {
  let { loading } = useLoader();
  let [textValue, setTextvalue] = useState("");
  let [rating, setRating] = useState();
  let [userName, setUserName] = useState("");
  let userFeedback = { msg: textValue, rating: rating, username: userName };
  let [ispending, setLoader] = useState();
  // Post feedback
  let postReview = async () => {
    try {
      if (userFeedback.msg !== "") {
        setLoader(true);
        await axios.post("http://localhost:3000/user", userFeedback);
        setUserName("");
        setTextvalue("");

        console.log(userFeedback);
      } else {
        alert("please write any feedback");
      }
    } catch (error) {
      console.log(error);
    }
  };
  setTimeout(() => {
    setLoader(false);
  }, 5000);

  // Get feedback count numbers
  let [feedbackCounts, setsubject] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((response) => {
        setsubject(response.data.length);
        console.log(feedbackCounts);
      })
      .catch((error) => console.log(error));
  }, [ispending]);

  return loading ? (
    <div className="bg-gray-100 py-12 flex justify-center h-190">
      <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 w-[420px]  rounded-xl shadow-lg p-6">
        {/* Reviews link */}
        <div className="flex justify-between items-center mb-4">
          <NavLink
            to="/feeds"
            className={({ isActive }) =>
              `text-sm px-3 py-1 rounded-md ${
                isActive ? "bg-yellow-300" : "bg-gray-200"
              }`
            }
          >
            Reviews
          </NavLink>

          <span className="bg-yellow-400 text-xs px-2 py-[2px] rounded-md font-semibold">
            {feedbackCounts}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-white text-center mb-4">
          Create Your Feedback
        </h1>
        {/* username */}
        <input
          type="text"
          value={userName}
          placeholder="Enter name..."
          className="border border-gray-300 p-2 rounded-md w-full placeholder:text-gray-400 outline-none"
          onChange={(e) => setUserName(e.target.value)}
        />
        {/* textarea */}
        <textarea
          className="w-full bg-white mt-10 border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
          rows="10"
          placeholder="Write feedback here..."
          onChange={(e) => setTextvalue(e.target.value)}
          value={textValue}
        />

        {/* rating + button */}
        <div className="flex justify-between items-center mt-4">
          <Rating
            name="size-large"
            defaultValue={0}
            onChange={(event) => setRating(event.target.value)}
          />

          <button
            disabled={ispending}
            onClick={postReview}
            className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition"
          >
            {ispending ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
      <Dashboard />
    </div>
  ) : (
    <div className="flex justify-center items-center gap-2 py-20 h-200">
      <span className="text-gray-600 text-lg">Loading</span>
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-150"></div>
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300"></div>
    </div>
  );
}
