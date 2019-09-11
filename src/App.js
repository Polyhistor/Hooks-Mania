import React, { useState } from "react";
import { Hello } from "./Hello";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });

  const [showHello, setShowHello] = useState(true);

  // useEffect(() => {
  //   // you will pass all the values that your effect depends on
  //   console.log("render");

  //   return () => {
  //     console.log("unmount");
  //   };
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
          value={values.email}
          onChange={handleChange}
        ></input>
        <input
          name="password"
          value={values.password}
          onChange={handleChange}
        ></input>
        <input
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
        ></input>
      </div>
    </>
  );
};

export default App;
