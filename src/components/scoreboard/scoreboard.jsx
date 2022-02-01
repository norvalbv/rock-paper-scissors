import "./scoreboard.scss";

export const ScoreBoard = ({ score }) => {
  return (
    <div className="scoreboard">
      <div className="game-logo">
        <h1>
          Rock
          <br />
          Paper
          <br />
          Scissors
        </h1>
      </div>
      <div className="score-container">
        <h2 className="score-title">Score</h2>
        <p className="score">{score}</p>
      </div>
    </div>
  );
};
