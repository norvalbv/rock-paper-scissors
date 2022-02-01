import { useState } from "react";
import "./app.scss";
import { Game } from "./components/game/game";
import { ScoreBoard } from "./components/scoreboard/scoreboard";

function App() {
  const [score, setScore] = useState(0);

  const handleWin = () => {
    setScore((score) => score + 1);
  };

  const handleLose = () => {
    if (score <= 0) {
      return;
    } else {
      setScore((score) => score - 1);
    }
  };

  return (
    <div className="app">
      <ScoreBoard score={score} />
      <Game handleWin={handleWin} handleLose={handleLose} />
    </div>
  );
}

export default App;
