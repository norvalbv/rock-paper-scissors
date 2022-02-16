export const GameResults = ({ result, choice, source, setResult }) => {

  console.log([result, choice, source])
  return (
    <div className="result-section">
      <div className="your-choice">
        <p>Your Choice</p>
        <div
          className={[
            "icon-3d-display",
            `${choice.user}-3d`.toLowerCase(),
          ].join(" ")}
        >
          <span
            className={[
              `${choice.user}-wrap`.toLowerCase(),
              "grad-wrap",
              result === "Win" && "win",
            ].join(" ")}
          >
            <button className="game-button">
              <img src={source.user} alt="User choice" />
            </button>
          </span>
        </div>
        <p>{choice.user}</p>
      </div>
      <div className="result">
        <h3 id="result-title">You {result}</h3>
        <button
          onClick={() => {
            setResult("");
          }}
          id="play-again"
          style={
            result === "Lose"
              ? { color: "red" }
              : result === "Win"
              ? { color: "green" }
              : null
          }
        >
          Play again
        </button>
      </div>
      <div className="computer-choice">
        <p>Computer Choice</p>
        <div
          className={[
            "icon-3d-display",
            `${choice.computer}-3d`.toLowerCase(),
          ].join(" ")}
        >
          <span
            className={[
              `${choice.computer}-wrap`.toLowerCase(),
              "grad-wrap",
              result === "Lose" && "win",
            ].join(" ")}
          >
            <button className="game-button">
              <img src={source.computer} alt="Computer choice" />
            </button>
          </span>
        </div>
        <p>{choice.computer}</p>
      </div>
    </div>
  );
};
