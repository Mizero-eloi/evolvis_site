import React from 'react'
import cta from './cta.png';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const ContactUs = () => {
  return (
    <div className=''>
      <Navbar/>
    <div className='flex justify-between gap-8 px-24 py-8 '>
      {/* IMAGE HOLDER */}
      <div className="w-1/2 bg-evolvisGray flex flex-col gap-5 p-16">
        <img src={cta} alt="iamge" />

        <div className="flex justify-between">
          {/* address */}
          <div className="flex flex-col">
            <h2 className='mb-3 font-semibold'>Address</h2>
            <p>Centre Saint Paul KN 32 St</p>
            <p>Green Corner Plaza KN 20 St</p>

          </div>

          {/*  Contact us */}
          <div className="flex flex-col">
            <h2 className='mb-3 font-semibold'>Contact us</h2>
            <p>+250 787 335 761</p>
            <p>PO Box 1447 Kigali</p>
          </div>
        </div>

      </div>
      {/* FORM */}
      <div className="flex flex-col gap-8 w-1/2 ">
      <h2 className='text-evolvisPink text-4xl font-semibold text-center'>
        Contact us
      </h2>
      <p className='text-gray-700 w-[84%] relative left-[10%] text-center'>
      For more information, suggestion or if you just want to slide in our DMs, don’t hesitate, they are always open. 
      </p>
      
      <form className='px-5 flex flex-col gap-7'>
        <div>
        <label htmlFor="fullName" className='w-full font-'>Full name</label>
        <input type="text" className="bg-evolvisGray border-none p-4 w-full" />
        </div>
        <div>
        <label htmlFor="fullName" className='w-full '>Email</label>
        <input type="text" className="bg-evolvisGray border-none p-4 w-full" />
        </div>
        <div>
        <label htmlFor="fullName" className='w-full '>Message</label>
        <input type="text" className="bg-evolvisGray border-none p-4 w-full" />
        </div>

        <button className='px-10  py-2 bg-evolvisPink rounded-lg text-white w-[46%] m-auto'>Send message</button>
      </form>



      </div>
    </div>
    <Footer />
    </div>
  )
}

export default ContactUs