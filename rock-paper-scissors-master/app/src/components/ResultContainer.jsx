import { useState, useEffect } from "react";
import ChoiceTile from "./ChoiceTile";
import "../styles/ResultContainer.css";

const ResultContainer = ({
  playerChoice,
  playAgain,
  incrementScore,
  decrementScore,
}) => {
  const [houseChoice, setHouseChoice] = useState("");
  //   1 -> win, -1 -> lose, 0 -> false
  const [result, setResult] = useState(null);

  const generateHouseChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setHouseChoice(randomChoice);
  };

  const displayResult = () => {
    // win conditions
    if (
      (playerChoice === "rock" && houseChoice === "scissors") ||
      (playerChoice === "paper" && houseChoice === "rock") ||
      (playerChoice === "scissors" && houseChoice === "paper")
    ) {
      setResult(1);
      incrementScore();
    }
    // lose conditions
    else if (
      (playerChoice === "rock" && houseChoice === "paper") ||
      (playerChoice === "paper" && houseChoice === "scissors") ||
      (playerChoice === "scissors" && houseChoice === "rock")
    ) {
      setResult(-1);
      decrementScore();
    }
    // draw
    else {
      setResult(0);
    }
  };

  useEffect(() => {
    if (playerChoice === "") return;
    let timer = setTimeout(() => generateHouseChoice(), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [playerChoice]);

  useEffect(() => {
    if (playerChoice === "" || houseChoice === "") return;
    displayResult();
  }, [playerChoice, houseChoice]);

  return (
    <div className="result-container">
      <div className="result-tile-player">
        <ChoiceTile tile={playerChoice} />
        <span className="result-tile-text">YOU PICKED</span>
      </div>
      <div className="result-tile-house" win={result === 1 ? true : undefined}>
        {houseChoice === "" ? (
          <div className="result-tile-empty"></div>
        ) : (
          <ChoiceTile
            tile={houseChoice}
            win={result === -1 ? true : undefined}
          />
        )}
        <span className="result-tile-text">THE HOUSE PICKED</span>
      </div>
      {result !== null && (
        <div className="result-wrapper">
          <span className="result-text">
            {result === 1 ? "YOU WIN" : result === -1 ? "YOU LOSE" : "YOU DRAW"}
          </span>
          <button className="play-again-btn" onClick={playAgain}>
            PLAY AGAIN
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultContainer;
