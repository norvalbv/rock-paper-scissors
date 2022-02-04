import "./game.scss";
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import spock from "../../images/icon-spock.svg";
import lizard from "../../images/icon-lizard.svg";
import React, { useState, useReducer, useRef } from "react";
import easyBackground from "../../images/bg-triangle.svg";
import hardBackground from "../../images/bg-pentagon.svg";

export const Game = ({ handleWin, handleLose, gamemode }) => {
  // const reducer = (state, action) => {
  //   switch (action) {
  //     case "Rock":
  //       return { ...state, user: "Rock"};
  //     case "Paper":
  //       return;
  //     case "Scissors":
  //       return;
  //     default:
  //       return state;
  //   }
  // };

  // const test = () => {
  //   const [choice, dispatch] = useReducer(reducer, null);
  // }

  const [choice, setChoice] = useState({ user: "", computer: "" });
  const [result, setResult] = useState(false);
  const [source, setSource] = useState({ user: null, computer: null });

  const handleClick = (userInput) => {
    let choiceArr = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    const arr = [rock, paper, scissors, lizard, spock];

    let computer =
      gamemode === "easy"
        ? Math.floor(Math.random() * 3)
        : Math.floor(Math.random() * 5);

    setSource((prev) => {
      return {
        ...prev,
        user: arr[choiceArr.indexOf(userInput)],
        computer: arr[computer],
      };
    });

    setChoice((prev) => {
      return {
        ...prev,
        user: userInput,
        computer: choiceArr[computer],
      };
    });

    console.log(choice, source);
    // spock lizard
    if (choice.user === choice.computer) {
      console.log("DRAW");
      setResult("Draw");
    } else if (
      (choice.user === "Rock" && choice.computer === "Scissors") ||
      (choice.user === "Paper" && choice.computer === "Rock") ||
      (choice.user === "Scissors" && choice.computer === "Paper") ||
      // Hard Mode Only

      (choice.user === "Scissors" && choice.computer === "Lizard") ||
      (choice.user === "Paper" && choice.computer === "Spock") ||
      (choice.user === "Rock" && choice.computer === "Lizard") ||
      (choice.user === "Lizard" && choice.computer === "Spock") ||
      (choice.user === "Lizard" && choice.computer === "Paper") ||
      (choice.user === "Spock" && choice.computer === "Rock") ||
      (choice.user === "Spock" && choice.computer === "Scissors")
    ) {
      console.log("win");
      handleWin();
      setResult("Win");
    } else if (
      (choice.user === "Rock" && choice.computer === "Paper") ||
      (choice.user === "Scissors" && choice.computer === "Rock") ||
      (choice.user === "Paper" && choice.computer === "Scissors") ||
      // Hard Mode Only

      (choice.user === "Scissors" && choice.computer === "Spock") ||
      (choice.user === "Paper" && choice.computer === "Lizard") ||
      (choice.user === "Rock" && choice.computer === "Spock") ||
      (choice.user === "Lizard" && choice.computer === "Rock") ||
      (choice.user === "Lizard" && choice.computer === "Scissors") ||
      (choice.user === "Spock" && choice.computer === "Paper") ||
      (choice.user === "Spock" && choice.computer === "Lizard")
    ) {
      console.log("lose");
      handleLose();
      setResult("Lose");
    } else {
      console.error(
        "An error occured, please re-try or type in a different input."
      );
    }
  };

  return (
    <div className="game">
      {result ? (
        <div className="result-section">
          <div className="your-choice">
            <p>Your Choice</p>
            <div
              className={[
                `${choice.user}-wrap`.toLowerCase(),
                "grad-wrap",
              ].join(" ")}
            >
              <button
                className={result === "Win" ? "game-button win" : "game-button"}
              >
                <img src={source.user} alt="Paper Icon" />
              </button>
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
                `${choice.computer}-wrap`.toLowerCase(),
                "grad-wrap",
              ].join(" ")}
            >
              <button
                className={
                  result === "Lose" ? "game-button win" : "game-button"
                }
              >
                <img src={source.computer} alt="Computer choice" />
              </button>
            </div>
            <p>{choice.computer}</p>
          </div>
        </div>
      ) : (
        <>
          {gamemode === "easy" ? (
            <img src={easyBackground} alt="" className="background" />
          ) : (
            <img src={hardBackground} alt="" className="background" />
          )}
          <div className="icons">
            <div className="icon-3d-display paper-3d">
              <span className="grad-wrap paper-wrap">
                <button
                  onClick={() => handleClick("Paper")}
                  id="paper"
                  className="game-button"
                >
                  <img src={paper} alt="Paper Icon" />
                </button>
              </span>
            </div>
            <div className="icon-3d-display rock-3d">
              <span className="grad-wrap rock-wrap" id="rock-placement">
                <button
                  onClick={() => handleClick("Rock")}
                  id="rock"
                  className="game-button"
                >
                  <img src={rock} alt="Rock Icon" />
                </button>
              </span>
            </div>
            <div className="icon-3d-display scissors-3d">
              <span className="grad-wrap scissors-wrap">
                <button
                  onClick={() => handleClick("Scissors")}
                  id="scissors"
                  className="game-button"
                >
                  <img src={scissors} alt="Scissors Icon" />
                </button>
              </span>
            </div>
            {gamemode === "hard" && (
              <div className="icon-3d-display lizard-3d">
                <span className="grad-wrap lizard-wrap">
                  <button
                    onClick={() => handleClick("Lizard")}
                    id="lizard"
                    className="game-button"
                  >
                    <img src={lizard} alt="Lizard Icon" />
                  </button>
                </span>
              </div>
            )}
            {gamemode === "hard" && (
              <div className="icon-3d-display spock-3d">
                <span className="grad-wrap spock-wrap">
                  <button
                    onClick={() => handleClick("Spock")}
                    id="spock"
                    className="game-button"
                  >
                    <img src={spock} alt="Spock Icon" />
                  </button>
                </span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
