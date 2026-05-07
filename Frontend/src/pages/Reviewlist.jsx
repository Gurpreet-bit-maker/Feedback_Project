import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Buttons from "../components/reviewCards/Buttons";
import { useNavigate } from "react-router-dom";
import CreatedAt from "../components/reviewCards/CreatedAt";
import Pagination from "../components/reviewCards/Pagination";
import { Trash2, House } from "lucide-react";

export default function Reviewlist() {
  let navigate = useNavigate();
  let [feedbacks, setFeedbacks] = useState([]);
  let [Ratings, setRating] = useState();
  let [deletedBtnClicked, setDeletedAllBtn] = useState(false);
  let [count, setCount] = useState(1);

  let deleteAll_method = async () => {
    try {
      let deleted = await axios.delete("http://localhost:3000/user");
      setDeletedAllBtn((prev) => !prev);
      console.log(deleted);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user`)
      .then((response) => {
        setTimeout(() => {
          setFeedbacks(response.data);
        }, 200);
      })
      .catch((error) => console.log(error));
  }, [Ratings, deletedBtnClicked]);

  return (
    <div className="py-12 px-6 bg-gray-100 h-screen">
      <div className="max-w-5xl mx-auto">
        <House
          size={40}
          onClick={() => navigate("/")}
          className="bg-green-300 text-black p-1 rounded-md "
        />
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-8">
          {/* Left Section */}
          <div className="space-y-3">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Our Customer Feedback
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Don't take our word for it. Trust our customers.
              </p>
            </div>

            <button
              onClick={deleteAll_method}
              className="bg-red-500 hover:bg-red-600 transition text-white px-5 py-2 rounded-lg shadow-sm"
            >
              Delete All
            </button>
          </div>

          {/* Right Section */}
          <div className="flex justify-start md:justify-end">
            <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-200">
              <Pagination
                reviewsFunc={setFeedbacks}
                reviewsData={feedbacks}
                count={count}
                countFunc={setCount}
              />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {feedbacks.map((items, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition border border-gray-100"
              >
                {/* Top */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <Avatar
                      sx={{
                        bgcolor: deepOrange[600],
                        width: 34,
                        height: 34,
                      }}
                    >
                      {items.username?.[0]?.toUpperCase()}
                    </Avatar>

                    <div>
                      <h2 className="text-sm font-semibold text-gray-800">
                        {items.username}
                      </h2>

                      <p className="text-[11px] text-gray-400">
                        {new Date(items.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <Rating
                    name="size-small"
                    readOnly
                    defaultValue={items.rating}
                    size="small"
                  />
                </div>

                {/* Message */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {items.msg}
                </p>

                {/* Buttons */}
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
