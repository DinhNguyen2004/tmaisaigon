import React from 'react'
import iEvents from '../.././DataJson/iEvents.json'
import { LuClock9 } from "react-icons/lu";


function Event(props) {

  const {isMobile} = props

  return (
      
      <div> 
        {isMobile ? (
          <div>
              <div className='text-center px-2'>         
              <span className='head-content text-hcontent'>Tổ chức sự kiện</span>  

              </div>

              <div className='grid grid-cols-1 grid-rows-3 text-[16px] items-center justify-items-center gap-[30px] mt-6 p-[20px]'>

              {iEvents.slice(0,3).map((e)=> (       
                <div className='rounded-2xl shadow-lg shadow-zinc-600/30 p-3'>
                <a href={e.link}>        
                <img src={e.img} alt="thoi trang" className=''/>    
                <p className='mt-2'><strong>Lĩnh vực</strong>: {e.field}</p>
                <p className='mt-2'><strong>Khu vực</strong>: {e.area}</p>
                <span className='flex gap-2 items-center mt-2'><LuClock9 />: {e.time}</span>
                <p className='mt-2'>{e.des}</p>   
                </a>   
              </div>
               ))}
          
          </div>           
          </div>
        ) : (
          // Laptop
          <div>
              <div className='text-center px-2'>         
                <span className='head-content text-hcontent'>Tổ chức sự kiện</span>  
              </div>
              <div className='flex flex-wrap text-[16px] items-center justify-center gap-[90px] mt-6 p-[20px]'>

              {iEvents.slice(0,3).map((e)=> (       
                <div className='rounded-2xl shadow-lg shadow-zinc-600/30 p-3'>
                <a href={e.link}>        
                <img src={e.img} alt="thoi trang" className='w-[400px] h-[260px]'/>    
                <p className='mt-2'><strong>Lĩnh vực</strong>: {e.field}</p>
                <p className='mt-2'><strong>Khu vực</strong>: {e.area}</p>
                <span className='flex gap-2 items-center mt-2'><LuClock9 />: {e.time}</span>
                <p className='mt-2'>{e.des}</p>   
                </a>   
              </div>
               ))}
              </div>
          </div>
        )}           
      </div>
      
  )
}

export default Event