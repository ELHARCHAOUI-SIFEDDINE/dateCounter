import { useState } from "react";
import './styles.css'; 

export default function App() {
  return (
    <div className="app-container">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const date = new Date();

  const [step, setStep] = useState(1); 

  date.setDate(date.getDate() + count);

  return (
    <div className="counter-card">
      <h2 className="counter-title">Date Counter</h2>
      <div className="counter-controls">
        <button
          className="control-button decrease"
          onClick={() => {
            setCount((c) => c - step);
          }}
        >
          -
        </button>
        <span className="count-display">Count: {count}</span>
        <button
          className="control-button increase"
          onClick={() => {
            setCount((c) => c + step);
          }}
        >
          +
        </button>
      </div>

      <div className="step-controls">
        <button
          className="control-button decrease"
          onClick={() => {
            setStep((s) => Math.max(s - 1, 1)); 
          }}
        >
          -
        </button>
        <span className="step-display">Step: {step}</span>
        <button
          className="control-button increase"
          onClick={() => {
            setStep((s) => s + 1);
          }}
        >
          +
        </button>
      </div>

      <div className="date-info">
        <span className="date-message">
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today`
            : `${Math.abs(count)} days ago`}
        </span>
        <p className="date-display">{date.toDateString()}</p>
      </div>
    </div>
  );
}
