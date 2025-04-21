// components/JobCard.jsx
import React from "react";
import CountdownTimer from "./CountdownTimer";
import arrow from "../assets/arrow.png";
import date from "../assets/date.png";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const handleJobClick = () => {
    navigate(`/job/${job.id}`, { state: { job } });
  };
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[362px] ">
  <div className="relative">
    <img
      src={job.image}
      alt={job.title}
      className="w-full h-48 sm:h-52 object-cover"
    />
    <div className="py-2 px-4 backdrop-blur-sm bg-white/30 border border-gray-300 text-white text-sm font-semibold absolute top-2 left-2 rounded-full shadow-md">
      <span className="font-pop font-normal text-sm sm:text-base">Designer</span>
    </div>
  </div>

  <div className="p-4 sm:p-5 relative bg-[#F6FFF8]">
    <div className="absolute -top-10 right-2 bg-[#F6FFF8] px-2 py-1 rounded-lg text-xs sm:text-sm text-green-600 font-semibold">
      <CountdownTimer deadline={job.deadlineDate} />
    </div>

    <h3 className="text-lg font-medium font-pop text-[#121212] mb-2">
      {job.title}
    </h3>

    <p className="text-sm text-[#837E7E] font-normal font-pop mb-2">
      {job.type} | {job.level} |
      <span className="text-[#151515] font-medium ml-1">
        {job.shift}
      </span>
    </p>

    <div className="flex items-center text-sm mb-4 gap-1 text-[#837E7E] font-pop">
      <img src={date} alt="calendar" className="w-4 h-4" />
      Deadline: <span className="ml-1">{job.deadline}</span>
    </div>

    <div className="flex justify-between items-center flex-wrap gap-2">
      <p
        onClick={handleJobClick}
        className="text-green-700 font-medium underline hover:text-green-900 cursor-pointer"
      >
        View Details
      </p>
      <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex gap-2 items-center">
        Apply Now <img src={arrow} alt="arrow" className="w-4 h-4" />
      </button>
    </div>
  </div>
</div>

  );
};

export default JobCard;
