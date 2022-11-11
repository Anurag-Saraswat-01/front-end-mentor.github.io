import { useState, useEffect } from "react";
import ChoiceContainer from "./ChoiceContainer";
import ResultContainer from "./ResultContainer";

const PlayContainer = ({ incrementScore, decrementScore }) => {
  // 0 -> player choice
  // 1 -> result
  const [stage, setStage] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("");

  const playAgain = () => {
    setPlayerChoice("");
  };

  useEffect(() => {
    if (playerChoice === "") {
      setStage(0);
    } else {
      setStage(1);
    }
  }, [playerChoice]);

  return (
    <div className="play-container">
      {stage === 0 ? (
        <ChoiceContainer setPlayerChoice={setPlayerChoice} />
      ) : (
        <ResultContainer
          playerChoice={playerChoice}
          playAgain={playAgain}
          incrementScore={incrementScore}
          decrementScore={decrementScore}
        />
      )}
    </div>
  );
};

export default PlayContainer;
