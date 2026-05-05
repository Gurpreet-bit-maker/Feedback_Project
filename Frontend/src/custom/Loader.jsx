import React from "react";
import { useState } from "react";

function useLoader() {
  let [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 1000);
  return { loading };
}
export default useLoader;
