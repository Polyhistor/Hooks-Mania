import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
  useMemo,
  useReducer
} from "react";
import { Hello } from "./Hello";
import { useForm } from "./useForm";
import { useFetch } from "./useFetchHook";
import { Square } from "./square";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.id ? { ...t, completed: !t.completed } : t
        ),
        todoCount: state.todoCount
      };

    default:
      return state;
  }
};

const App = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0
  });
  const [text, setText] = useState();

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "add-todo", text });
          setText("");
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)}></input>
      </form>
      <div>number of todos: {todoCount} </div>
      {todos.map((t, idx) => (
        <div
          key={t.text}
          onClick={() => dispatch({ type: "toggle-todo", id: idx })}
          style={{ textDecoration: t.completed ? "line-through" : "" }}
        >
          {t.text}
        </div>
      ))}
    </div>
  );
  // useMemo practice
  // const [count, setCount] = useState(0);
  // const { data } = useFetch("https://cat-fact.herokuapp.com/facts/random");
  // const computeLongestWord = data => {
  //   if (!data) {
  //     return [];
  //   }
  //   console.log("computing longest words");
  //   let longestWord = "";
  //   console.log(data);
  //   JSON.parse(data).forEach(sentence =>
  //     sentence.split(" ").forEach(word => {
  //       if (word.length > longestWord.length) {
  //         longestWord = word;
  //       }
  //     })
  //   );
  //   return longestWord;
  // };
  // const memoed = useMemo(() => computeLongestWord, input);
  // return (
  //   <div>
  //     <div>count: {count}</div>
  //     <button onClick={() => setCount(count + 1)}>incremenet</button>
  //     <div>{computeLongestWord(data)}</div>
  //   </div>
  // );
  // const [values, handleChange] = useForm({
  //   email: "",
  //   password: "",
  //   firstName: ""
  // });
  // const [showHello, setShowHello] = useState(true);
  // const inputRef = useRef();
  // const hello = useRef(() => console.log("hello"));
  // useLayoutEffect(() => {
  //   console.log(inputRef.current.getBoundingClientRect());
  // }, []);
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
  // const [count, setCount] = useState(0);
  // const favNums = [7, 21, 37];
  // const increment = useCallback(
  //   n => {
  //     setCount(c => c + n);
  //   },
  //   [setCount]
  // );
  // return (
  // <div>
  //   <Hello increment={increment} />
  //   <div>Count: {count}</div>
  //   {favNums.map(e => {
  //     return <Square increment={increment} n={e} key={e} />;
  //   })}
  // </div>
  //   <>
  //     <button onClick={() => setShowHello(!showHello)}> toggle</button>
  //     {showHello && <Hello />}
  //     <div style={{ textAlign: "center" }}>
  //       <input
  //         name="email"
  //         placeholder="email"
  //         value={values.email}
  //         onChange={handleChange}
  //       ></input>
  //       <input
  //         name="password"
  //         placeholder="password"
  //         value={values.password}
  //         onChange={handleChange}
  //       ></input>
  //       <input
  //         id="choso"
  //         ref={inputRef}
  //         name="firstName"
  //         placeholder="firstName"
  //         value={values.firstName}
  //         onChange={handleChange}
  //       ></input>
  //       <button
  //         onClick={() => {
  //           inputRef.current.focus();
  //           hello.current();
  //         }}
  //       ></button>
  //     </div>
  //   </>
  // );
};

export default App;
