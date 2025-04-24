import React from "react";

const Today = ({ dateInfo }) => {
  return (
    <>
      <span className="message">{`Today is ${dateInfo.dayName} ${dateInfo.date} ${dateInfo.monthName} ${dateInfo.year}.`}</span>
    </>
  );
};

export default Today;
