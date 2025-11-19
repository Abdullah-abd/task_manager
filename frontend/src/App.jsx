import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-center text-3xl text-blue-500 ">Counter: {count}</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </>
  );
}

export default App;
