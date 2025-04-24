import React, { useState } from "react";
import Today from "./Today";
import AfterDays from "./AfterDays";
import BeforeDays from "./BeforeDays";

const Counter = () => {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);

  const daysToAddOrSubtract = counter;

  const today = new Date();
  const updatedDate = new Date(today);
  updatedDate.setDate(today.getDate() + daysToAddOrSubtract);

  const dayName = updatedDate.toLocaleString("en-US", { weekday: "long" });
  const date = updatedDate.getDate();
  const monthName = updatedDate.toLocaleDateString("en-US", { month: "long" });
  const year = updatedDate.getFullYear();

  const dateInfo = {
    dayName: dayName,
    date: date,
    monthName: monthName,
    year: year,
    counter: counter,
  };

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
        {counter === 0 && <Today dateInfo={dateInfo} />}

        {counter > 0 && <AfterDays dateInfo={dateInfo} />}

        {counter < 0 && <BeforeDays dateInfo={dateInfo} />}
      </div>
    </>
  );
};

export default Counter;
