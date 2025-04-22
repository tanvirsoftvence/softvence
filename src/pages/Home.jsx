import React, { useRef } from "react";
import JobCard from "../components/JobCard";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useJobs } from "../context/JobContext";

const Home = () => {
  const { allJobs } = useJobs();
  const designerJobs = allJobs.filter((job) =>
    job.title.toLowerCase().includes("designer")
  );

  const developerJobs = allJobs.filter(
    (job) =>
      job.title.toLowerCase().includes("developer") ||
      job.title.toLowerCase().includes("front end") ||
      job.title.toLowerCase().includes("django") ||
      job.title.toLowerCase().includes("flutter") ||
      job.title.toLowerCase().includes("laravel")
  );
  const swiperRef = useRef(null);

  return (
    <div className="min-h-screen container mx-auto py-10 px-4 mt-[100px]">
      {/* Title */}
      <h2 className="xl:text-[48px] 2xl:text-[48px] md:text-[30px] sm:text-[25px] text-[25px] font-semibold text-[#121212] lg:mb-6 mb-2 font-pop">
        Choose your <span className="text-[#038317]">position</span> that fits
        you.
      </h2>
      <p className="text-[16px] font-normal text-[#474747] font-pop">
        Currently following positions are open, feel free to apply any one where
        you are skilled and prefer to join.
      </p>

      {/* Designer Roles */}
      <div className="lg:mt-10 mt-4">
        <h2 className="text-[32px] font-pop font-semibold lg:mb-4">
          Designer Roles
        </h2>
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            320: { slidesPerView: 1},
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="lg:py-10"
        >
          {designerJobs.map((job, index) => (
            <SwiperSlide key={index} className="lg:py-10 pt-5 pb-5">
              <JobCard job={job} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Developer Roles */}
      <div className="lg:mt-16 mt-5">
        <div className="flex justify-between items-center lg:mb-4 mb-2">
          <h2 className="text-[32px] font-pop font-semibold">
            Developer Roles
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[#3C8303] text-[#3C8303] hover:bg-[#3C8303] hover:text-white transition"
            >
              <FiArrowLeft size={24} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[#3C8303] text-[#3C8303] hover:bg-[#3C8303] hover:text-white transition"
            >
              <FiArrowRight size={24} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            320: { slidesPerView: 1},
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="py-10"
        >
          {developerJobs.map((job, index) => (
            <SwiperSlide key={index} className="py-10">
              <JobCard job={job} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
