import { useState } from 'react';
import './App.css';

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const IncreaseValue = () => {
    setCurrentValue(currentValue + 1)
  }
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
        History
      </div>
    </body>
  );
}

export default App;
