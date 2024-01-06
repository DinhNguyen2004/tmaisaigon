import React,{ useState, useEffect }  from 'react';
import {HiOutlineMenu} from "react-icons/hi";
import {MdOutlineClose} from "react-icons/md";
import {BsSunFill} from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { TbAccessPoint } from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa";
import LogoTM from '../../assets/logo_tmaisaigon.jpg';



function Navbar(props) {
    const {isMobile} = props;
    const [openMenu, setOpenMenu] = useState(false);
    
    const handleMenu = () => { 
        setOpenMenu(!openMenu)
    }
    
    const [activeLink, setActiveLink] = useState(window.location.pathname);

    useEffect(() => {
        const handleLinkClick = (event) => {
          const targetLink = event.target.getAttribute("href");
          setActiveLink(targetLink);
        };
    
        const navLinks = document.querySelectorAll(".nav-desk a");
        navLinks.forEach((link) => {
          link.addEventListener("click", handleLinkClick);
        });
      }, []);

    return (
            <div>
                {isMobile ? (
                    <div className='flex fixed top-0 right-0 left-0 items-center justify-center bg-navbar h-16 z-20'>
                        <div className='mr-auto pl-3 pr-8'>                          
                            {openMenu ? (
                            <div className="fixed bottom-0 top-0 left-0  text-white h-full w-[87%] bg-asidebar text-start text-13">
                                <ul className='items-center font-semibold'>  
                                    <li className="cursor-pointer m-[10px] flex justify-center items-center"><img src={LogoTM} alt="" className=''/></li>
                                    <li className="asidebar"><a href="/" exact>Trang chủ</a></li>
                                    <li className="asidebar"><a href="/business">Lĩnh vực kinh doanh</a></li>
                                    <li className="asidebar"><a href="/events">Tổ chức sự kiện</a></li>
                                    <li className="asidebar"><a href="/activities" >Hoạt động</a></li>
                                    <li className="asidebar"><a href="/contact">Liên hệ</a></li>
                                    <li className='asidebar flex gap-2'>Ngôn ngữ<FaEarthAmericas size={"24px"} className=''/></li>
                                    <MdOutlineClose size={"38px"} color='' 
                                    className='absolute right-0 top-0 bg-emerald-300' onClick={handleMenu}/>
                    
                                    <ul className='asidebar'>
                                        <li className='child-asidebar'>
                                            <IoLocationSharp size={"24px"}/>
                                            <span>HM Town, 412 Nguyễn Thị Minh Khai, P. 5, Quận 3, TPHCM</span>
                                        </li>
                                        <li className='child-asidebar'>
                                            <FaPhoneVolume size={"24px"} />
                                            <span>086.995.7420 - 0901.472.160</span>
                                        </li>
                                        <li className='child-asidebar'>
                                            <IoMdMail size={"24px"} />
                                            <span>ngaymoisaigon@gmail.com; tmaisaigon@ngaymoisaigon.com</span>
                                        </li>
                                        <li className='child-asidebar'>
                                            <TbAccessPoint size={"24px"} />
                                            <span>http://tmaisaigon.vn/</span>
                                        </li>
                                    </ul>
                                </ul>  
                            </div> 
                            ) : (
                                <HiOutlineMenu size={"24px"} color="darkorange" className='cursor-pointer' onClick={handleMenu}/>
                            )
                        }                                                                              
                        </div>
                        <div>
                            <img src={LogoTM} alt="" className='h-12 w-32' />  
                        </div>
                        <div className='ml-auto flex pr-3 gap-4'>
                            <BsSunFill size={"24px"} color="#ffff00" />
                            <GoSearch size={"24px"} color="darkorange" />  
                        </div>      
                    </div>           
                ) : (
                    // LAPTOP
        
                        <div className='flex fixed top-0 right-0 left-0 items-center justify-center gap-48 w-full h-24 bg-navbar text-white z-20'>
                            <div className='LOGO p-4'>
                                <img src={LogoTM} alt="" />
                            </div>

                            <div className='h-full NAVIGATION flex text-center items-center justify-center'>       
                                <ul className='h-full flex text-center items-center justify-center mr-[200px] gap-10 font-semibold whitespace-nowrap'>                          
                                    <li className={`nav-desk ${activeLink === "/" ? "active" : ""}`}><a href="/">Trang chủ</a></li>
                                    <li className='nav-desk'><a href="/business">Lĩnh vực kinh doanh</a></li>
                                    <li className='nav-desk'><a href="/events" className='nav'>Tổ chức sự kiện</a></li>
                                    <li className='nav-desk'><a href="/activities">Hoạt động</a></li>
                                    <li className='nav-desk'><a href="/contact">Liên hệ</a></li>
                                    <li className='nav-desk gap-1.5'>Ngôn ngữ <FaEarthAmericas size={"24px"} /></li>                       
                                </ul>   
                            </div>
                            
                            <div className='flex items-center'>
                                <GoSearch className='' size={24}/>                         
                            </div>
                        </div>       
                )}
            </div>
        )
    }
export default Navbar;