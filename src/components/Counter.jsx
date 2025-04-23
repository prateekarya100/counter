import React, { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);

  const today = new Date();
  const dayName = today.toLocaleString("en-US", { weekday: "long" }); // "Wednesday"
  const monthName = today.toLocaleString("en-US", { month: "long" }); // "April"
  const dateNumber = today.getDate(); // 23
  const year = today.getFullYear(); // 2025

  //   console.log(`${new Date().getDate() + 1}`);

  //   console.log(`Date :: ${dateNumber} `);
  //   console.log(`Day :: ${dayName} `);
  //   console.log(`Month :: ${monthName} `);
  //   console.log(`Year :: ${year} `);

  function handleMinusOneStep() {
    setStep((step) => step - 1);
  }
  function handlePlusOneStep() {
    setStep((step) => step + 1);
  }

  function handleMinusOneCount() {
    setCounter((counter) => counter - 1);
  }

  function handlePlusOneCount() {
    setCounter((counter) => counter + 1);
  }

  return (
    <>
      <div className="container">
        <div className="steps">
          <button onClick={handleMinusOneStep}>-</button>
          {`Step : ${step}`}
          <button onClick={handlePlusOneStep}>+</button>
        </div>
        <div className="count">
          <button onClick={handleMinusOneCount}>-</button>
          {`Count : ${counter}`}
          <button onClick={handlePlusOneCount}>+</button>
        </div>

        {/* FOR TODAY */}
        <span className="message">{`Today is ${dayName} ${dateNumber} ${monthName} ${year}.`}</span>

        {/* FOR MORE DAYS */}
        {/* <span className="message">{`Today is ${dayName} ${dateNumber} ${monthName} ${year}.`}</span> */}

        {/* FOR DAYS BEFORE */}
        {/* <span className="message">{`Today is ${dayName} ${dateNumber} ${monthName} ${year}.`}</span> */}
      </div>
    </>
  );
};

export default Counter;
