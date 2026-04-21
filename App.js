import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      
      <h1 style={{ fontSize: "100px" }}>{count}</h1>

      <button 
        style={{ padding: "15px", margin: "10px", background: "green", color: "white" }}
        onClick={() => setCount(count + 1)}
      >
        Count
      </button>

      <button 
        style={{ padding: "15px", margin: "10px", background: "red", color: "white" }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>

    </div>
  );
}

export default App;