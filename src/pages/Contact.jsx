import React from 'react'

function Contact(props) {
  const {isMobile} = props;

  return (
    <section className='font-opensans mt-[64px]'>
      {isMobile ? (
        <div>
        <div className='bg-[#eee] text-[16px] text-center py-[5px] font-bold'>Liên hệ</div>
        <div className=' text-center text-[32px] text-[#009b77] font-betasemibold mt-[16px]'>Liên hệ</div>
        <div className='p-4'>
          <strong className='pb-2 text-[#34568B] '>TMAI Sài Gòn</strong>
          <p className=' pb-1'>Địa chỉ: HM Town, 412 Nguyễn Thị Minh Khai, P. 5, Quận 3, TPHCM</p>
          <p className='pb-1'>Email: ngaymoisaigon@gmail.com; tmaisaigon@ngaymoisaigon.com</p>
          <p className=' pb-1'>Hotline: 086.995.7420 - 0901.472.160</p>
          <p className='pb-1'>Website: ngaymoisaigon.com - ngaymoisaigon.vn</p>
        </div>
        <div className='grid grid-cols-2 gird-rows-4 mt-8 p-4 gap-2'>
          <input type="text" placeholder='Họ và tên' size='40' className='contact-i'/>
          <input type="text" placeholder='Số điện thoại' className='contact-i'/>
          <input type="text" placeholder='Địa chỉ' className='contact-i'/>
          <input type="text" placeholder='Email' className='contact-i'/>
          <input type="text" placeholder='Chủ đề' className='col-span-2 contact-i'/>
          <textarea type="textera" placeholder='Nội dung' cols='40' rows='10' className='col-span-2 contact-i'/>
         
        </div>
        <button className='mx-[16px] px-2 bg-darkorange text-white uppercase font-semibold rounded '>Đăng ký ngay</button>
        </div>
      ): (

        // Laptop
        <div className='mt-[92px]'>
        <div className='bg-[#eee] text-[18px] text-start py-[5px] font-bold'><span className='ml-[130px]'>Liên hệ</span></div>
        <div className=' text-center text-[32px] text-[#009b77] font-betasemibold mt-[16px]'>Liên hệ</div>
        
        <section className='flex gap-[200px]'>
        <div className='pt-4 px-[130px]'>
          <strong className='mb-5 text-[#34568B] '>TMAI Sài Gòn</strong>
          <p className='mb-2.5'>Địa chỉ: HM Town, 412 Nguyễn Thị Minh Khai, P. 5, Quận 3, TPHCM</p>
          <p className='mb-2.5'>Email: ngaymoisaigon@gmail.com; tmaisaigon@ngaymoisaigon.com</p>
          <p className='mb-2.5'>Hotline: 086.995.7420 - 0901.472.160</p>
          <p className='mb-2.5'>Website: ngaymoisaigon.com - ngaymoisaigon.vn</p>
        </div>
        <form className='grid grid-cols-2 gird-rows-4 p-4 gap-2 float-left'>
          <input type="text" placeholder='Họ và tên' size='40' className='contact-i'/>
          <input type="text" placeholder='Số điện thoại' className='contact-i'/>
          <input type="text" placeholder='Địa chỉ' className='contact-i'/>
          <input type="text" placeholder='Email' className='contact-i'/>
          <input type="text" placeholder='Chủ đề' className='col-span-2 contact-i'/>
          <textarea type="textera" placeholder='Nội dung' cols='40' rows='10' className='col-span-2 contact-i'/> 
          <button className='mx-[40px] px-2 bg-darkorange text-white uppercase font-semibold rounded '>Đăng ký ngay</button>  
        </form>
        </section>
        
        </div>
      )}    
    </section>
  )
}

export default Contact