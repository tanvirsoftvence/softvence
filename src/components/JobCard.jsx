// components/JobCard.jsx
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={job.image}
          alt={job.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-white px-3 py-1 rounded-lg text-sm text-green-600 font-semibold shadow-md">
          <span>{job.countdown.days}</span> Days
          <span>{job.countdown.hours}</span> Hours
          <span>{job.countdown.minutes}</span> Min
        </div>
        <div className="py-2 px-4 bg-blur border border-gray-300 text-white text-sm font-semibold absolute top-2 left-2 rounded-full shadow-md">
            <span>Designer</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {job.type} &bull; {job.level} &bull;
          <span className="text-black font-medium">{job.shift}</span>
        </p>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <FaRegCalendarAlt className="mr-2" />
          Deadline: <span className="ml-1 font-semibold">{job.deadline}</span>
        </div>
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-green-700 font-medium underline hover:text-green-900"
          >
            View Details
          </a>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Apply Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;