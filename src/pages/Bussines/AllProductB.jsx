import React from 'react'
import iProTypeB from '../../DataJson/iProductinvest/typeB.json'

function AllProductB() {
    

    return (
        
        <div className=''>
            {/* Items type 2 */}
            <div className='text-center px-2'>
                <span className='head-content text-hcontent'>Sản phẩm hợp tác - dự án sách</span>    
            </div>
       
       
            <div className='flex flex-wrap items-center justify-center text-center gap-8 mt-[16px]'>
                {iProTypeB.map((iP) => (
                    <div className='bg-transparent cursor-pointer group perspective'>
                        <div
                        class="preserve-3d group-hover:my-rotate-y-180  duration-1000"
                       >
                        {/* phía trước */}
                        <div className='backface-hidden relative
                            border-box border-4 rounded-lg shadow-2xl shadow-indigo-500/40 p-6
                            max-w-[250px] min-h-[420px] italic'>
                        <img src={iP.img} alt={iP.altText}/>  
                        <p className='mt-2'>{iP.des}</p> 
                        <span>Xuất bản mỗi năm</span>                       
                        </div>
                        {/* phía sau */}
                        <div
                            class="absolute top-0 left-0 right-0 my-rotate-y-180 backface-hidden w-full h-full  bg-gray-100
                            border-box border-4 rounded-lg shadow-2xl shadow-indigo-500/40
                             "
                        >          
                            <div className='text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24'>               
                                <p>
                                    {iP.detail}
                                </p>
                            </div>  
                        </div>                    
                    </div>  
                    </div> 
                ))}
            </div>
        </div>
  )
}

export default AllProductB

