import React from 'react'
import { useParams } from 'react-router-dom'
import { useJobs } from '../context/JobContext'

const JobCircular = ({ job }) => {
  const { id } = useParams()
  const { allJobs } = useJobs()
  const jobData = allJobs.find((job) => job.id === parseInt(id))

  if (!jobData) {
    return <div>Job not found</div>
  }

  return (
    <section className='mt-[70px] bg-no-repeat bg-job bg-cover bg-center h-full w-full pt-[100px] pb-[80px] sm:pt-[130px] sm:pb-[100px] md:pt-[150px] md:pb-[120px] lg:pt-[190px] lg:pb-[130px]'>
      <div className="container mx-auto px-4">
        <div className="text-center lg:text-left">
          <p className='text-white font-pop font-normal text-base sm:text-lg mb-4'>Developer</p>
          <h2 className='font-pop font-medium text-3xl sm:text-4xl lg:text-5xl text-white mb-2'>
            {jobData.title}
          </h2>
          <p className='font-pop font-semibold text-xl sm:text-2xl lg:text-3xl text-white'>
            25,000 - 90,0000 
            <span className='font-pop font-medium text-xs text-[#C8C8C8] ml-2'>BDT/Month</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start sm:space-x-10 lg:space-x-[110px] space-y-6 sm:space-y-0 mt-10">
          <div>
            <h3 className='font-pop font-medium text-base text-white'>Location</h3>
            <p className='font-pop font-normal text-sm text-[#c8c8c8]'>Dhaka, Bangladesh</p>
          </div>
          <div>
            <h3 className='font-pop font-medium text-base text-white'>Job Type</h3>
            <p className='font-pop font-normal text-sm text-[#c8c8c8]'>Full Time</p>
          </div>
          <div>
            <h3 className='font-pop font-medium text-base text-white'>Experience</h3>
            <p className='font-pop font-normal text-sm text-[#c8c8c8]'>Entry-Level</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobCircular