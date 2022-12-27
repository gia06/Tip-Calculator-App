import logo from "./images/logo.svg";
import "./App.css";
import InputContainer from "./components/InputContainer";
import ResultsContainer from "./components/ResultsContainer";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [numPeople, setNumPeople] = useState(1);
  const [percentage, setPercentage] = useState("");
  const [customPercentage, setCustomPercentage] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0.0);

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="splitter logo"></img>
      </div>

      <div className="calc-container">
        <InputContainer
          bill={bill}
          setBill={setBill}
          numPeople={numPeople}
          setNumPeople={setNumPeople}
          customPercentage={customPercentage}
          setTipAmount={setTipAmount}
          setTotalAmount={setTotalAmount}
        />

        <ResultsContainer
          tipAmount={tipAmount}
          setTipAmount={setTipAmount}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
          setBill={setBill}
          setCustomPercentage={setCustomPercentage}
          setNumPeople={setNumPeople}
        />
      </div>
    </div>
  );
}
