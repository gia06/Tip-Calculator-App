import logo from "./images/logo.svg";
import "./App.css";
import InputContainer from "./components/InputContainer";
import ResultsContainer from "./components/ResultsContainer";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [percentage, setPercentage] = useState("");
  const [customPercentage, setCustomPercentage] = useState("");
  const [tipAmount, setTipAmount] = useState("");
  const [Total, setTotal] = useState("");

  return (
    <div className="App">
      <div>
        <img src={logo} alt="splitter logo"></img>
      </div>

      <div className="calc-container">
        <InputContainer
          bill={bill}
          setBill={setBill}
          numPeople={numPeople}
          setNumPeople={setNumPeople}
          percentage={percentage}
          setPercentage={setPercentage}
          customPercentage={customPercentage}
          setCustomPercentage={setCustomPercentage}
        />

        <ResultsContainer />
      </div>
    </div>
  );
}
