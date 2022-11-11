import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import RuleModal from "./components/RuleModal";
import PlayContainer from "./components/PlayContainer";

function App() {
  const [score, setScore] = useState(0);
  const [rules, setRules] = useState(false);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const decrementScore = () => {
    setScore(score - 1);
  };

  const displayRules = () => {
    setRules(true);
  };

  const hideRules = () => {
    setRules(false);
  };

  return (
    <div className="App">
      {rules && <RuleModal hideRules={hideRules} />}
      <div className="container">
        <Header score={score} />
        <PlayContainer
          incrementScore={incrementScore}
          decrementScore={decrementScore}
        />
        <button className="rule-btn" onClick={displayRules}>
          RULES
        </button>
      </div>
      {/* basic structure */}
      {/*
       rules modal
    header
    playzone
    - choice tile
      - choice
      - result
    rules btn
    footer 
    */}
    </div>
  );
}

export default App;
