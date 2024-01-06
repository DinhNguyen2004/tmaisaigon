import React from 'react'
import iEvents from '../DataJson/iEvents.json'
import Pagination from "@mui/material/Pagination";
import { usePagination } from "../hooks/pagination";
import { LiaDotCircle } from "react-icons/lia";
 
import { LuClock9 } from "react-icons/lu";


function Events(props) {
    const {isMobile} = props

    const [
      totalPages,
      startPageIndex,
      endPageIndex,
      currentPageIndex, //eslint-disable-line
      displayPage,
    ] = usePagination(3, iEvents.length);

  return (
    <div className=''>
        {isMobile ? (
            <div className='mt-[64px]'> 
                <div className='bg-[#eee] text-[16px] text-center py-[5px] font-bold'>Tổ chức sự kiện</div>             
                <div className=' text-center text-[32px] text-[#009b77] font-betasemibold mt-[16px]'>Tổ chức sự kiện</div> 

            <div >
            {(() => {
            const displayPosts = [];
            for (let i = startPageIndex; i <= endPageIndex; i++) {
            displayPosts.push(
                    <div className='rounded-2xl shadow-lg shadow-zinc-600/30 p-3'>
                      <a href={iEvents[i].link}>        
                        <img src={iEvents[i].img} alt="thoi trang"/>    
                        <p className='mt-2'><strong>Lĩnh vực</strong>: {iEvents[i].field}</p>
                        <p className='mt-2'><strong>Khu vực</strong>: {iEvents[i].area}</p>
                        <span className='flex gap-2 items-center mt-2'><LuClock9 />: {iEvents[i].time}</span>
                        <p className='mt-2'>{iEvents[i].des}</p>   
                      </a>   
                    </div>
           
                );
            }
            return  <div className='grid grid-cols-1 text-[16px] items-center justify-items-center gap-[30px] mt-6 p-[20px]'>{displayPosts}</div>;
            })()}               
            </div>
                <div className='flex justify-center mt-6'>
                <Pagination
                    color="primary"
                    count={totalPages}
                    onChange={(event, value) => displayPage(value)}
                />
            </div>
            

            <div className='mt-[20px] px-[20px] font-semibold'>

        
            <div className='flex items-center gap-2'>
              <LiaDotCircle /> Sự kiện mới
            </div>
            
            <ul className=''>
              <li className='mb-[11px]'>Năm 2024 đầy ắp sự kiện bóng đá đỉnh cao của thế giới</li>
              <li className='mb-[11px]'>Hơn 50.000 người dân thành phố “đổi gió” đón năm mới tại trung tâm mới</li>
              <li className='mb-[11px]'>Du lịch Cần Thơ thu về gần 133 tỷ đồng dịp Tết dương lịch 2024</li>
              <li className='mb-[11px]'>Khu du lịch quốc gia Mộc Châu đón hàng vạn du khách dịp Tết Dương lịch 2024</li>
              <li className='mb-[11px]'>2024 tiễn năm cũ 2023</li>
            </ul>

            </div>


            </div> 
        ) : (
            // Lapotp
            <div className='mt-[95px]'>
                <div className='bg-[#eee] text-[18px] py-[5px] font-bold'><span className='ml-[130px]'>Tổ chức sự kiện</span></div>             
                <div className=' text-center text-[32px] text-[#009b77] font-betasemibold mt-[16px]'>Tổ chức sự kiện</div> 

                <div >
                  {(() => {
                  const displayPosts = [];
                  for (let i = startPageIndex; i <= endPageIndex; i++) {
                  displayPosts.push(
                          <div className='w-[365px] rounded-2xl shadow-lg shadow-zinc-600/30 p-3'>
                            <a href={iEvents[i].link}>        
                              <img src={iEvents[i].img} alt="thoi trang"/>    
                              <p className='mt-2'><strong>Lĩnh vực</strong>: {iEvents[i].field}</p>
                              <p className='mt-2'><strong>Khu vực</strong>: {iEvents[i].area}</p>
                              <span className='flex gap-2 items-center mt-2'><LuClock9 />: {iEvents[i].time}</span>
                              <p className='mt-2'>{iEvents[i].des}</p>   
                            </a>   
                          </div>
                
                      );
                  }
                  return  <div className='flex flex-wrap justify-center text-[16px] gap-[30px] mt-6 p-[20px]'>{displayPosts}</div>;
                  })()}  
                    </div> 
                  <div className='flex justify-center mt-6'>
                <Pagination
                    color="primary"
                    count={totalPages}
                    onChange={(event, value) => displayPage(value)}
                />
              </div>

              <div className='mt-[20px] px-[20px] font-semibold'>

        
            <div className='flex items-center gap-2'>
              <LiaDotCircle /> Sự kiện mới
            </div>
            
            <ul className=''>
              <li className='mb-[11px]'>Năm 2024 đầy ắp sự kiện bóng đá đỉnh cao của thế giới</li>
              <li className='mb-[11px]'>Hơn 50.000 người dân thành phố “đổi gió” đón năm mới tại trung tâm mới</li>
              <li className='mb-[11px]'>Du lịch Cần Thơ thu về gần 133 tỷ đồng dịp Tết dương lịch 2024</li>
              <li className='mb-[11px]'>Khu du lịch quốc gia Mộc Châu đón hàng vạn du khách dịp Tết Dương lịch 2024</li>
              <li className='mb-[11px]'>2024 tiễn năm cũ 2023</li>
            </ul>

            </div>
            </div>
        )}
    </div>
  )
}

export default Events