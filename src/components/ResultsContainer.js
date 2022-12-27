import "./ResultsContainer.css";

export default function ResultsContainer(props) {
  const {
    tipAmount,
    setTipAmount,
    totalAmount,
    setTotalAmount,
    setBill,
    setCustomPercentage,
    setNumPeople,
  } = props;

  const reset = () => {
    setBill("");
    setCustomPercentage("");
    setNumPeople(1);
    setTipAmount(0.0);
    setTotalAmount(0.0);
  };

  return (
    <div className="results-container-wrapper">
      <div className="results-container">
        <div className="results-box">
          <div className="txt-box">
            <h4>Tip Amount</h4>
            <p>/ person</p>
          </div>

          <div className="number-box">
            <h2>${tipAmount.toFixed(2)}</h2>
          </div>
        </div>

        <div className="results-box">
          <div className="txt-box">
            <h4>Total</h4>
            <p>/ person</p>
          </div>

          <div className="number-box">
            <h2>${totalAmount.toFixed(2)}</h2>
          </div>
        </div>

        <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
}
