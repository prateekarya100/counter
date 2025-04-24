import React, { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);

  const daysToAddOrSubtract = counter; // change this number (+/-)

  const today = new Date();
  const updatedDate = new Date(today);
  updatedDate.setDate(today.getDate() + daysToAddOrSubtract);

  // Format parts
  const dayName = updatedDate.toLocaleString("en-US", { weekday: "long" });
  const date = updatedDate.getDate();
  const monthName = updatedDate.toLocaleDateString("en-US", { month: "long" });
  const year = updatedDate.getFullYear();

  // Output sentence
  // const direction = daysToAddOrSubtract >= 0 ? "after" : "before";
  // console.log(`Step : 0+`);
  // console.log(`Count : ${daysToAddOrSubtract}+`);
  // console.log(
  //   `After ${Math.abs(daysToAddOrSubtract)} day${
  //     Math.abs(daysToAddOrSubtract) !== 1 ? "s" : ""
  //   } from today is ${dayName} ${date} ${monthName} ${year}.`
  // );

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
        {counter > 0 || (
          <span className="message">{`After ${counter} day from today is ${dayName} ${date} ${monthName}  ${year}.`}</span>
        )}
        {counter < 0 && (
          <span className="message">{`Before ${-counter} day from today is ${dayName} ${date} ${monthName}  ${year}.`}</span>
        )}
      </div>
    </>
  );
};

export default Counter;
