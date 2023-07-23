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
      <div className='SubDiv'>
        <h1>{currentValue}</h1>
      </div>
      <div className='SubDiv'>
        <button onClick={IncreaseValue}>
          + 1
        </button>
      </div>
      <div className='SubDiv'>
        <button onClick={ResetValue}>
          Reset/Save Value
        </button>
      </div>
      <div className='SubDiv'>
        <h2>History: {saveValue}</h2>
      </div>
      <div className='SubDiv'>
        <button onClick={ClearHistory}>
          Clear History
        </button>
      </div>
    </body>
  );
}

export default App;
