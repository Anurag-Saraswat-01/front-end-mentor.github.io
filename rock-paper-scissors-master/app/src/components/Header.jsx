import Logo from "../assets/logo.svg";
import "../styles/Header.css";

const Header = ({ score }) => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      <div className="score-card">
        <span className="score-title">SCORE</span>
        <span className="score-value">{score}</span>
      </div>
    </div>
  );
};

export default Header;
