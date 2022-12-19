import "./ResultsContainer.css";

export default function ResultsContainer(props) {
  return (
    <div className="results-container">
      <div className="">
        <div className="txt-box">
          <h2>Tip Amount</h2>
          <p>/ person</p>
        </div>

        <div className="number-box">tip amount in number ($)</div>
      </div>

      <div className="">
        <div className="txt-box">
          <h2>Total</h2>
          <p>/ person</p>
        </div>

        <div className="number-vox">total result in number ($)</div>
      </div>

      <button>Reset</button>
    </div>
  );
}
