import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
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

  const inputRef = useRef();

  const hello = useRef(() => console.log("hello"));

  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());
  }, []);

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
      <button onClick={() => setShowHello(!showHello)}> toggle</button>
      {showHello && <Hello />}
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
          id="choso"
          ref={inputRef}
          name="firstName"
          placeholder="firstName"
          value={values.firstName}
          onChange={handleChange}
        ></input>
        <button
          onClick={() => {
            inputRef.current.focus();
            hello.current();
          }}
        ></button>
      </div>
    </>
  );
};

export default App;
