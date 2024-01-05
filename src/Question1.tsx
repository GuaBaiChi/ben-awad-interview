// https://www.youtube.com/watch?v=gnkrDse9QKc
// Question 1, make a counter

import React from 'react';
import './Styles.css';

export default function Question1() {
  const [counter, setCounter] = React.useState(0)

  function counterHandler() {
    setCounter(counter + 1)
  }

  // extra3z
  const handleCounterClick2 = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      {/* My own */}
      <button onClick={counterHandler}>Counter clicker</button>
      <p>{counter}</p>
      {/* From the video */}
      <button onClick={() => { setCounter(counter + 1) }}>Counter clicker</button>

      {/* extra */}
      <button onClick={handleCounterClick2}>Counter clicker</button>

    </div>
  )
}