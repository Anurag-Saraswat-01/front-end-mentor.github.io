import TriangleBG from "../assets/bg-triangle.svg";
import ChoiceTile from "./ChoiceTile";
import "../styles/ChoiceContainer.css";

const ChoiceContainer = () => {
  return (
    <div className="choice-container">
      <img
        src={TriangleBG}
        alt="triangle background"
        loading="lazy"
        className="triangle-bg"
      />
      <ChoiceTile tile="paper" />
      <ChoiceTile tile="scissors" />
      <ChoiceTile tile="rock" />
    </div>
  );
};

export default ChoiceContainer;
