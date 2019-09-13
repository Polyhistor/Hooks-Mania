import React from "react";
import { useCountRenders } from "./useCountRenders";

export const Square = React.memo(({ increment }) => {
  useCountRenders();
  return <button onClick={increment(5)}>Hello</button>;
});
