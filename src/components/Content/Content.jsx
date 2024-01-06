import React from 'react'
import Partners from './Partners';
import ProductInvest from './Productinvest';
import Event from './Event';
import Activity  from './Activity';
import imgIntro from '../../assets/img_introduct.jpg'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


function Content(props) {

  const {isMobile} = props;

  return (
    <div>
      {isMobile ? (
        <div>
        <div className='p-[16px] '>
          <span className='head-content'>Công ty TNHH TMAI Sài Gòn</span>
          <p className='text-[22px]'>
            Được thành lập vào 25/02/2014, với hơn 9 năm kinh nghiệm trong lĩnh vực truyền thông quảng cáo,
             xúc tiến thương mại, tổ chức sự kiện, sản xuất chương trình truyền hình, dịch vụ ẩm thực,
            sản xuất quà tặng,...
          </p> 
        </div>
        <div className='divide'></div>
        <Partners isMobile={isMobile}/>
        <div className='divide'></div>
        <ProductInvest isMobile={isMobile}/>
        <a className='all-factor' href='/business'>
             Tất cả sản phẩm <MdOutlineKeyboardDoubleArrowRight />
        </a>
        
        <div className='divide'></div>
        <Event isMobile={isMobile}/>
        <a className='all-factor' href='/events'>
         Tất cả các sự kiện <MdOutlineKeyboardDoubleArrowRight />
        </a>

        <div className='divide'></div>
        <Activity isMobile={isMobile}/>
        <a className='all-factor' href='/activities'>
          Tất cả hoạt động <MdOutlineKeyboardDoubleArrowRight />
        </a>
        
        </div>
        
        
        
      ) : (
        // Laptop
        <div className='mt-[120px]'>
            <section className='flex items-center justify-center '>
              <div>
                <img src={imgIntro} alt="" className='w-[600px] h-[330px]'/>
              </div>
              <div className=''>
                <strong className='text-26 text-hcontent'>Giới thiệu</strong>
                <p className='mt-[30px] max-w-[540px]'>
                  <strong>TMAI Sài Gòn</strong> được thành lập vào 25/02/2014, với hơn 9 năm kinh nghiệm trong lĩnh vực truyền thông quảng cáo,
                  xúc tiến thương mại, tổ chức sự kiện, sản xuất chương trình truyền hình, dịch vụ ẩm thực,
                  sản xuất quà tặng,...
                </p> 
              </div>
            </section>   

            <div className='divide'></div>
            <Partners isMobile={isMobile} />

            <div className='divide'></div>
            <ProductInvest isMobile={isMobile}/>
            <a className='all-factor' href='/business'>
                Tất cả sản phẩm <MdOutlineKeyboardDoubleArrowRight />
            </a>

            <div className='divide'></div>
            <Event isMobile={isMobile}/>
            <a className='all-factor' href='/events'>
            Tất cả các sự kiện <MdOutlineKeyboardDoubleArrowRight />
            </a>

            <div className='divide'></div>
            <Activity isMobile={isMobile}/>
            <a className='all-factor' href='/activities'>
              Tất cả hoạt động <MdOutlineKeyboardDoubleArrowRight />
            </a>
        



        </div>
      )}
    </div>
  )
}

export default Content