import "./game.scss";
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import React, { useState } from "react";

export const Game = ({ handleWin, handleLose }) => {
  // inputs
  const [choice, setChoice] = useState({ user: "", computer: "" });

  // results
  const [result, setResult] = useState("");

  // sources for images
  let [source, setSource] = useState({ user: null, computer: null });

  const handleClick = (userInput) => {

    console.log(choice);

    // arrays
    let choiceArr = ["Rock", "Paper", "Scissors"];
    const arr = [rock, paper, scissors];

    // set computer
    let computer = Math.floor(Math.random() * 3);
    setSource({ ...source,  computer: arr[computer] });
    setChoice({ ...choice, computer: choiceArr[computer] });

    // set user
    setSource({ ...source, user: arr[choiceArr.indexOf(userInput)] });
    setChoice({ ...choice, user: userInput });

    if (choice.user === choice.computer) {
      console.log(choice.user, choice.computer);
      console.log("DRAW");
      setResult("Draw");
    } else if (
      (choice.user === "Rock" && choice.computer === "Scissors") ||
      (choice.user === "Paper" && choice.computer === "Rock") ||
      (choice.user === "Scissors" && choice.computer === "Paper")
    ) {
      console.log(choice.user, choice.computer);

      console.log("win");
      handleWin();
      setResult("User");
    } else if (
      (choice.user === "Rock" && choice.computer === "Paper") ||
      (choice.user === "Scissors" && choice.computer === "Rock") ||
      (choice.user === "Paper" && choice.computer === "Scissors")
    ) {
      console.log(choice.user, choice.computer);

      console.log("lose");
      handleLose();
      setResult("Computer");
    } else {
      console.error(
        "An error occured, please re-try or type in a different input."
      );
    }
  };

  return (
    <div className="game">
      {result ? (
        <>
          <div className="userResult">
            <p>Your Choice</p>
            <button className="paper">
              <img src={source.user} alt="Paper Icon" />
            </button>
          </div>
          <div className="results">
            <h3>You {result}</h3>
            <button onClick={() => setResult("")}>Play again</button>
          </div>
          <div className="computerResult">
            <p>Computer Choice</p>
            <button className="paper">
              <img src={source.computer} alt={""} />
            </button>
          </div>
        </>
      ) : (
        <span>
          <div className="top">
            <button className="paper" onClick={() => handleClick("Paper")}>
              <img src={paper} alt="Paper Icon" />
            </button>
            <button className="rock" onClick={() => handleClick("Rock")}>
              <img src={rock} alt="Rock Icon" />
            </button>
            <button
              className="scissors"
              onClick={() => handleClick("Scissors")}
            >
              <img src={scissors} alt="Scissors Icon" />
            </button>
          </div>
          <div className="bottom">
            <p>Paper</p>
            <p>Rock</p>
            <p>Scissors</p>
          </div>
        </span>
      )}
    </div>
  );
};
