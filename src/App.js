import React, { useState, useEffect } from "react";
import { Hello } from "./Hello";
import { useForm } from "./useForm";
import { useFetch } from "./useFetchHook";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });

  const [showHello, setShowHello] = useState(true);

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("Count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("Count", JSON.stringify(count));
  }, [count]);

  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, [values.email]);

  // useEffect(() => {
  //   console.log("mount 1");
  // }, []);

  // useEffect(() => {
  //   console.log("mount 2");
  // }, []);

  // the second parameter is the dependecy values, which means we would like the effect
  // to take place when these values change

  return (
    <>
      <div>{loading ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
      {/* <button onClick={() => setShowHello(!showHello)}> toggle</button>
      {showHello && <Hello />} */}
      <div style={{ textAlign: "center" }}>
        <input
          name="email"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
        ></input>
        <input
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
        ></input>
        <input
          name="firstName"
          placeholder="firstName"
          value={values.firstName}
          onChange={handleChange}
        ></input>
      </div>
    </>
  );
};

export default App;
