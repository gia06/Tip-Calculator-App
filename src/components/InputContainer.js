import "./InputContainer.css";

export default function Test(props) {
  const {
    bill,
    setBill,
    numPeople,
    setNumPeople,
    percentage,
    setPercentage,
    CustomPercentage,
    setCustomPercentage,
  } = props;

  const error = {
    border: "2px solid #E17052",
  };

  return (
    <div className="input-container">
      <div className="bill">
        <label>
          Bill
          <input
            className="main-input"
            type="number"
            placeholder="0"
            min="1"
            onChange={(e) => setBill(Number(e.target.value))}
            value={bill}
          />
        </label>
      </div>

      <p>Select Tip %</p>

      <div className="percentage">
        <button
          className="percentage-btn"
          onClick={() => setPercentage(Number(0.05))}
        >
          5%
        </button>
        <button
          className="percentage-btn"
          onClick={() => setPercentage(Number(0.1))}
        >
          10%
        </button>
        <button
          className="percentage-btn"
          onClick={() => setPercentage(Number(0.15))}
        >
          15%
        </button>
        <button
          className="percentage-btn"
          onClick={() => setPercentage(Number(0.25))}
        >
          25%
        </button>
        <button
          className="percentage-btn"
          onClick={() => setPercentage(Number(0.5))}
        >
          50%
        </button>
        <input
          className="custom-input"
          type="number"
          placeholder="Custom"
          min="1"
          onChange={(e) => setPercentage(Number(e.target.value))}
          value={CustomPercentage}
        ></input>
      </div>

      <div className="num-people">
        <label>
          Number of People
          {numPeople <= 0 && <span className="warning">Can't be zero</span>}
          <input
            className="main-input"
            type="number"
            min="1"
            max="100"
            placeholder="0"
            onChange={(e) => setNumPeople(Number(e.target.value))}
            value={numPeople}
            style={numPeople <= 0 ? error : { display: "block" }}
          />
        </label>
      </div>
    </div>
  );
}
