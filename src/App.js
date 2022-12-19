import logo from './images/logo.svg';
import "./App.css";
import InputContainer from './components/InputContainer'
import ResultsContainer from './components/ResultsContainer';

export default function App() {
  return (
    <div className="App">
      
      <div>
        <img src={logo} alt="splitter logo"></img>
      </div>
      
      <div className="calc-container">
        <InputContainer/>

        <ResultsContainer/>

        
        {/* <div className="input-container">
          <div className="bill">
            <label>
              Bill
              <input className="input-with-icon" type="number" min="1" placeholder="0" />
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
              <input className="input-with-icon" type="number" min="10" max="100" placeholder="0"/>
            </label>
          </div>
        </div> */}


        {/* <div className="results-container">

          <div className=''>
            <div className='txt-box'>
              <h2>Tip Amount</h2>
              <p>/ person</p>
            </div>
            
            <div className='number-box'>
              tip amount in number ($)
            </div>
          </div>

          <div className=''>
            <div className='txt-box'>
              <h2>Total</h2>
              <p>/ person</p>
            </div>

            <div className='number-vox'>
              total result in number ($)
            </div>
          </div>

          <button>Reset</button>
        </div> */}

      </div>
    </div>
  );
}
