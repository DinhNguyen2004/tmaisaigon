import React from 'react'
import footlogo from '../../assets/logo_tmaisaigon.jpg'
import foota from '../../assets/logotmai_X_56_footer.png'
import footb from '../../assets/lonicerasaigon_footer.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { MdOutlineCopyright } from "react-icons/md";
import Googlemap from './Googlemap'

function Footer(props) {
    const {isMobile} = props;



    return (
        <section>
            {isMobile ? ( 
            <div>
                <Googlemap />
                <div className='bg-footerbg text-white mb-[56px]'>  
                    <div className=' text-[16px] pt-4 pl-4'>
                        <strong>Công ty TNHH TMAI Sài gòn</strong>
                    </div>      
                    <div className="grid grid-rows-2 grid-cols-2 grid-flow-col gap-4 p-[10px] border-b-2 border-red-600/40">
                        <div className="row-span-3 pt-[20px] left-0">
                            <img src={footlogo} alt="" />
                            <span className='flex gap-2 pt-2 text-[12px]'> <MdOutlineCopyright size={"18px"}/> 2023 All right reserved</span>
                            <div className='flex gap-8 mt-[20px]'>
                                <FaFacebookSquare size={"30px"}/>
                                <FaSquareInstagram size={"30px"} />
                                <FaSquareTwitter size={"30px"} />
                            </div>      
                        </div>
                        <div className="col-span-2  pt-[20px]">
                            <img src={foota} alt="" />
                        </div>
                        <div className="row-span-2 col-span-2 t-0">
                            <img src={footb} alt="" />
                        </div>
                    </div>   
                    <div className='p-2 gap-2 border-b-2 border-red-600/40 text-[15px]'>
                        <p>Văn phòng: HM Town, 412 Nguyễn Thị Minh Khai, P. 5, Quận 3, TPHCM</p>
               
                        <p>Điện thoại: 086.995.7420 - 0901.472.160</p>
           
                        <p>Email: ngaymoisaigon@gmail.com; tmaisaigon@ngaymoisaigon.com</p>

                        <p>Website: ngaymoisaigon.com - ngaymoisaigon.vn</p>
                    </div> 
                    <div className='text-[13px] text-end pr-3'>
                        <p>
                            Đang online: <strong>3</strong> | Tổng truy cập: <strong>11064</strong>
                        </p>
                    </div>
                </div> 
            </div>                
            ) : (
                // Laptop
                <div>
                <Googlemap />
                <div className='bg-footerbg text-white'>  
                    <div className=' text-[16px] pt-4 pl-4'>
                        <strong>Công ty TNHH TMAI Sài gòn</strong>
                    </div>      
                    <div className="grid grid-rows-2 grid-cols-2 grid-flow-col gap-4 p-[10px] border-b-2 border-red-600/40">
                        <div className="row-span-3 pt-[20px] left-0">
                            <img src={footlogo} alt="" />
                            <span className='flex gap-2 pt-2 text-[12px]'> <MdOutlineCopyright size={"18px"}/> 2023 All right reserved</span>
                            <div className='flex gap-8 mt-[20px]'>
                                <FaFacebookSquare size={"30px"}/>
                                <FaSquareInstagram size={"30px"} />
                                <FaSquareTwitter size={"30px"} />
                            </div>      
                        </div>
                        <div className="col-span-2  pt-[20px]">
                            <img src={foota} alt="" />
                        </div>
                        <div className="row-span-2 col-span-2 t-0">
                            <img src={footb} alt="" />
                        </div>
                    </div>   
                    <div className='p-2 gap-2 border-b-2 border-red-600/40 text-[15px]'>
                        <p>Văn phòng: HM Town, 412 Nguyễn Thị Minh Khai, P. 5, Quận 3, TPHCM</p>
               
                        <p>Điện thoại: 086.995.7420 - 0901.472.160</p>
           
                        <p>Email: ngaymoisaigon@gmail.com; tmaisaigon@ngaymoisaigon.com</p>

                        <p>Website: ngaymoisaigon.com - ngaymoisaigon.vn</p>
                    </div> 
                    <div className='text-[13px] text-end pr-3'>
                        <p>
                            Đang online: <strong>3</strong> | Tổng truy cập: <strong>11064</strong>
                        </p>
                    </div>
                </div> 
            </div>    
            )}
        </section>
    )
}

export default Footer