import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [number, setNumber] = React.useState(0);
  React.useEffect(() => {
    if (number === 10) {
      setNumber(0);
    }
  }, [number]);
  const increaseData = () => {
    setNumber(number + 1);
  };
  const decreaseData = () => {
    setNumber(number - 1);
  };
  return (
    <div className="App">
    <h1>Hello CodeSandbox</h1>
    <h2>Start editing to see some magic happen!</h2>
    <button onClick={increaseData}>Increase</button>
    <h1>{number}</h1>
    <button onClick={decreaseData}>Decrease</button>
  </div>
  );
}

export default App;
