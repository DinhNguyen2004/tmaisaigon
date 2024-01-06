import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import { IoIosPlayCircle } from "react-icons/io";
import { IoPauseCircle } from "react-icons/io5";
import '../../components/Content/CustomActivity.css'
import KHFord from '../../assets/activities/domestic/Ford_MienTay.jpg'
import KHMinhLong from '../../assets/activities/domestic/KH_Minh_Long.jpg'
import KHNewWorld from '../../assets/activities/domestic/KH_NewWorld.jpg'
import aCharity from '../../assets/activities/domestic/ThienNguyen.jpg'
import eSin from '../../assets/activities/abroad/exchange_Singapore.jpg'
import cMalay from '../../assets/activities/abroad/connect_Malaysia.jpg'
import tCam from '../../assets/activities/abroad/travel_Cam.jpg'
import mThai from '../../assets/activities/abroad/meeting_Thailand.jpg'


function Activity(props) {
  const {isMobile} = props

  const [curr, setCurr] = useState(0);

  const slides = useMemo(() => [
    { img: KHFord, para: "Gặp gỡ Ford khu vực Miền Tây" },
    { img: KHMinhLong, para: "Tham dự họp báo Minh Long" },
    { img: KHNewWorld, para: "Giao thương khách sạn New World miền Nam" },
    { img: aCharity, para: "Thiện nguyên cùng các em nhỏ Việt Nam" },
    { img: eSin, para: "Chuyển đổi doanh nghiệp quốc tế Singapore" },
    { img: cMalay, para: "Chương trình du lịch với Colours of Malaysia" },
    { img: tCam, para: "Du lịch vùng đất Campuchia" },
    { img: mThai, para: "Kết giao doanh nghiệp tại Thái Lan" }
  ], []);

  const autoSlideInterval = 2500

  const [isAutoSlide, setAutoSlide] = useState(true);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const toggleAutoSlide = () => {
    setAutoSlide((prevAutoSlide) => !prevAutoSlide);
  };

  const next = useCallback(() => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  }, [slides]);

  useEffect(() => {
    let slideInterval;

    if (isAutoSlide) {
      slideInterval = setInterval(() => {
        next();
      }, autoSlideInterval);
    }

    return () => clearInterval(slideInterval);
  }, [isAutoSlide, next, autoSlideInterval]);
  return (
    <div>
    {isMobile ? (
            <div className='text-center'>
            <span className='head-content text-hcontent'>Hoạt động trong nước và quốc tế</span> 

            <div className="relative mt-[80px]">
      <div className="">
      <div className="flex justify-center items-center
      border-4 border-dashed border-[#00000050] rounded-[5px] animate-border-pulse"

      >
        <div
          className="each-slide-effect-div
          "
          style={{
            backgroundImage: `url(${slides[curr].img})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundPositionx: 0,
            backgroundPositiony: 0,

          }}
          
        >
        <span className='each-slide-effect-span'>
          {slides[curr].para}    
        </span>
          
        </div>
                
      </div>
      </div>
      </div>
      <div className="inset-0 flex items-center justify-center p-4">
      <button
      onClick={prev}
      className="p-1 rounded-full shadow shadow-cyan-500/50 bg-white/80 text-gray-800 hover:bg-white"
      >
      <FaCircleArrowLeft size={33} />
      </button>

      <button
      onClick={toggleAutoSlide}
      className="p-1 rounded-full shadow shadow-cyan-500/50 bg-white/80 text-gray-800 hover:bg-white "
      >
      {isAutoSlide ? (
        <IoPauseCircle size={40} />
      ) : (
        <IoIosPlayCircle size={40} />
      )}
      </button>

      <button
      onClick={next}
      className="p-1 rounded-full shadow shadow-cyan-500/50 bg-white/80 text-gray-800 hover:bg-white"
      >
      <FaCircleArrowRight size={33} />
      </button>

      </div> 
      </div>
    ) : (
      // LAptop
      <div className='text-center'> 
        <span className='head-content text-hcontent'>Hoạt động trong nước và quốc tế</span> 
        <div className="slideshow">
        <div className="content">
            <div className="content-carrosel">
                {slides.map((s) => (                   
                    <figure className="shadowE"><img src={s.img} alt="" />
                    </figure>       
                ))}
                    
            </div>
        </div>  
    </div>
      </div> 
    )}
    
    </div>
  )
}

export default Activity