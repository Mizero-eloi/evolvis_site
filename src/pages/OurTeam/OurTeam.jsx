import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import second from "./second.png"
import second2 from "./second2.png"
import second3 from "./second3.png"
import second4 from "./second4.png"
import Quote from './Group.png'

const OurTeam = () => {
  return (
    <div>
        <Navbar />
        {/* team */}
        <div className='flex flex-col gap-6'>
        <h2 className='text-evolvisPink text-4xl font-semibold text-center mt-7'>
        Our Team
      </h2>

      <p className='text-gray-700 text-center w-[48%] m-auto'>Lorem ipsum dolor sit amet consectetur. Sed id ideas ades pharetra enim in. Blandit sit nulla quis eu scelerisque.</p>

      {/* Images */}
      <div className="flex flex-wrap  gap-5 py-24 px-24 justify-center">


        <div className="w-[20%] flex flex-col items-center">
        <img src={second} alt="second"  />
        <h2 className="font-semibold text-gray-700">Muhiza Frank</h2>
        <p className="text-evolvisPink">Chief Executive Officer</p>
        </div>

        <div className="w-[20%] flex flex-col items-center">
        <img src={second2} alt="second" />
        <h2 className="font-semibold text-gray-700">Muhiza Frank</h2>
        <p className="text-evolvisPink">Chief Executive Officer</p>
        </div>


        <div className="w-[20%] flex flex-col items-center">

        <img src={second3} alt="second" />
        <h2 className="font-semibold text-gray-700">Muhiza Frank</h2>
        <p className="text-evolvisPink">Chief Executive Officer</p>

        </div>

        <div className="w-[20%] flex flex-col items-center">
        <img src={second4} alt="second" />
        <h2 className="font-semibold text-gray-700">Muhiza Frank</h2>
        <p className="text-evolvisPink">Chief Executive Officer</p>

        </div>



      </div>
      {/* Images */}
      <div className="flex flex-wrap  gap-5 px-24 justify-center">


        <div className="w-[20%] flex flex-col items-center">
        <img src={second} alt="second"  />
        <h2 className="font-semibold text-gray-700">Muhiza Frank</h2>
        <p className="text-evolvisPink">Chief Executive Officer</p>
        </div>

        <div className="w-[20%] flex flex-col items-center">
        <img src={second2} alt="second" />
        <h2 className="font-semibold text-gray-700">Muhiza Frank</h2>
        <p className="text-evolvisPink">Chief Executive Officer</p>
        </div>


        <div className="w-[20%] flex flex-col items-center">

        <img src={second3} alt="second" />
        <h2 className="font-semibold text-gray-700">Muhiza Frank</h2>
        <p className="text-evolvisPink">Chief Executive Officer</p>

        </div>

        <div className="w-[20%] flex flex-col items-center">
        <img src={second4} alt="second" />
        <h2 className="font-semibold text-gray-700">Muhiza Frank</h2>
        <p className="text-evolvisPink">Chief Executive Officer</p>

        </div>



      </div>


      {/* Quote */}

      <div className='py-10 relative'>
        <img src={Quote} alt="quote" className="m-auto" />
        <h2 className="absolute top-[2.5em] left-[32%] font-semibold text-gray-700 text-3xl">“None of us is as smart as all of us”</h2>
      </div>




        </div>

        <Footer />
    </div>
  )
}

export default OurTeam