import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import useLoader from "../custom/Loader";
// import Dashboard from "./Dashboard";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-md md:max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
        {/* Top */}
        <div className="flex justify-between items-center mb-8">
          <NavLink
            to="/feeds"
            className={({ isActive }) =>
              `text-sm px-4 py-2 rounded-xl font-medium transition hover:bg-black hover:text-white ${
                isActive
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`
            }
          >
            Reviews
          </NavLink>

          <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-semibold">
            {feedbackCounts}
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Your Feedback
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Share your thoughts with us ✨
          </p>
        </div>

        {/* Username */}
        <input
          type="text"
          value={userName}
          placeholder="Enter your name..."
          className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-gray-400 text-gray-700"
          onChange={(e) => setUserName(e.target.value)}
        />

        {/* Textarea */}
        <textarea
          className="w-full mt-6 bg-gray-50 border border-gray-200 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none placeholder:text-gray-400 text-gray-700"
          rows="7"
          placeholder="Write feedback here..."
          onChange={(e) => setTextvalue(e.target.value)}
          value={textValue}
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-6">
          <Rating
            name="size-large"
            defaultValue={0}
            onChange={(event) => setRating(event.target.value)}
          />

          <button
            disabled={ispending}
            onClick={postReview}
            className="bg-indigo-600 hover:bg-indigo-700 transition text-white text-sm px-6 py-3 rounded-2xl shadow-md"
          >
            {ispending ? "Submitting..." : "Submit Feedback"}
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex justify-center items-center gap-2">
      <span className="text-gray-600 text-lg">Loading</span>

      <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce delay-150"></div>
      <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce delay-300"></div>
    </div>
  );
}
