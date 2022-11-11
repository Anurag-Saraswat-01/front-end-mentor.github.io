import TriangleBG from "../assets/bg-triangle.svg";
import ChoiceTile from "./ChoiceTile";
import "../styles/ChoiceContainer.css";

const ChoiceContainer = ({ setPlayerChoice }) => {
  return (
    <div className="choice-container">
      <div className="choice-bg-wrapper">
        <img
          src={TriangleBG}
          alt="triangle background"
          loading="lazy"
          className="triangle-bg"
        />
      </div>
      <div className="choice-tile-wrapper">
        <div className="choice-tile-top">
          <ChoiceTile tile="paper" setPlayerChoice={setPlayerChoice} />
          <ChoiceTile tile="scissors" setPlayerChoice={setPlayerChoice} />
        </div>
        <div className="choice-tile-bottom">
          <ChoiceTile tile="rock" setPlayerChoice={setPlayerChoice} />
        </div>
      </div>
    </div>
  );
};

export default ChoiceContainer;
