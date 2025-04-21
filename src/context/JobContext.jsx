import { createContext, useContext } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const jobData = [
    {
      id: 1,
      title: "UI/UX Designer",
      image: "/images/cardbg.png",
      type: "Onsite | Full Time ",
      level: "Entry-Level",
      shift: "Night Shift",
      deadline: "30 April 2025",
      deadlineDate: "2025-04-25T23:59:59",
    },
    {
      id: 2,
      title: "Junior Product Designer",
      image: "/images/cardbg.png",
      type: "Onsite | Full Time ",
      level: "Entry-Level",
      shift: "Night Shift",
      deadline: "30 April 2025",
      deadlineDate: "2025-04-30T23:59:59",
    },
  ];

  const jobDataTwo = [
    {
      id: 3,
      title: "Flutter Developer",
      image: "/images/cardf.png",
      type: "Onsite | Full Time ",
      level: "Entry-Level",
      shift: "Night Shift",
      deadline: "30 April 2025",
      deadlineDate: "2025-04-25T23:59:59",
    },
    {
      id: 4,
      title: "Laravel Developer",
      image: "/images/lara.png",
      type: "Onsite | Full Time ",
      level: "Entry-Level",
      shift: "Night Shift",
      deadline: "30 April 2025",
      deadlineDate: "2025-04-30T23:59:59",
    },
    {
      id: 5,
      title: "Front End Development",
      image: "/images/html.png",
      type: "Onsite | Full Time ",
      level: "Entry-Level",
      shift: "Night Shift",
      deadline: "30 April 2025",
      deadlineDate: "2025-04-30T23:59:59",
    },
    {
      id: 6,
      title: "Python Django Developer",
      image: "/images/jango.png",
      type: "Onsite | Full Time",
      level: "Entry-Level",
      shift: "Night Shift",
      deadline: "30 April 2025",
      deadlineDate: "2025-04-30T23:59:59",
    },
    {
      id: 7,
      title: "Front End Development2",
      image: "/images/html.png",
      type: "Onsite | Full Time",
      level: "Entry-Level",
      shift: "Night Shift",
      deadline: "30 April 2025",
      deadlineDate: "2025-04-30T23:59:59",
    },
  ];

  const allJobs = [...jobData, ...jobDataTwo];

  return (
    <JobContext.Provider value={{ allJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => useContext(JobContext);
