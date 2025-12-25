import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Buttons from "../components/Buttons";

export default function Reviewlist() {
  let [feedbacks, setFeedbacks] = useState([]);
  let [Ratings, setRating] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/data")
      .then((response) => {
        setTimeout(() => {
          setFeedbacks(response.data);
       
        }, 200);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, [Ratings]);

  return (
    <div className="py-10 px-5  bg-yellow-500">
      <div className=" flex w-88 ">
        <div className="">
          <h1 className="text-start text-[22px] ">Our Customer Feedbacks</h1>
          <p className="text-black text-[13px] mb-5 ">
            don't take our word for it. Trust our customers
          </p>
        </div>
        <div className="flex gap-x-1 items-center ml-2  text-[12px]">
          <button className="border px-1 text-gray-600 ">preview</button>
          <button className="border px-1">next</button>
        </div>
      </div>
      <div className="flex flex-wrap py-5 px-3 h-auto shadow-lg  bg-gray-200 ">
        {feedbacks.map((items, index) => {
          return (
            <div
              className="  bg-white text-[13px] text-blue-500 rounded-sm w-40 min-h-50 h-auto mx-1 my-1 p-1 shadow-lg "
              key={index}
            >
              {/* <img src="/" alt="" /> */}
              Feedback
              <div className="flex justify-between">
                <Avatar
                  sx={{
                    bgcolor: deepOrange[600],
                    width: 18,
                    height: 16,
                    marginTop: 1,
                  }}
                >
                  N
                </Avatar>
                <Stack spacing={1} sx={{ marginTop: 1 }}>
                  <Rating
                    name="size-small"
                    readOnly
                    defaultValue={feedbacks[index].Rating}
                    size="small"
                  />
                </Stack>
              </div>
              <p className="p-1 break-all mt-1 text-black font-sans bg-gray-100 min-h-25 h-auto  flex flex-wrap tracking-wide text-[10px]">
                {items.msg}
              </p>
              <Buttons feedbacks={feedbacks} index={index} Ratings={Ratings} setRating={setRating} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
