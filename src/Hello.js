import React, { useRef, useEffect, useState } from "react";
import { useFetch } from "./useFetchHook";

export const Hello = () => {
  // const renders = useRef(0);

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("Count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("Count", JSON.stringify(count));
  }, [count]);

  // console.log("hello renders", renders.current++);

  return (
    <div>
      <div>{loading ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
    </div>
  );
};
