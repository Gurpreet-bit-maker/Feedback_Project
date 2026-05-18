// import Button from "@mui/material/Button";
import Button from "@mui/material/Button";

import axios from "axios";
import { use, useEffect, useRef, useState } from "react";

export default function Buttons({ feedbacks, setFeedbacks, index }) {
  let [count, setcount] = useState(0);

  let refBtn = useRef();
  let timeBtnRef = useRef();

  // setInterval(() => {
  //   let time = new Date();
  //   timeBtnRef = `${time.getHours()}: ${time.getMinutes()}: ${time.getSeconds()}`;
  //   console.log(timeBtnRef);
  // }, 1000);

  // useEffect(() => {
  //   if (count === 5) {
  //     refBtn.current.style.backgroundColor = "red";
  //   }
  // }, [count]);

  let click = async (index) => {
    try {
      let deleted = feedbacks.find((_, id) => id == index);
      let id = deleted._id;
      let deletedFeedback = await axios.delete(
        `http://localhost:3000/user/${id}`,
      );
      setFeedbacks((prev) => prev.filter((item) => item._id !== id));
      console.log(deletedFeedback.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Ui
  
  return (
    <div className="flex justify-between text-white mt-5 text-[12px]">
      <Button
        sx={{
          width: { xs: 2, sm: 8, md: 150 },
          fontSize: { xs: 10, sm: 12, md: 20 },
        }}
        onClick={() => click(index)}
        variant="outlined"
      >
        Delete
      </Button>
      {/* <button
        ref={refBtn}
        className="text-black"
        onClick={() => {
          count < 5 && setcount(count + 1);
        }}
      >
        click me {count}
      </button> */}
    </div>
  );
}
