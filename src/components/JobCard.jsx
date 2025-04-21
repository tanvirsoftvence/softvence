// components/JobCard.jsx
import React from "react";
import CountdownTimer from "./CountdownTimer";
import arrow from "../assets/arrow.png";
import date from "../assets/date.png";
import { Link, useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const handleJobClick = () => {
    navigate(`/job/${job.id}`, { state: { job } });
  };
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[362px]">
      <div className="relative">
        <img
          src={job.image}
          alt={job.title}
          className="w-full h-52 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-white px-3 py-1 rounded-lg text-sm text-green-600 font-semibold shadow-md">
          <CountdownTimer deadline={job.deadlineDate} />
        </div>
        <div className="py-2 px-4 backdrop-blur-sm bg-white/30 border border-gray-300 text-white text-sm font-semibold absolute top-2 left-2 rounded-full shadow-md">
          <span className="font-pop font-normal text-[16px]">Designer</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-[24px] font-medium font-pop text-[#121212] mb-2">{job.title}</h3>
        <p className="text-[14px] text-[#837E7E] font-normal font-pop mb-2">
          {job.type} | {job.level} |
          <span className="text-[#151515] text-[14px] font-pop font-medium"> {job.shift}</span>
        </p>
        <div className="flex items-center text-sm mb-4 gap-1 text-[14px] text-[#837E7E] font-normal font-pop">
          <img src={date} alt="" />
          Deadline: <span className="ml-1 font-normal">{job.deadline}</span>
        </div>
        <div className="flex justify-between items-center">
          <p 
            onClick={handleJobClick}
            className="text-green-700 font-medium underline hover:text-green-900 cursor-pointer"
          >
            View Details
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex gap-2">
            Apply Now <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
