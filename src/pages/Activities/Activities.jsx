import React from 'react';

import a from '../../assets/activities/domestic/Ford_MienTay.jpg'
import b from '../../assets/activities/domestic/KH_Minh_Long.jpg'
import c from '../../assets/activities/domestic/KH_NewWorld.jpg'
import d from '../../assets/activities/domestic/ThienNguyen.jpg'
import e from '../../assets/activities/domestic/trongnuoc3.jpg'
import f from '../../assets/activities/domestic/cactinh1.jpg'

import aa from '../../assets/activities/abroad/connect_Malaysia.jpg'
import bb from '../../assets/activities/abroad/exchange_Singapore.jpg'
import cc from '../../assets/activities/abroad/meeting_Thailand.jpg'
import dd from '../../assets/activities/abroad/travel_Cam.jpg'
import ee from '../../assets/activities/abroad/IMG_1559ok.jpg'
import ff from '../../assets/activities/abroad/catahypacific.jpg'

import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"
import "lightgallery/css/lg-autoplay.css"
import "lightgallery/css/lg-share.css"
import "lightgallery/css/lg-rotate.css"

import LightGallery from 'lightgallery/react/Lightgallery.es5';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgVideo from 'lightgallery/plugins/video';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';


function Activities(props) {
    const {isMobile} = props;

 

  return (
    <div className=''>
        {/* Hoạt động trong nước */}
        {isMobile ? (
            <div className='mt-[64px]'>
            <div className='bg-[#eee] text-[16px] text-center py-[5px] font-bold'>Hoạt động</div> 
            <div className> 

                      

            <div className='text-center text-[32px] text-[#009b77] font-betasemibold mt-[16px]'>Hoạt động trong nước</div>
            <div className='mt-[12px]'>
            
            </div>   
            </div> 
            </div> 
                 
        ) : (
            <div className='mt-[95px]'>
            <div className='bg-[#eee] text-[16px] text-start py-[5px] font-bold'><span className='ml-[130px]'>Hoạt động</span></div> 
            <div className> 

                      

            <div className='text-center text-[32px] text-[#009b77] font-betasemibold mt-[16px]'>Hoạt động trong nước</div>
            <div className='mt-[12px]'>
            
            </div>   
            </div> 
            </div> 
        )}
            
             <div className='flex items-center justify-center'>   
            <LightGallery
                speed={500}
                plugins={[lgThumbnail,lgZoom,lgAutoplay,lgRotate,lgShare,lgVideo]}>
                
                <a href={a} className='w-[100px] h-[63px] inline-block mx-3'>
                    <img
                    src={a}
                    alt="Gặp gỡ Ford khu vực miền Tầy" className='w-[100px] h-[63px]'/>
                </a>
                <a href={b} className='w-[100px] h-[63px] inline-block mx-3'>
                    <img
                    src={b} 
                    alt="Tham dự họp báo Minh Long" className='w-[100px] h-[63px]'/>
                </a>  
              
                <a href={c} className='w-[100px] h-[63px] inline-block mx-3'>
                    <img
                    src={c} 
                    alt="Sự kiện x" className='w-[100px] h-[63px]'/>
                </a>  
                 
                <a href={d} className='w-[100px] h-[63px] inline-block mx-3'>
                    <img
                    src={d} 
                    alt="Sự kiện x" className='w-[100px] h-[63px]'/>
                </a>  

                <a href={e} className='w-[100px] h-[63px] inline-block mx-3'>
                    <img
                    src={e} 
                    alt="Sự kiện x" className='w-[100px] h-[63px]'/>
                </a>  

                <a href={f} className='w-[100px] h-[63px] inline-block mx-3'>
                    <img
                    src={f} 
                    alt="Sự kiện x" className='w-[100px] h-[63px]'/>
                </a>  
                
            </LightGallery>  
            </div>
            <div className='divide'>    
            </div>

            {/* Hoạt động quốc tế */}

            {isMobile ? (
            <div className> 

            <div className='text-center text-[32px] text-[#009b77] font-betasemibold mt-[16px]'>Hoạt động quốc tế</div>
            <div className='mt-[12px]'>
            
            </div>   
            </div>  
                 
        ) : (
            <div className> 

            <div className='text-center text-[32px] text-[#009b77] font-betasemibold mt-[16px]'>Hoạt động quốc tế</div>
            <div className='mt-[12px]'>
            
            </div>   
            </div>  
        )}

<div className='flex items-center justify-center'>   
            <LightGallery
                speed={500}
                plugins={[lgThumbnail,lgZoom,lgAutoplay,lgRotate,lgShare,lgVideo]}>
                
                <a href={aa} className='w-[100px] h-[63px] inline-block mx-3'>
                    <img
                    src={aa}
                    alt="Sự kiện Y" className='w-[100px] h-[63px]'/>
                </a>
                <a href={bb} className='w-[100px] h-[63px] inline-block mx-3'>
                    <img
                    src={bb} 
                    alt="Chuyển đổi doanh nghiệp quốc tế Singapore" className='w-[100px] h-[63px]'/>
                </a>  
              
                <a href={cc} className='w-[100px] h-[63px] inline-block mx-3'>
                    <img
                    src={cc} 
                    alt="Sự kiện Y" className='w-[100px] h-[63px]'/>
                </a>  
                 
                <a href={dd} className='w-[100px] h-[63px] inline-block mx-3'>
                    <img
                    src={dd} 
                    alt="Sự kiện Y" className='w-[100px] h-[63px]'/>
                </a>  

                <a href={ee} className='w-[100px] h-[63px] inline-block mx-3'>
                    <img
                    src={ee} 
                    alt="Sự kiện Y" className='w-[100px] h-[63px]'/>
                </a>  

                <a href={ff} className='w-[100px] h-[63px] inline-block mx-3'>
                    <img
                    src={ff} 
                    alt="Sự kiện Y" className='w-[100px] h-[63px]'/>
                </a>  
                
            </LightGallery>  
            </div>
            
    </div>

    
  )
}

export default Activities;

