import React from 'react';
import iProTypeA from '../../DataJson/iProductinvest/typeA.json';
import iProTypeB from '../../DataJson/iProductinvest/typeB.json';


function Productinvest(props) {

  const {isMobile} = props

  return (
   <div> 
      {isMobile ? (
        <section>

      <div className='text-center px-2'>
      <span className='head-content text-hcontent'>Sản phẩm đầu tư nổi bật</span>    
      </div>
      <div className='grid grid-cols-1 grid-rows-1 text-center text-[14px] italic items-center justify-center justify-items-center gap-[30px] mt-6'>
          <a href={iProTypeA[0].link}>
          <div className='border-box border-4 rounded-lg shadow-2xl shadow-indigo-500/40 p-6 text-center items-center justify-center justify-items-center'>
          <img src={iProTypeA[0].img} alt="tap chi" className=''/>

            <p className='mt-2'>{iProTypeA[0].title}</p>
            <span>{iProTypeA[0].year}</span>

          </div>
          </a>
      
             <div className='bg-transparent cursor-pointer group perspective'>
                        <div
                        class="preserve-3d group-hover:my-rotate-y-180  duration-1000"
                       >
                        {/* phía trước */}
                        <div className='backface-hidden relative
                            border-box border-4 rounded-lg shadow-2xl shadow-indigo-500/40 p-6
                            max-w-[250px] italic'>
                        <img src={iProTypeB[0].img} alt={iProTypeB[0].altText}/>  
                        <p className='mt-2'>{iProTypeB[0].des}</p> 
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
                                    {iProTypeB[0].detail}
                                </p>
                            </div>  
                        </div>                    
                    </div>
            </div>  
      </div>
      </section>      
      ) : (
        // lAPtop
        <div>
          <div className='text-center px-2'>
              <span className='head-content text-hcontent'>Sản phẩm đầu tư nổi bật</span>  
              <div className='grid grid-cols-4 grid-rows-2 text-center text-[14px] italic items-center justify-center justify-items-center gap-[30px] mt-6'>
            {iProTypeA.slice(0,4).map((iPa) => (
              <a href={iPa.link}>
              <div className='border-box border-4 rounded-lg shadow-2xl shadow-indigo-500/40 p-6 text-center items-center justify-center justify-items-center'>

                <img src={iPa.img} alt="tap chi" className=''/>
                  <p className='mt-2'>{iPa.title}</p>
                  <span>{iPa.year}</span>
              </div>
              </a>
            ))}

            {iProTypeB.map((iP) => (
                    <div className='bg-transparent cursor-pointer group perspective'>
                        <div
                        class="preserve-3d group-hover:my-rotate-y-180  duration-1000"
                       >
                        {/* phía trước */}
                        <div className='backface-hidden relative
                            border-box border-4 rounded-lg shadow-2xl shadow-indigo-500/40 p-6
                            max-w-[250px] min-h-[340px] italic'>
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
        </div>
      )}    
    </div>
  )
}

export default Productinvest