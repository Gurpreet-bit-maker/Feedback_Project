import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Trash2, House, Ban } from "lucide-react";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

function Pagination({ reviewsFunc, reviewsData, countFunc, count }) {
  let navigate = useNavigate();

  useEffect(() => {
    let paginationMethod = async () => {
      try {
        // console.log(count);
        let maxData = await axios.get(
          `http://localhost:3000/user?page=${count}`,
          { withCredentials: true },
        );
        reviewsFunc(maxData.data);
        // console.log(maxData.data);
       
      } catch (error) {
        console.log(error.response.data);
      }
    };
    paginationMethod();
  }, [count]);

  // let func = () => {
  //   return function func2(cd) {
  //     cd(null);
  //     console.log("wrong");
  //   };
  // };
  // func();

  // const eventTringer = (e) => {
  //   if (e.target.innerText == "home") {
  //     navigate("/");
  //   }
  // };

  // let reducer = (state, action) => {
  //   switch (action.type) {
  //     case "inc":
  //       return { count: state.count + 1 };
  //     case "dec":
  //       return { count: state.count - 1 };
  //   }
  // };
  // let [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <div className="flex gap-x-2">
        <button
          onClick={() => {
            count == 1 ? countFunc(1) : countFunc((prev) => prev - 1);
          }}
          className="px-3 py-1 text-sm border rounded-md hover:bg-gray-200"
        >
          Prev
        </button>
        <button
          // bug pending
          onClick={() => {
            reviewsData.length > 0 && reviewsData.length >= 4
              ? countFunc((prev) => prev + 1)
              : countFunc(1);
          }}
          className="px-3 py-1 text-sm border rounded-md hover:bg-gray-200"
        >
          Next
          {/* {reviewsData.length == 0 && <Ban size={20} />} */}
        </button>
      </div>
      {/* <div onClick={eventTringer}>
        <li className="border">home</li>
        <li>contects</li>
        <li>about</li>
        <li>services</li>
      </div> */}
      {/* card ui */}
      {/* <Cards /> */}
      {/* <button onClick={() => dispatch({ type: "inc" })}>
        inc {state.count}
      </button>
      <button onClick={() => dispatch({ type: "dec" })}>dec</button> */}
    </>
  );
}

export default Pagination;
