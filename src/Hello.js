import React from "react";

export const Hello = () => {
  React.useEffect(() => {
    // you will pass all the values that your effect depends on
    console.log("render");

    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>Hello</div>;
};
