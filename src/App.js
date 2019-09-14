import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
  useMemo,
  useReducer,
  useContext
} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Hello } from "./Hello";
import { useForm } from "./useForm";
import { useFetch } from "./useFetchHook";
import { Square } from "./square";
import About from "./About";
import { userContext } from "./utilities/UserContext";
import News from "./news";

const App = () => {
  const [value, setValue] = useState("Hello from context");

  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  return (
    <Router>
      <div>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/news/">News</Link>
          </li>
        </nav>
      </div>
      <userContext.Provider value={providerValue}>
        <Route path="/" exact></Route>
        <Route path="/about/" exact component={About}></Route>
        <Route path="/news/" exact component={News}></Route>
      </userContext.Provider>
    </Router>
  );
};

export default App;
