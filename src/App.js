import logo from "./images/logo.svg";
import "./App.css";
import InputContainer from "./components/InputContainer";
import ResultsContainer from "./components/ResultsContainer";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [numPeople, setNumPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");

  const calculate = (percentageValue) => {
    if (
      bill === 0 ||
      isNaN(bill) ||
      bill.length === 0 ||
      numPeople === 0 ||
      isNaN(numPeople) ||
      numPeople.length === 0
    ) {
      setTipAmount("0.00");
      setTotalAmount("0.00");
    } else {
      const tip = (bill * percentageValue) / 100;
      const total = (bill + tip) / numPeople;

      setTipAmount(tip.toFixed(2));
      setTotalAmount(total.toFixed(2));
    }
  };

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
          calculate={calculate}
        />

        <ResultsContainer
          tipAmount={tipAmount}
          setTipAmount={setTipAmount}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
          setBill={setBill}
          setNumPeople={setNumPeople}
        />
      </div>
    </div>
  );
}
