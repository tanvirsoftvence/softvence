// pages/Home.jsx
import React from "react";
import JobCard from "../components/JobCard";

const jobData = [
  {
    title: "UI/UX Designer",
    image: "/images/cardbg.png",
    type: "Onsite | Full Time | Entry-Level",
    level: "Entry-Level",
    shift: "Night Shift",
    deadline: "30 April 2025",
    deadlineDate: "2025-04-25T23:59:59",
  },
  {
    title: "Junior Product Designer",
    image: "/images/cardbg.png",
    type: "Onsite | Full Time | Entry-Level",
    level: "Entry-Level",
    shift: "Night Shift",
    deadline: "30 April 2025",
    deadlineDate: "2025-04-30T23:59:59",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen container mx-auto py-10 px-4">
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">
        Choose your <span className="text-[#038317]">position</span> that fits you.
      </h2>
      <p className="text-[15px] font-semibold text-gray-700">
        Currently following positions are open, feel free to apply any one where you are skilled and prefer to join.
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Designer Roles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobData.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
