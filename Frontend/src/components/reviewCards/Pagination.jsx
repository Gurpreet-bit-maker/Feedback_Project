import axios from "axios";
import React, { useEffect, useState } from "react";

function Pagination({ reviewsFunc, reviewsData, countFunc, count }) {
  useEffect(() => {
    let paginationMethod = async () => {
      try {
        console.log(count);
        let maxData = await axios(`http://localhost:3000/user?page=${count}`);
        reviewsFunc(maxData.data);
      } catch (error) {
        console.log(error);
      }
    };
    paginationMethod();
  }, [count]);

  console.log(reviewsData.length);
  return (
    <div className="flex gap-x-2">
      <button
        onClick={() => {
          count > 0 ? countFunc((prev) => prev - 1) : countFunc(0);
        }}
        className="px-3 py-1 text-sm border rounded-md hover:bg-gray-200"
      >
        Prev
      </button>
      <button
        onClick={() => {
          reviewsData.length > 0 ? countFunc((prev) => prev + 1) : countFunc(1);
        }}
        className="px-3 py-1 text-sm border rounded-md hover:bg-gray-200"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
