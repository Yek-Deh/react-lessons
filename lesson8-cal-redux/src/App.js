import "./App.css";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  add,
  subtract,
  multiplication,
  division,
} from "./features/calcs/calcSlice";

function App() {
  const resultState = useSelector((state) => {
    return state.calc.result;
  });

  const dispatch = useDispatch();

  console.log(resultState);
  const [firstNumberInput, setFirstNumberInput] = useState(null);
  const [secondNumberInput, setSecondNumberInput] = useState(null);

  // EVENT HANDLERS
  function handleSumClick() {
    dispatch(
      add({
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      })
    );
  }

  function handleSubClick() {
    dispatch(
      subtract({
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      })
    );
  }

  function handleMultClick() {
    dispatch(
      multiplication({
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      })
    );
  }

  function handleDivClick() {
    dispatch(
      division({
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      })
    );
  }

  return (
    <div className="App">
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          background: "teal",
        }}
      >
        {/* FIRST INPUT */}
        <label>First Number</label>
        <input
          value={firstNumberInput}
          onChange={(e) => setFirstNumberInput(e.target.value)}
        />

        {/* SECOND INPUT */}
        <label>Second Number</label>
        <input
          value={secondNumberInput}
          onChange={(e) => setSecondNumberInput(e.target.value)}
        />

        <button onClick={handleSumClick}>sum</button>

        <button onClick={handleSubClick}>subtract</button>

        <button onClick={handleMultClick}>multiply</button>

        <button onClick={handleDivClick}>divide</button>

        <hr />

        <h2>{resultState}</h2>
      </div>
    </div>
  );
}

export default App;
