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
            {days}d {hours}h {minutes}m {seconds}s
          </span>
        );
      }}
    />
  );
};

export default CountdownTimer;
