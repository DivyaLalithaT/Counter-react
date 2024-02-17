import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const incrementCount = () => {
    if (count >= 5) {
      setMessage('Maximum limit is 5');
      console.log('if block')
    } else {
      setCount(count + 1);
      setMessage('');
      console.log('else block',count)
    }
  };

  const decrementCount = () => {
    if (count <= -5) {
      setMessage('Minimum limit is -5');
      console.log('if block')
    } else {
      setCount(count - 1);
      setMessage('');
      console.log('else block')
    }
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="count">{count}</div>
      <p className="message">{message}</p>
      <div className="buttons">
        <button  className="incrementbtn"onClick={incrementCount} disabled={count >= 5}>Increment</button>
        <button  className="decrementbtn"onClick={decrementCount} disabled={count <= -5}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
