import { useState } from "react";
import Chai from "./chai";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
     <Chai/>
      <h1>Hello World</h1>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default App;