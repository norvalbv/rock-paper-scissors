import "./scoreboard.scss";
import easyLogo from "../../images/logo.svg";
import hardLogo from "../../images/logo-bonus.svg";

export const ScoreBoard = ({ score, gamemode }) => {
  return (
    <div className="scoreboard">
      <div className="game-logo">
        {gamemode === "easy" ? (
          <img src={easyLogo} alt="Easy game logo" />
        ) : (
          <img src={hardLogo} alt="hard game logo" />
        )}
      </div>
      <div className="score-container">
        <h2 className="score-title">Score</h2>
        <p className="score">{score}</p>
      </div>
    </div>
  );
};
