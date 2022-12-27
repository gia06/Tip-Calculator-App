import "./InputContainer.css";

export default function Test(props) {
  const {
    bill,
    setBill,
    numPeople,
    setNumPeople,
    CustomPercentage,
    setTipAmount,
    setTotalAmount,
  } = props;

  const error = {
    border: "2px solid #E17052",
  };

  const calculate = (percentageValue) => {
    if (Number(bill) !== 0 && Number(numPeople) !== 0) {
      const tip = (bill * percentageValue) / 100;
      const total = (bill + tip) / numPeople;

      setTipAmount(tip);
      setTotalAmount(total);
    } else {
      setTipAmount(0.0);
      setTotalAmount(0.0);
    }
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
            onChange={(event) => {
              event.target.value.length < 9 && setBill(event.target.value);
            }}
            value={bill}
          />
        </label>
      </div>

      <p>Select Tip %</p>

      <div className="percentage">
        <button
          className="percentage-btn"
          value={5}
          onClick={(event) => calculate(event.target.value)}
        >
          5%
        </button>
        <button
          className="percentage-btn"
          value={10}
          onClick={(event) => calculate(event.target.value)}
        >
          10%
        </button>
        <button
          className="percentage-btn"
          value={15}
          onClick={(event) => calculate(event.target.value)}
        >
          15%
        </button>
        <button
          className="percentage-btn"
          value={25}
          onClick={(event) => calculate(event.target.value)}
        >
          25%
        </button>
        <button
          className="percentage-btn"
          value={50}
          onClick={(event) => calculate(event.target.value)}
        >
          50%
        </button>
        <input
          className="custom-input"
          type="number"
          placeholder="Custom"
          min="1"
          onChange={(event) => calculate(event.target.value)}
          value={CustomPercentage}
        ></input>
      </div>

      <div className="num-people">
        <label>
          Number of People
          {Number(numPeople) === 0 ? (
            <span className="warning">Can't be zero</span>
          ) : (
            ""
          )}
          <input
            className="main-input"
            type="number"
            min="1"
            max="100"
            placeholder="0"
            onChange={(event) => setNumPeople(event.target.value)}
            value={numPeople}
            style={Number(numPeople) === 0 ? error : {}}
          />
        </label>
      </div>
    </div>
  );
}
