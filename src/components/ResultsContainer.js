import "./ResultsContainer.css";

export default function ResultsContainer(props) {
  return (
    <div className="results-container-wrapper">

      <div className="results-container">

        <div className="results-box">

          <div className="txt-box">
            <h4>Tip Amount</h4>
            <p>/ person</p>
          </div>

          <div className="number-box">
            <h2>$0.00</h2>
          </div>
        </div>

        <div className="results-box">
          <div className="txt-box">
            <h4>Total</h4>
            <p>/ person</p>
          </div>

          <div className="number-box">
            <h2>$0.00</h2>
          </div>
        </div>

        <button>RESET</button>
        </div>
      
    </div>
  );
}
