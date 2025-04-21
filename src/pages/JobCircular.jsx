import React from 'react'

const JobCircular = ({job}) => {

  console.log(job)

  return (
    <>
    <section className='mt-[70px] bg-no-repeat bg-job bg-cover bg-center  h-full w-full pt-[190px] pb-[130px]'>
        <div className="container mx-auto">
        <div className="">
          <p className='text-[#ffff] font-pop font-normal text-[16px] mb-4'>Developer</p>
          <h2 className='font-pop font-medium text-[40px] text-[#ffff] mb-2'>Front End Development</h2>
          <p className='font-pop font-semibold text-[24px] text-[#ffff]'>25,000 - 90,0000 <span className='font-pop font-medium text-[10px] text-[#C8C8C8]'>BDT/Month</span> </p>
        </div>
        <div className="flex items-center space-x-[110px] mt-[40px]">
          <div className="">
            <h3 className='font-pop font-medium text-[16px] text-[#fff]'>Location</h3>
            <p className='font-pop font-normal text-[14px] text-[#c8c8c8]'>Dhaka, Bangladesh</p>
          </div>
          <div className="">
            <h3 className='font-pop font-medium text-[16px] text-[#fff]'>Job Type</h3>
            <p className='font-pop font-normal text-[14px] text-[#c8c8c8]'>Full Time</p>
          </div>
          <div className="">
            <h3 className='font-pop font-medium text-[16px] text-[#fff]'>Experience</h3>
            <p className='font-pop font-normal text-[14px] text-[#c8c8c8]'>Entry-Level</p>
          </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default JobCircular