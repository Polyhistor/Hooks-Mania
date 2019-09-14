import React, { useContext } from "react";
import { userContext } from "./utilities/UserContext";

const About = () => {
  const { value, setValue } = useContext(userContext);
  return <div>{value}</div>;
};

export default About;
