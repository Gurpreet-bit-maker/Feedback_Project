import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import Button from "@mui/material/Button";

import Rating from "@mui/material/Rating";

export default function Review() {
  let [feed, setMsg] = useState("");
  let [feedbackStar, setfeedStar] = useState();

  let userfeedback = { msg: feed, Rating: feedbackStar };
  let [ispending, setTransition] = useState();

  // Post feedback
  let postReview = async () => {
    try {
      if (!userfeedback.msg == "") {
        setTransition(true);
        await axios.post("http://localhost:5000/user/add", userfeedback);
        setMsg("");
      } else {
        alert("please write any feedback");
      }
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setTransition(false);
    }, 1000);
  };

  
  // Get feedback count numbers
  let [feedbackCounts, setsubject] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/users/data")
      .then((response) => {
        setsubject(response.data.length);
        console.log(feedbackCounts);
      })
      .catch((error) => console.log(error));
  }, [ispending]);

  return (
    <div className="bg-gray-300 h-80 py-5 m-1 shadow-lg  md:h-100">
      {/* Review */}

      <div className="relative ">
        <NavLink
          to="/feeds"
          className={({ isActive }) => (isActive ? "bg-yellow-300" : null)}
        >
          <ul className="bg-gray-100 rounded-lg text-sm  w-25 pl-3 ">
            <li>Reviews</li>
          </ul>
        </NavLink>
        <div className="absolute top-[2px] left-16 bg-yellow-300 rounded-lg w-5 h-4 flex justify-center items-center text-[13px] text-shadow-lg ">
          {feedbackCounts}
        </div>
      </div>
      {/* Heading name */}
      <h1 className="text-gray-800 text-2xl text-center mt-5 tracking-wide">
        Create Your feedback
      </h1>

      {/* text  */}
      <div className="flex flex-col px-10 pt-5 ">
        <textarea
          className="border p-1 text-sm"
          cols="28"
          rows="6"
          placeholder="write your feedback here ..."
          name="feedback"
          id=""
          onChange={(event) => setMsg(event.target.value)}
          value={feed}
        ></textarea>
        {/* Button */}
        <div className="flex justify-right flex-col mt-1 w-30">
          <Rating
            name="size-large"
            defaultValue={0}
            onChange={(event) => setfeedStar(event.target.value)}
            size="large"
          />
          <p
            disabled={ispending}
            onClick={() => postReview()}
            className="border text-white text-sm  w-auto "
          >
            {ispending ? (
              <Button sx={{height: {xs: 25, sm:25}, width: {xs: 120}}} loading variant="outlined" loadingPosition="start">
                Submit
              </Button>
            ) : (
              <p className="bg-black px-2 py-1 rounded-sm tracking-wide text-center">
                Submit
              </p>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
