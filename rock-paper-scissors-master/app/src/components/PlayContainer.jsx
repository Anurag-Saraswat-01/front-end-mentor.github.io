import { useState } from "react";
import ChoiceContainer from "./ChoiceContainer";

const PlayContainer = () => {
  // 1 -> player choice
  // 2 -> pc choice
  // 3 -> result
  const [step, setStep] = useState(1);

  return (
    <div className="play-container">
      <ChoiceContainer />
    </div>
  );
};

export default PlayContainer;
