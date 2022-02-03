import "./game.scss";
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import React, { useState, useReducer } from "react";
import mainBackground from "../../images/bg-triangle.svg";

export const Game = ({ handleWin, handleLose }) => {
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
  const [result, setResult] = useState(true);
  const [source, setSource] = useState({ user: null, computer: null });

  const handleClick = (userInput) => {
    let choiceArr = ["Rock", "Paper", "Scissors"];
    const arr = [rock, paper, scissors];

    let computer = Math.floor(Math.random() * 3);

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

    if (choice.user === choice.computer) {
      console.log("DRAW");
      setResult("Draw");
    } else if (
      (choice.user === "Rock" && choice.computer === "Scissors") ||
      (choice.user === "Paper" && choice.computer === "Rock") ||
      (choice.user === "Scissors" && choice.computer === "Paper")
    ) {
      console.log("win");
      handleWin();
      setResult("Win");
    } else if (
      (choice.user === "Rock" && choice.computer === "Paper") ||
      (choice.user === "Scissors" && choice.computer === "Rock") ||
      (choice.user === "Paper" && choice.computer === "Scissors")
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

  console.log(
    `${choice.user}-wrap`.toLowerCase(), "grad-wrap"
  )

  return (
    <div className="game">
      {result ? (
        <div className="result-section">
          <div>
            <p>Your Choice</p>
            <div
              className={[`${choice.user}-wrap`.toLowerCase(), "grad-wrap"].join(" ")}
              >
              <button className="game-button win">
                <img src={source.user} alt="Paper Icon" />
              </button>
            </div>
          </div>
          <div className="result">
            <h3 id="result-title">You {result}</h3>
            <button onClick={() => setResult("")} id="play-again">
              Play again
            </button>
          </div>
          <div>
            <p>Computer Choice</p>
            <div
              className={[`${choice.computer}-wrap`.toLowerCase(), "grad-wrap"].join(" ")}
              >
              <button className="game-button">
                <img src={source.computer} alt={""} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <img src={mainBackground} alt="" className="background" />

          <div className="icons">
            <div className="grad-wrap paper-wrap">
              <button
                onClick={() => handleClick("Paper")}
                id="paper"
                className="game-button"
              >
                <img src={paper} alt="Paper Icon" />
              </button>
              {/* <p>Paper</p> */}
            </div>
            <div className="grad-wrap rock-wrap" id="rock-placement">
              <button
                onClick={() => handleClick("Rock")}
                id="rock"
                className="game-button"
              >
                <img src={rock} alt="Rock Icon" />
              </button>
              {/* <p>Rock</p> */}
            </div>
            <div className="grad-wrap scissors-wrap">
              <button
                onClick={() => handleClick("Scissors")}
                id="scissors"
                className="game-button"
              >
                <img src={scissors} alt="Scissors Icon" />
              </button>
              {/* <p>Scissors</p> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
