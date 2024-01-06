import React from 'react'

function Googlemap() {
  return (
    <div className='mt-[40px]'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5234322947776!2d106.68396060909767!3d10.771164259249556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f07b3a24645%3A0x8190331668205de4!2zVMOyYSBuaMOgIEhNIFRvd24!5e0!3m2!1svi!2s!4v1703245916214!5m2!1svi!2s" 
        width="100%" height="400" style={{ border:0 }} 
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Googlemap'>
        </iframe>
    </div>
  )
}

export default Googlemap
