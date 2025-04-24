import React from "react";

const AfterDays = ({ dateInfo }) => {
  return (
    <>
      {" "}
      <span className="message">{`After ${dateInfo.counter} day from today is ${dateInfo.dayName} ${dateInfo.date} ${dateInfo.monthName}  ${dateInfo.year}.`}</span>
    </>
  );
};

export default AfterDays;
