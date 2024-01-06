import { useState, useEffect, useCallback, useMemo } from "react"
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '.././Slogan/CustomSlogan.css'
// import { ChevronLeft, ChevronRight } from "react-feather"
import GenA from '../../assets/GenA.jpg';
import GenC from '../../assets/GenC.jpg';
import GenE from '../../assets/GenE.jpg';
import GenF from '../../assets/GenF.jpg';

function Slogan(props, autoSlide = true) {
  const {isMobile} = props;

  const slides = useMemo(() => [
    {img: GenA, para: "Truyền thông báo chí"},
    {img: GenE, para: "Kết nối kinh doanh"},
    {img: GenF, para: "Tổ chức sự kiện"},
    {img: GenC, para: "Vươn tầm quốc tế"}
], []);
    
  const autoSlideInterval = 3000
  const [curr, setCurr] = useState(0)

  const next = useCallback(() =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1)), [slides]);

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [autoSlide, next, autoSlideInterval, slides])

    return (
      <div>
            {isMobile ? ( 
          <div className="my-auto relative mt-[80px]">
            <div className="overflow-hidden">
                <div 
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
                >
                  {slides.map((s) => (
                  <>
                    <img src={s.img} alt={slides.altText}/>            
                    </> 
                ))}  
                </div>
                <div
    
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((p) => (
                    <>
                      <div
                            className="bg-[#92A8D1] text-white w-full uppercase font-bold"
                      ><p className="p-10 w-[4000px] text-[25px]">{p.para}</p>
                      
                      </div>         
                    </>
                ))}         
          </div>
        </div>
        <div className="absolute bottom-4 right-3 left-0">
              <div className="flex items-end justify-end gap-2">
                
              {slides.map((_, i) => (
                  <div
                  className={`
                  transition-all w-3 h-3 bg-slogan rounded-full cursor-pointer
                  ${curr === i ? "p-2 w-9 h-0 rounded" : "bg-opacity-70"}
                  ` }
                  onClick={() => {
                      setCurr(i);
                    }}
                  />
              ))}        
                </div>  
              </div>
            </div>
            ) : (
            // LAPTOP
              <div className="mt-[120px]">

        <Fade>
            
            {slides.map((s) => (
                <div className="each-slide ">
                <p>{s.para}</p>
                <div>
                <img src={s.img} alt="img"/>
                </div>           
            </div>
            ))}          
        </Fade>
  
              </div>
                      
          )}
      </div>
  )
}

export default Slogan