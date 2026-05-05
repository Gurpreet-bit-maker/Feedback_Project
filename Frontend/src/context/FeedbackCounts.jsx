import React, { useState, useEffect } from "react";
import Result from "./Notecontext";
import axios from "axios";

export let Run = (prop) => {
  let [feedbackCounts, setsubject] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/feedback")
      .then((response) => {
        setsubject(response.data.length);

        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Result.Provider value={feedbackCounts}>{prop.children}</Result.Provider>
  );
};
