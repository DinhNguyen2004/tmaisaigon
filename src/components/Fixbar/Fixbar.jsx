import React from 'react'
import { FaPhoneVolume } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";

function Fixbar(props) {
    
    const {isMobile} = props;
   
    return (  
    <div className=''>
        {isMobile ? (
            <div className='grid grid-cols-4 justify-items-center fixed bottom-0 right-0 left-0 px-1  bg-fixbar text-white gap-5 py-1'>
            <div className=''>
                <FaPhoneVolume size={"24px"} className='ml-5'/>
                <span>Gọi điện</span>
            </div>
            <div>
                <span><SiZalo size={"24px"} className='border-solid border-2 border-sky-500 ml-5'/></span>
                <span>Chat Zalo</span>
            </div>
            <div>
                <span><FaFacebookMessenger size={"24px"} className='ml-6'/></span>
                <span>Messsage</span>
            </div>
            <div>
                <span><FaMapMarkedAlt size={"24px"} className='ml-6'/></span>
                <span>Chỉ đường</span>
            </div>
        </div>
        ) : (
            <i></i>
        )}
        
    </div>
  )
}

export default Fixbar