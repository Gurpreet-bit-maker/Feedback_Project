import React, { useState, useEffect } from "react";
import Result from "./Notecontext";
import axios from "axios";

export let Run = (prop) => {
  let [feedbackDataBycontext, setsubject] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/user")
  //     .then((response) => {
  //       setsubject(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  console.log("helloji sir");
  return (
    <Result.Provider value={{ feedbackDataBycontext }}>
      {prop.children}
    </Result.Provider>
  );
};
