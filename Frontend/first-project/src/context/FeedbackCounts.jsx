import React, { useState, useEffect } from "react";
import Result from "./Notecontext";
import axios from "axios";

// export let Trigger = (props) => {
//   let state = {
//     name: "singh",
//     class: "5b",
//   };

//   return <Result.Provider value={state}>

//     {props.children}

//     </Result.Provider>;
// };

export let Run = (prop) => {
  let [feedbackCounts, setsubject] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/users/data")
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
