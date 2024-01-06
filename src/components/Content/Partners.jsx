// import React,{useCallback, useState, useEffect, useMemo} from 'react'
// import Bigb from '../../assets/logo_partner/bigbowl.png'
// import CFC from '../../assets/logo_partner/CFC gif.gif'
// import CPh from '../../assets/logo_partner/cuong_phat.png'
// import EuroH from '../../assets/logo_partner/eurohome.png'
// import Ford from '../../assets/logo_partner/ford.png'
// import IC from '../../assets/logo_partner/ic-ambassador.png'
// import JWM from '../../assets/logo_partner/JWMARRIOTT.png'


// function Partners(autoPar = false) {
    
//     const imgPar = useMemo(() => [  
//         Bigb, CFC, CPh, EuroH, Ford, IC, JWM
//     ],[])

//     const autoParInterval = 3000
//     const [curr, setCurr] = useState(0)

//     const next = useCallback(() =>
//           setCurr((curr) => (curr === imgPar.length - 1 ? 0 : curr + 1)), [imgPar]);

//     useEffect(() => {
//         if (!autoPar) return
//         const ParInterval = setInterval(next, autoParInterval)
//         return () => clearInterval(ParInterval)
//     }, [autoPar, next, autoParInterval, imgPar])

//     return (
//         <div>
//             <div className='text-center'>
//             <span className='head-content text-hcontent'>Đối tác</span> 
//             {/* <div className='grid grid-cols-2 grid-rows-2 items-center justify-items-center'> */}
//                 <div className="">
//                     <div 
//                     className="flex transition-transform ease-out duration-500"
//                     style={{ transform: `translateX(-${curr * 100}%)` }}
//                     >
//                     {imgPar.map((i) => (
//                     <>
//                         <img src={i.img} alt={imgPar.altText}/>            
//                         </> 
//                     ))}  
//                     </div>
//                 </div>
//             {/* </div> */}           
//             </div>
//         </div>
//     )
// }

// export default Partners


// import React,{ useState, useEffect, useMemo, useCallback } from 'react'
// import Bigb from '../../assets/logo_partner/bigbowl (Custom).png'
// import CFC from '../../assets/logo_partner/CFC gif (Custom).gif'
// import CPh from '../../assets/logo_partner/cuong_phat (Custom).png'
// import EuroH from '../../assets/logo_partner/eurohome.png'
// import Ford from '../../assets/logo_partner/ford.png'
// import IC from '../../assets/logo_partner/ic-ambassador.png'
// // import JWM from '../../assets/logo_partner/JWMARRIOTT.png'

// function Partners() {
//     // const autoImgInterval = 3000
//     const imgPar = useMemo(() => [  
//                 Bigb, CFC, CPh, EuroH, Ford, IC
//             ], [])

//     const [img, setImg] = useState(imgPar());
//     const [isVisible, setIsVisible] = useState(true);
           
//     const interval = setInterval(() => {
//         setIsVisible(false);
    
//     useEffect(() => {
//         setTimeout(() => {
//             setImg(img === imgPar.slice(0,3) ? imgPar.slice(3,6) : imgPar.slice(0,3));
//                 setIsVisible(true);
//                 }, 1000); // thời gian chuyển đổi giữa hai chuỗi
          
//               }, 3000); // thời gian mỗi chu kỳ
          
//               return () => clearInterval(interval);
//             }, [imgPar]);        


//     return (
//         <div className='overflow-hidden mx-auto p-[10px]'>        
//                 {/* <div 
//                 className="flex items-center transition-transform ease-out duration-500 justify-items-center"
//                 style={{ transform: `translateX(-${curr * 100}%)` }}
//                 >
//                   {imgPar.map((s) => (
//                   <>
//                      <div><img src={s} alt={imgPar.altText}/>       
//                      </div>     
//                 </> 
//                 ))}  
//                 </div> */}
           
//                 <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
//                     {img}
//                 </div>

          
//         </div>
//     )
// }

// export default Partners

import React, { useState, useEffect, useMemo } from 'react';
import Bigb from '../../assets/logo_partner/bigbowl.png'
import CFC from '../../assets/logo_partner/CFC gif.gif'
import CPh from '../../assets/logo_partner/cuong_phat.png'
import EuroH from '../../assets/logo_partner/eurohome.png'
import Ford from '../../assets/logo_partner/ford.png'
import IC from '../../assets/logo_partner/ic-ambassador.png'
import JWM from '../../assets/logo_partner/JWMARRIOTT.png'
import Linhc from '../../assets/logo_partner/linhchi.png'
import ECHL from '../../assets/logo_partner/logo-EC-HL.png'
import LPD from '../../assets/logo_partner/LOGO-LPD.jpg'
import VTPT from '../../assets/logo_partner/logo-vtpv-min.png'
import ML from '../../assets/logo_partner/minh_long.png'
import NW from '../../assets/logo_partner/new_world.png'

// // import JWM from '../../assets/logo_partner/JWMARRIOTT.png'

function Partners(props) {
    const {isMobile} = props

    const imgPar = useMemo(() => [  
                            Bigb, CFC, CPh, EuroH, Ford, IC, JWM, Linhc, ECHL,
                            LPD, VTPT, ML, NW
                        ], [])

    // Initialize with the first set of images
    const [currImg, setCurrImg] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Set an interval for image change
        const interval = setInterval(() => {
            setIsVisible(false);

            // Change images after a certain time
            setTimeout(() => {
                setCurrImg(prevSet => (prevSet + 1) % 3
                );
                setIsVisible(true);
            }, 1000); // Time for switching sets of images

        }, 3500); // Interval for each cycle

        // Cleanup function to clear the interval
        return () => clearInterval(interval);
    }, [imgPar]);

    const displayedImages = currImg === 0 ? imgPar.slice(0, 4) :
              currImg === 1 ? imgPar.slice(4, 8) : imgPar.slice(8, 12);

    return (      
        <div>
            {isMobile ? (

            <div className='text-center'>
             
                <span className='head-content text-hcontent'>Khách hàng và đối tác của chúng tôi</span> 
        
                <div className='p-[10px] '>
                    <div className={`
                    grid grid-cols-2 grid-rows-2 items-center justify-items-center gap-2
                    transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        {displayedImages.map((imageSrc, index) => (
                        // Provide a descriptive alt text for each image
                        <img key={index} src={imageSrc} alt={`Partner logo ${index + 1}`} width={'90%'} height={'90%'} className=''/>
                            ))}
                    </div>
                </div>
            </div>
            
            ) : (
                // Laptop
                <div className='text-center'>
             
                    <span className='head-content text-hcontent'>Khách hàng và đối tác của chúng tôi</span> 
                    <div className={`
                    grid grid-cols-4 items-center justify-items-center gap-2
                    transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                      {
                        displayedImages.map((imageSrc, index) => (
                        // Provide a descriptive alt text for each image
                        <img key={index} src={imageSrc} alt={`Partner logo ${index + 1}`} width={'60%'} height={'60%'} className=''/>
                            ))}
                    </div>
                </div>
            )}

            </div>
    );
}

export default Partners;

