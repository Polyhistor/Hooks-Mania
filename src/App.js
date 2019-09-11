import React from "react";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div style={{ textAlign: "center" }}>
      <input name="email" value={values.email} onChange={handleChange}></input>
      <input
        name="password"
        value={values.password}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default App;
