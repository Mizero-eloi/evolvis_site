import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import lap2 from './lap2.png';
import lap1 from './lap1.png';
import Quote from './Group.png';

const Portfolio = () => {
  return (
    <div>
        <Navbar />
        <div>
        <div className="text-center  py-10 flex gap-6 flex-col w-[45%] m-auto">
      <h2 className='text-evolvisPink text-4xl font-semibold'>
        Portfolio
      </h2>

      <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur. Sed id ideas ades pharetra enim in. Blandit sit nulla quis eu scelerisque.</p>

    </div>

    <div className="flex flex-col gap-5">
        <div className="flex gap-4 px-24 ">
            <div className="bg-blue-500 w-[50%] flex justify-between p-[3em]">

                {/* description */}
                <div className="flex flex-col gap-5 text-white w-1/2">
                    <h2 className='font-semibold w-[20%]'>
                    RSE Investment Clinic
                    </h2>
                    <p className='w-[79%]'>The platform for scaling up Rwandan SMEs and 
other corporates</p>
                </div>

                {/* images */}
                <div className='w-1/2 relative'>
                    <img src={lap1} alt="lap1" className='absolute right-[1.5em] z-10 top-[0.33em]'  />
                    <img src={lap2} alt="lap1" className='absolute top-[4.7em] right-[-2.5em]' />
                </div>
                
            </div>
            <div className="bg-orange-500 w-[50%] flex justify-between p-[3em]">

                {/* description */}
                <div className="flex flex-col gap-5 text-white w-1/2">
                    <h2 className='font-semibold w-[20%]'>
                    RSE Investment Clinic
                    </h2>
                    <p className='w-[79%]'>The platform for scaling up Rwandan SMEs and 
other corporates</p>
                </div>

                {/* images */}
                <div className='w-1/2 relative'>
                    <img src={lap1} alt="lap1" className='absolute right-[1.5em] z-10 top-[0.33em]'  />
                    <img src={lap2} alt="lap1" className='absolute top-[4.7em] right-[-2.5em]' />
                </div>
                
            </div>
        </div>
        <div className="flex gap-4 px-24 ">
            <div className="bg-blue-500 w-[50%] flex justify-between p-[3em]">

                {/* description */}
                <div className="flex flex-col gap-5 text-white w-1/2">
                    <h2 className='font-semibold w-[20%]'>
                    RSE Investment Clinic
                    </h2>
                    <p className='w-[79%]'>The platform for scaling up Rwandan SMEs and 
other corporates</p>
                </div>

                {/* images */}
                <div className='w-1/2 relative'>
                    <img src={lap1} alt="lap1" className='absolute right-[1.5em] z-10 top-[0.33em]'  />
                    <img src={lap2} alt="lap1" className='absolute top-[4.7em] right-[-2.5em]' />
                </div>
                
            </div>
            <div className="bg-orange-500 w-[50%] flex justify-between p-[3em]">

                {/* description */}
                <div className="flex flex-col gap-5 text-white w-1/2">
                    <h2 className='font-semibold w-[20%]'>
                    RSE Investment Clinic
                    </h2>
                    <p className='w-[79%]'>The platform for scaling up Rwandan SMEs and 
other corporates</p>
                </div>

                {/* images */}
                <div className='w-1/2 relative'>
                    <img src={lap1} alt="lap1" className='absolute right-[1.5em] z-10 top-[0.33em]'  />
                    <img src={lap2} alt="lap1" className='absolute top-[4.7em] right-[-2.5em]' />
                </div>
                
            </div>
        </div>
    </div>

    <div className='py-10 relative'>
        <img src={Quote} alt="quote" className="m-auto" />
        <h2 className="absolute top-[2.5em] left-[32%] font-semibold text-gray-700 text-3xl">“Hear from what our clients say”</h2>
      </div>

        </div>
        <Footer />
    </div>
  )
}

export default Portfolio