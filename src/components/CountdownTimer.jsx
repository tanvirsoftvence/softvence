import React from "react";
import Countdown from "react-countdown";

const CountdownTimer = ({ deadline }) => {
  return (
    <Countdown
      date={new Date(deadline)}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <span className="text-red-600 font-semibold">Expired</span>;
        }

        return (
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center gap-2">
              <TimeGroup label="Days" value={days} />
              <Colon />
              <TimeGroup label="Hours" value={hours} />
              <Colon />
              <TimeGroup label="Minute" value={minutes} />
            </div>
          </div>
        );
      }}
    />
  );
};

const TimeGroup = ({ label, value }) => {
  const digits = value.toString().padStart(2, "0").split("");

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-1">
        {digits.map((digit, index) => (
          <div
            key={index}
            className="w-4 h-6 border border-green-500 rounded-md flex items-center justify-center text-[#F5AB0D] text-lg font-semibold"
          >
            {digit}
          </div>
        ))}
      </div>
      <span className="text-[10px] font-normal font-pop text-[#837E7E] mt-1">{label}</span>
    </div>
  );
};

const Colon = () => (
  <div className="text-[#F5AB0D] font-semibold text-xl px-1">:</div>
);

export default CountdownTimer;
