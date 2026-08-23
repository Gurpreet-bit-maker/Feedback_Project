import React, { useState, useEffect } from "react";
import Result from "./Auth";
import axios from "axios";

export let Run = (prop) => {
  let [user, setsubject] = useState(null);
  let [loading, setLoading] = useState(true);
  let num = 1;

  let fetchData = async () => {
    try {
      let response = await axios.get(`http://localhost:3000/user?page=${num}`, {
        withCredentials: true,
      });
      // console.log(response.data);
      setsubject(response.data);
    } catch (error) {
      setsubject(null);
      console.log(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Result.Provider value={{ user, loading, fetchData }}>
      {prop.children}
    </Result.Provider>
  );
};
