// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        SPLI
        <br />
        TTER
      </h1>

      <div class="calc-container">
        <div class="input-container">
          <div class="bill">
            <label>
              Bill
              <input type="number" min="1" placeholder="0" />
            </label>
          </div>

          <div class="percentage">
            <p>Select Tip %</p>
            <button>5%</button>
            <button>10%</button>
            <button>15%</button>
            <button>20%</button>
            <button>25%</button>
            <button>50%</button>
          </div>

          <div class="num-people">
            <label>
              Number of People
              <input type="number" min="10" max="100" />
            </label>
          </div>
        </div>

        <div class="results-container">Will add later</div>

        <div></div>
      </div>
    </div>
  );
}

export default App;
