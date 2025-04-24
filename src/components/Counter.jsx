import React, { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);

  const today = new Date();
  const daysToAddOrSubtract = counter; // can be positive or negative
  const updatedDate = new Date(today);
  updatedDate.setDate(today.getDate() + daysToAddOrSubtract);

  // Extract parts
  const dayName = updatedDate.toLocaleString("en-US", { weekday: "long" });
  const date = updatedDate.getDate();
  const monthName = updatedDate.toLocaleString("en-US", { month: "long" });
  const year = updatedDate.getFullYear();

  // Output
  console.log(`Day: ${dayName}`);
  console.log(`Date: ${date}`);
  console.log(`Month: ${monthName}`);
  console.log(`Year: ${year}`);

  // const futureDate = new Date(today);

  //   console.log(`${new Date().getDate() + 1}`);

  //   console.log(`Date :: ${dateNumber} `);
  //   console.log(`Day :: ${dayName} `);
  //   console.log(`Month :: ${monthName} `);
  //   console.log(`Year :: ${year} `);

  const todayDate = new Date();

  const plusDays = todayDate.getDate() + counter;
  const minusDays = todayDate.getDate() + counter;

  // console.log(plusDays);
  // console.log(minusDays);

  function handleMinusOneStep() {
    setStep((step) => step - 1);
  }
  function handlePlusOneStep() {
    setStep((step) => step + 1);
  }

  function handleMinusOneCount() {
    if (step === 0) {
      setCounter((counter) => counter - 1);
    } else {
      setCounter((counter) => counter - step);
    }
  }

  function handlePlusOneCount() {
    if (step === 0) {
      setCounter((counter) => counter + 1);
    } else {
      setCounter((counter) => counter + step);
    }
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

        {counter === 0 && (
          <span className="message">{`Today is ${dayName} ${date} ${monthName} ${year}.`}</span>
        )}

        {counter > 0 && (
          <span className="message">{`After ${counter} day from today is ${dayName} ${plusDays} ${monthName}  ${year}.`}</span>
        )}

        {counter < 0 && (
          <span className="message">{`Before ${-counter} day from today is ${dayName} ${plusDays} ${monthName}  ${year}.`}</span>
        )}
      </div>
    </>
  );
};

export default Counter;
