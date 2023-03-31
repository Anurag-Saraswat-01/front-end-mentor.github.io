import RulesImage from "../assets/image-rules.svg";
import CloseIcon from "../assets/icon-close.svg";
import "../styles/RuleModal.css";

const RuleModal = ({ hideRules }) => {
  return (
    <div className="rules-backdrop">
      <div className="rules">
        <div className="rules-title-wrapper">
          <span className="rules-title">RULES</span>
          <img
            src={CloseIcon}
            alt="close"
            className="rules-close-icon-desktop"
            loading="lazy"
            onClick={hideRules}
          />
        </div>
        <img
          src={RulesImage}
          alt="rules"
          className="rules-image"
          loading="lazy"
        />
        <img
          src={CloseIcon}
          alt="close"
          className="rules-close-icon-mobile"
          loading="lazy"
          onClick={hideRules}
        />
      </div>
    </div>
  );
};

export default RuleModal;
