import { useState } from 'react';
import './App.css';

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [saveValue, setSaveValue] = useState([]);
  const IncreaseValue = () => {
    setCurrentValue(currentValue + 1)
  };
  const ResetValue = () => {
    setSaveValue([...saveValue, currentValue + " "])
    setCurrentValue(0)
  };
  const ClearHistory = () => {
    setSaveValue([])
  };
  return (
    <body className='MainBody'>
      <h1>Mini Counter Project</h1>
      <div className='SubDiv'>
        <h2>{currentValue}</h2>
      </div>
      <div className='SubDiv'>
        <button onClick={IncreaseValue} className='black-white-button'>
          + 1
        </button>
        <button onClick={ResetValue} className='black-white-button'>
          Reset/Save Value
        </button>
      </div>
      <div className='SubDiv'>
        <h3>History: {saveValue}</h3>
      </div>
      <div className='SubDiv'>
        <button onClick={ClearHistory} className='black-white-button'>
          Clear History
        </button>
      </div>
    </body>
  );
}

export default App;
