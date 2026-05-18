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
      console.log(deleted.data);
      setFeedbacks([]);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3000/user`)
  //     .then((response) => {
  //       setTimeout(() => {
  //         setFeedbacks(response.data);
  //       }, 200);
  //     })
  //     .catch((error) => console.log(error));
  // }, [Ratings, deletedBtnClicked]);

  console.log(feedbacks);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 px-4 py-8">
      {/* Home Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => navigate("/")}
          className="bg-indigo-600 hover:bg-indigo-700 transition p-3 rounded-2xl shadow-xl text-white"
        >
          <House size={24} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-10">
          {/* Left */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Customer Feedback
            </h1>

            <p className="text-gray-500 mt-2 text-sm">
              Real reviews from our valuable customers ✨
            </p>

            <button
              onClick={deleteAll_method}
              className="mt-5 bg-red-500 hover:bg-red-600 transition text-white px-5 py-3 rounded-2xl shadow-md text-sm font-medium"
            >
              Delete All
            </button>
          </div>

          {/* Right */}
          <div className="bg-white px-5 py-3 rounded-2xl shadow-md border border-gray-100 flex items-center gap-4">
            <span className="text-gray-500 text-sm font-medium">{count}/3</span>

            <Pagination
              reviewsFunc={setFeedbacks}
              reviewsData={feedbacks}
              count={count}
              countFunc={setCount}
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {feedbacks.map((items, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 p-5 border border-gray-100"
              >
                {/* Top */}
                <div className="flex flex-col items-start gap-y-1">
                  <div className="flex justify-between gap-3  w-full">
                    <Avatar
                      sx={{
                        bgcolor: deepOrange[600],
                        width: 45,
                        height: 45,
                        fontSize: "18px",
                      }}
                    >
                      {items.username?.[0]?.toUpperCase()}
                    </Avatar>

                    <div>
                      <h2 className="font-semibold text-gray-800 text-base">
                        {items.username}
                      </h2>

                      <p className="text-xs text-gray-400 mt-[2px]">
                        {new Date(items.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  {/* middle */}
                  <div className="flex flex-col gap-y-4 w-full">
                    <Rating
                      name="size-small"
                      readOnly
                      value={Number(items.rating)}
                      size="small"
                    />
                    <div className="flex justify-center">
                      <img
                        className="w-60 h-80 rounded-sm shadow-sm md:w-90"
                        src={items.userimg}
                        loading="lazy"
                        alt={items.userimg}
                      />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {items.msg}
                    </p>
                  </div>
                </div>
                {/* Bottom */}
                <div className="mt-6 flex justify-start">
                  <Buttons
                    feedbacks={feedbacks}
                    setFeedbacks={setFeedbacks}
                    index={index}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
