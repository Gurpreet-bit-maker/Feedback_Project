import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Buttons from "../components/reviewCards/Buttons";
import { useNavigate } from "react-router-dom";
import CreatedAt from "../components/reviewCards/CreatedAt";

export default function Reviewlist() {
  let navigate = useNavigate();
  let [feedbacks, setFeedbacks] = useState([]);
  let [Ratings, setRating] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((response) => {
        setTimeout(() => {
          setFeedbacks(response.data);
        }, 200);
      })
      .catch((error) => console.log(error));
  }, [Ratings]);

  return (
    <div className="py-12 px-6 bg-gray-100 h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Our Customer Feedback
            </h1>
            <p className="text-sm text-gray-500">
              Don't take our word for it. Trust our customers.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => navigate("/")}
              className="px-3 py-1 text-sm border rounded-md hover:bg-gray-200"
            >
              Prev
            </button>
            <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-200">
              Next
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {feedbacks.map((items, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <Avatar
                    sx={{
                      bgcolor: deepOrange[600],
                      width: 28,
                      height: 28,
                    }}
                  >
                    N
                  </Avatar>

                  <Rating
                    name="size-small"
                    readOnly
                    defaultValue={items.rating}
                    size="small"
                  />
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  {items.msg}
                </p>
                <CreatedAt key={index} createdData={items} />
                <Buttons
                  feedbacks={feedbacks}
                  index={index}
                  Ratings={Ratings}
                  setRating={setRating}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
