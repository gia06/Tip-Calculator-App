import "./ResultsContainer.css";

export default function ResultsContainer(props) {
  const {
    tipAmount,
    setTipAmount,
    totalAmount,
    setTotalAmount,
    setBill,
    setNumPeople,
  } = props;

  const reset = () => {
    setBill("");
    setNumPeople(1);
    setTipAmount('0.00');
    setTotalAmount('0.00');
  };

  return (
    <div className="results-container">
        <div className="results-box">
          <div className="txt-box">
            <h4>Tip Amount</h4>
            <p>/ person</p>
          </div>

          <div className="number-box">
            <h2>${tipAmount}</h2>
          </div>
        </div>

        <div className="results-box">
          <div className="txt-box">
            <h4>Total</h4>
            <p>/ person</p>
          </div>

          <div className="number-box">
            <h2>${totalAmount}</h2>
          </div>
        </div>
      <div className="res"><button className="reset-button" onClick={reset}>RESET</button></div>
    </div>
  );
}
