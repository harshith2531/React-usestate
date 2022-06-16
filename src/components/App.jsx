import React, { useState } from "react";

function App() {
  const time = new Date().toLocaleTimeString();

  const [timer, getTimmer] = useState(time);

  function getTimes() {
    const newTime = new Date().toLocaleTimeString();
    getTimmer(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTimes}>Get Time</button>
    </div>
  );
}

export default App;
