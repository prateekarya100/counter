import React from "react";

const BeforeDays = ({ dateInfo }) => {
  return (
    <>
      <span className="message">{`Before ${-dateInfo.counter} day from today is ${
        dateInfo.dayName
      } ${dateInfo.date} ${dateInfo.monthName}  ${dateInfo.year}.`}</span>
    </>
  );
};

export default BeforeDays;
