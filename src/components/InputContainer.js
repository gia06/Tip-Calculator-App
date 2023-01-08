import "./InputContainer.css";

export default function Test(props) {
  const { bill, setBill, numPeople, setNumPeople, calculate } = props;

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
            onChange={(event) => {
              event.target.value.length < 7 &&
                setBill(event.target.valueAsNumber);
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
          onChange={(event) =>
            event.target.value.length < 4 && calculate(event.target.value)
          }
        ></input>
      </div>

      <div className="num-people">
        <label>
          Number of People
          {numPeople === 0 || numPeople.length === 0 || isNaN(numPeople) ? (
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
            onKeyDown={(event) => event.key === "." && event.preventDefault()}
            onChange={(event) =>
              event.target.value.length < 4 &&
              setNumPeople(event.target.valueAsNumber)
            }
            value={numPeople}
            style={numPeople === 0 || isNaN(numPeople) ? error : {}}
          />
        </label>
      </div>
    </div>
  );
}
