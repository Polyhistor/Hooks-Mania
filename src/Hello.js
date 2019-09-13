import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { useFetch } from "./useFetchHook";
import { useMeasure } from "./useMeasure";
import { useCountRenders } from "./useCountRenders";

export const Hello = React.memo(({ increment }) => {
  // useCountRenders();
  return <button onClick={increment}>Hello</button>;

  // const renders = useRef(0);
  // const [count, setCount] = useState(() =>
  //   JSON.parse(localStorage.getItem("Count"))
  // );
  // const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  // useEffect(() => {
  //   localStorage.setItem("Count", JSON.stringify(count));
  // }, [count]);
  // const divRef = useRef();
  // const rect = useMeasure(divRef, [data]);
  // return (
  //   <div>
  //     <div style={{ display: "flex" }}>
  //       <div ref={divRef}>{loading ? "loading..." : data}</div>
  //     </div>
  //     <pre>{JSON.stringify(rect, null, 2)}</pre>
  //     <div>count: {count}</div>
  //     <button onClick={() => setCount(c => c + 1)}>increment</button>
  //   </div>
  // );
});
