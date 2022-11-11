import RockIcon from "../assets/icon-rock.svg";
import PaperIcon from "../assets/icon-paper.svg";
import ScissorsIcon from "../assets/icon-scissors.svg";
import "../styles/ChoiceTile.css";

const ChoiceTile = ({ tile, setPlayerChoice, win }) => {
  return (
    tile !== "" && (
      <div
        className={`choice-tile ${tile}-tile ${win ? "win-tile" : ""}`}
        onClick={() => setPlayerChoice(tile)}
      >
        {win}
        <div className="choice-tile-inner">
          {tile === "rock" ? (
            <img
              src={RockIcon}
              alt="rock tile"
              className="tile-icon"
              loading="lazy"
            />
          ) : tile === "paper" ? (
            <img
              src={PaperIcon}
              alt="paper tile"
              className="tile-icon"
              loading="lazy"
            />
          ) : (
            <img
              src={ScissorsIcon}
              alt="scissors tile"
              className="tile-icon"
              loading="lazy"
            />
          )}
        </div>
      </div>
    )
  );
};

export default ChoiceTile;
