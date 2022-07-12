import logo from './logo.svg';
import './App.css';

import { useEffect, useState, useReducer } from "react";

import Navigation from './components/Navigation';

function App() {
  const [state, setState] = useState("1");
  const [state2, setState2] = useState("a");

  const [checked, setChecked] = useReducer(
    (checked) => ! checked,
    false
  );

  useEffect(() => {
    console.log(`It's state ${state}`);
  }, [state, state2]);

  useEffect(() => {
    console.log(`It's state2 ${state2}`);
  }, [state2]);

  return (
    <div className="App">
      <Navigation/>
      <h1>Current state is {state}</h1>
      <button onClick={() => setState("0")}>
        Set state 0
      </button>
      <button onClick={() => setState("1")}>
        Set state 1
      </button>
      <h2>Current state2 is {state2}</h2>
      <button onClick={() => setState2("a")}>
        Set state a
      </button>
      <button onClick={() => setState2("b")}>
        Set state b
      </button>

      <h2>Checkbox</h2>
      <input 
        type="checkbox"
        value={checked}
        onChange={setChecked}
      />
      <label>
        {checked ? "checked" : "not checked"}
      </label>
    </div>
  );
}

export default App;
