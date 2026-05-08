import axios from "axios";
import React, { useEffect, useState } from "react";
import { Trash2, House, Ban } from "lucide-react";

function Pagination({ reviewsFunc, reviewsData, countFunc, count }) {
  useEffect(() => {
    let paginationMethod = async () => {
      try {
        console.log(count);
        let maxData = await axios(`http://localhost:3000/user?page=${count}`);
        reviewsFunc(maxData.data);
        console.log(maxData.data);
      } catch (error) {
        console.log(error);
      }
    };
    paginationMethod();
  }, [count]);

  return (
    <>
      <span className="flex justify-center text-gray-500 text-sm">{`${count}/${3}`}</span>
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
          onClick={() => {
            reviewsData.length > 0 && reviewsData.length >= 4
              ? countFunc((prev) => prev + 1)
              : countFunc(1);
          }}
          className="px-3 py-1 text-sm border rounded-md hover:bg-gray-200"
        >
          Next {reviewsData.length == 0 && <Ban size={20} />}
        </button>
      </div>
    </>
  );
}

export default Pagination;
