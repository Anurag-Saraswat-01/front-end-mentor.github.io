import RulesImage from "../assets/image-rules.svg";
import CloseIcon from "../assets/icon-close.svg";
import "../styles/RuleModal.css";

const RuleModal = ({ hideRules }) => {
  return (
    <div className="rules">
      <span className="rules-title">RULES</span>
      <img
        src={RulesImage}
        alt="rules"
        className="rules-image"
        loading="lazy"
      />
      <img
        src={CloseIcon}
        alt="close"
        className="rules-close-icon"
        loading="lazy"
        onClick={hideRules}
      />
    </div>
  );
};

export default RuleModal;
