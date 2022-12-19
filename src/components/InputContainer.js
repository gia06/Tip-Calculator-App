import "./InputContainer.css";

export default function Test(props) {
  return (
    <div className="input-container">
      <div className="bill">
        <label>
          Bill
          <input
            className="input-with-icon"
            type="number"
            min="1"
            placeholder="0"
          />
        </label>
      </div>

      <p>Select Tip %</p>

      <div className="percentage">
        <button className="percentage-btn">5%</button>
        <button className="percentage-btn">10%</button>
        <button className="percentage-btn">15%</button>
        <button className="percentage-btn">25%</button>
        <button className="percentage-btn">50%</button>
        <input type="number" placeholder="Custom" min="1"></input>
      </div>

      <div className="num-people">
        <label>
          Number of People
          <input
            className="input-with-icon"
            type="number"
            min="1"
            max="100"
            placeholder="0"
          />
        </label>
      </div>
    </div>
  );
}
