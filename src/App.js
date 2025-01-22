import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState("");

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
    setHistory("\nAdded: " + Number(inputRef.current.value) + history);
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
    setHistory("\nSubtracted: " + Number(inputRef.current.value) + history);
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
    setHistory("\nMultplied: " + Number(inputRef.current.value) + history);
  }

  function divide(e) {
    e.preventDefault();
    if (Number(inputRef.current.value) === 0) {
      alert("You cannot divide by 0.");
    } else {
      setResult((result) => result / Number(inputRef.current.value));
      setHistory("\nDivided: " + Number(inputRef.current.value) + history);
    }
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p class="result" ref={resultRef}>
          {result}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>minus</button>
        <button onClick={times}>times</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
      <p>History:</p>
      <p class="history">
        <pre>{history === "" ? "No history to show" : history}</pre>
      </p>
    </div>
  );
}

export default App;
