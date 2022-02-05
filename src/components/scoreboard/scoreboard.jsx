import "./scoreboard.scss";
import easyLogo from "../../images/logo.svg";
import hardLogo from "../../images/logo-bonus.svg";

export const ScoreBoard = ({ score, gamemode }) => {
  return (
    <div className="scoreboard">
      {gamemode === "easy" ? (
        <img src={easyLogo} alt="Easy game logo" className="game-logo" />
      ) : (
        <img src={hardLogo} alt="hard game logo" className="game-logo" />
      )}
      <div className="score-container">
        <h2 className="score-title">Score</h2>
        <p className="score">{score}</p>
      </div>
    </div>
  );
};
