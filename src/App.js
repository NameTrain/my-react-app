import { useState } from 'react';
import './App.css';

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [saveValue, setSaveValue] = useState([]);
  const IncreaseValue = () => {
    setCurrentValue(currentValue + 1)
  };
  const ResetValue = () => {
    setSaveValue([...saveValue, currentValue + " - "])
    setCurrentValue(0)
  };
  const ClearHistory = () => {
    setSaveValue([])
  };
  return (
    <body>
      <div>
        {currentValue}
      </div>
      <div>
        <button onClick={IncreaseValue}>
          Click me!
        </button>
      </div>
      <div>
        <button onClick={ResetValue}>
          Reset Me!
        </button>
      </div>
      <div>
        History: {saveValue}
      </div>
      <div>
        <button onClick={ClearHistory}>
          Clear History
        </button>
      </div>
    </body>
  );
}

export default App;
