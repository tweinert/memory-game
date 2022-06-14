import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import CardHolder from "./components/CardHolder.js";

function App(props) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <CardHolder score={score} setScore={setScore} setBestScore={setBestScore} />
    </div>
  );
}

export default App;
