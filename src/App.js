import { useState } from "react";
import "./app.scss";
import { Game } from "./components/game/game";
import { Modal } from "./components/modal/modal";
import { ScoreBoard } from "./components/scoreboard/scoreboard";
import { GameMode} from "./components/gamemode/gamemode";

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

  const [gamemode, setGamemode] = useState("easy");

  const choseMode = () => {
    if(gamemode === "easy") {
      setGamemode("hard")
    } else {
      setGamemode("easy")
    }
  }

  return (
    <div className="app">
      <ScoreBoard score={score} gamemode={gamemode} />
      <Game handleWin={handleWin} handleLose={handleLose} gamemode={gamemode} />
      <Modal gamemode={gamemode} />
      <GameMode choseMode={choseMode} gamemode={gamemode} />
    </div>
  );
}

export default App;
