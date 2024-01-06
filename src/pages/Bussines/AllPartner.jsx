import React from 'react'
import { usePagination } from "./../../hooks/pagination";
import Pagination from "@mui/material/Pagination";
import { Icon } from '@iconify/react';
import iPartners from '../../DataJson/iPartners.json'


function AllPartner(props) {

  const {isMobile} = props



  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex, //eslint-disable-line
    displayPage,
  ] = usePagination(4, iPartners.length);

  return (
    <div className='mt-[64px]'>
        {isMobile ? (
          <div className=''>
            <div className='bg-[#eee] text-[16px] text-center py-[5px] font-bold'>Lĩnh vực kinh doanh</div>
            <div className=' text-center text-[32px] text-[#009b77] font-betasemibold mt-[16px]'>Khách hàng và đối tác</div> 
            <div>
            {(() => {
            const displayPartners = [];
            for (let i = startPageIndex; i <= endPageIndex; i++) {
            displayPartners.push(      
                <div className='rounded-t-lg self-start' style={{ backgroundColor: iPartners[i].colorBg }}>
                    <div className='flex h-[132px] border-b-4 border-[#black] items-center justify-center'>
                      <img
                        src={iPartners[i].img}
                        className='w-[170px] h-full p-4'
                        alt="" />
                    </div>

                    <div className='bg-[#d9d9d6] h-[300px]'>
                    <h2 className='font-bold text-center flex items-center justify-center gap-1'>{iPartners[i].title}</h2>

                    <div className='px-2 max-w-[170px] text-[#393939c4]'>         
                              
                      {iPartners[i].linkContent.map((link, index) => (
                        <a
                          key={index}
                          href={link}
                          className='flex gap-x-1'
                        >
                          <Icon icon="system-uicons:write" fontSize={28} className='min-w-[13px] max-w-[13px]' />
                          {iPartners[i].content[index]}
                        </a>
                      ))} 
                    </div>  
                    </div>  
                    </div>                                                 
                );
            }    
            return  <div className='flex flex-wrap items-center justify-center gap-2 mt-[16px]'>{displayPartners}</div>;
            }) ()}          
            </div>
                <div className='flex justify-center mt-6'>
                <Pagination
                    color="primary"
                    count={totalPages}
                    onChange={(event, value) => displayPage(value)}
                />
                </div>
            </div>                       
        ):(

          // Laptop
          <div className='mt-[95px]'>
            <div className='bg-[#eee] text-[18px] text-start py-[5px] font-bold'><span className='ml-[130px]'>Lĩnh vực kinh doanh</span></div>
            <div className=' text-center text-[32px] text-[#009b77] font-betasemibold mt-[16px]'>Khách hàng và đối tác</div> 
            <div>
            {(() => {
            const displayPartners = [];
            for (let i = startPageIndex; i <= endPageIndex; i++) {
            displayPartners.push(      
                <div className='rounded-t-lg self-start' style={{ backgroundColor: iPartners[i].colorBg }}>
                    <div className='flex h-[132px] border-b-4 border-[#black] items-center justify-center'>
                      <img
                        src={iPartners[i].img}
                        className='w-[170px] h-full p-4'
                        alt="" />
                    </div>

                    <div className='bg-[#d9d9d6] h-[300px]'>
                    <h2 className='font-bold text-center flex items-center justify-center gap-1'>{iPartners[i].title}</h2>

                    <div className='px-2 max-w-[170px] text-[#393939c4]'>         
                              
                      {iPartners[i].linkContent.map((link, index) => (
                        <a
                          key={index}
                          href={link}
                          className='flex gap-x-1'
                        >
                          <Icon icon="system-uicons:write" fontSize={28} className='min-w-[13px] max-w-[13px]' />
                          {iPartners[i].content[index]}
                        </a>
                      ))} 
                    </div>  
                    </div>  
                    </div>                                                 
                );
            }    
            return  <div className='flex flex-wrap items-center justify-center gap-24 mt-[16px]'>{displayPartners}</div>;
            }) ()}          
            </div>
                <div className='flex justify-center mt-6'>
                <Pagination
                    color="primary"
                    count={totalPages}
                    onChange={(event, value) => displayPage(value)}
                />
                </div>
            </div>  
        )}
    </div>
  )
}

export default AllPartner