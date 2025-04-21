// components/CountdownTimer.jsx
import React from "react";
import Countdown from "react-countdown";

const CountdownTimer = ({ deadline }) => {
  return (
    <Countdown
      date={new Date(deadline)}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <span className="text-red-600">Expired</span>;
        }

        return (
          <span>
            {days}D {hours}H {minutes}M {seconds}S
          </span>
        );
      }}
    />
  );
};

export default CountdownTimer;
