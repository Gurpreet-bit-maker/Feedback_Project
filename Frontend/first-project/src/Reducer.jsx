import { useEffect, useReducer, useState } from "react";
let employee_Data = {
  username: "",
  password: "",
};

let reducer = (state, action) => {
  // return {
  //   ...state,
  //   [action.type]: action.val,
  // };

  // return{
  //   ...state, action.type: action.val
  // }
  // return {...state,[action.type]: action.val}
  // return console.log(action.type)
  if (action.type == "submit") {
    return { username: "", password: "" };

    // return { ...state, username: state.username, password: state.password };
  }

  return { state };
  
};

export const Reducer = () => {
  let [count, dispatch] = useReducer(reducer, employee_Data);

  console.log(count);

  return (
    <div className="border w-1/2 flex flex-col justify-center items-center">
      <h1>counter</h1>
      {/* <img className="w-12" src="/public/perfume.jpg" alt="" /> */}
      {/* btns */}
      <div>
        <input
          className="border"
          type="text"
          placeholder="username"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "username" })
          }
        />
        <input
          className="border"
          type="text"
          placeholder="password"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "password" })
          }
        />

        <button
          onClick={() => dispatch({ type: "submit" })}
          className="px-2"
          style={{ border: "2px solid red" }}
        >
          Add item
        </button>
      </div>
    </div>
  );
};
