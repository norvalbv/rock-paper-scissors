import "./game.scss";
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import spock from "../../images/icon-spock.svg";
import lizard from "../../images/icon-lizard.svg";
import { useState } from "react";
import easyBackground from "../../images/bg-triangle.svg";
import hardBackground from "../../images/bg-pentagon.svg";
import { GameButtons } from "./gamebuttons";
import { GameResults } from "./gameresults";

export const Game = ({ handleWin, handleLose, gamemode }) => {
  const [choiceState, setChoiceState] = useState({ user: "", computer: "" })
  const [result, setResult] = useState(false);
  const [source, setSource] = useState({ user: null, computer: null });
  let choiceArr =
    gamemode === "easy"
      ? ["Paper", "Rock", "Scissors"]
      : ["Lizard", "Spock", "Scissors", "Paper", "Rock"];

  const imgSources = gamemode === "easy" ?
  [paper, rock, scissors] :
  [lizard, spock, scissors, paper, rock];

  const handleClick = (userInput) => {
    userInput = userInput.item;
    let computer = Math.floor(Math.random() * choiceArr.length);

    setSource((prev) => {
      return {
        user: imgSources[choiceArr.indexOf(userInput)],
        computer: imgSources[computer],
      };
    });

    const choice = { user: "", computer: "" };
    
    choice.user = userInput;
    choice.computer = choiceArr[computer];


    setChoiceState((prev) => {
      return {
        user: userInput,
        computer: choiceArr[computer],
      };
    });

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
        <GameResults
          choice={choiceState}
          setResult={setResult}
          source={source}
          result={result}
        />
      ) : (
        <>
          {gamemode === "easy" ? (
            <img src={easyBackground} alt="" className="background" />
          ) : (
            <img src={hardBackground} alt="" className="background" />
          )}
          <GameButtons
            choiceArr={choiceArr}
            handleClick={handleClick}
            imgSources={imgSources}
            gamemode={gamemode}
          />
        </>
      )}
    </div>
  );
};
