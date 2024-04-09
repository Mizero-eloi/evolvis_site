import React from 'react'
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar'
import CardImage from "./cardImage.png";
import courses from "./courses.png";
import Arrow from "./arrow.svg";
import Footer from '../../components/footer/Footer';

const TechHub = () => {
  return (
    <>
    {/* // navbar */}
    <Navbar />

  {/* header */}

    <div className="text-center  py-10 flex gap-6 flex-col w-[45%] m-auto">
      <h2 className='text-evolvisPink text-4xl font-semibold'>
        Our Tech Hub
      </h2>

      <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur. Sed id ideas ades pharetra enim in. Blandit sit nulla quis eu scelerisque.</p>

    </div>

    {/* Upcoming programs */}

    <div className="bg-evolvisGray  px-24 py-2 pb-14">

      {/* title  */}
      <h2 className="font-semibold text-3xl text-center py-10 text-gray-700">Upcoming programs</h2>

      <div className="flex gap-5">
      {/* Program Card */}
        <div className="bg-white rounded-lg w-1/3 flex flex-col items-center gap-6 py-3">
          <img src={CardImage} alt="cardImage" className='w-[350px] object-cover' />

          <p className='text-gray-700 text-md px-5'>
          Lorem ipsum dolor sit amet consectetur. Amet amet metus amet habitant erat nunc porta mauris. Pellentesque purus 
          </p>

          <Link to="/training_center_details" className='px-10 py-2 bg-evolvisPink rounded-lg text-white'> Register</Link>
        </div>
      {/* Program Card */}
        <div className="bg-white rounded-lg w-1/3 flex flex-col items-center gap-6 py-3">
          <img src={CardImage} alt="cardImage" className='w-[350px] object-cover' />

          <p className='text-gray-700 text-md px-5'>
          Lorem ipsum dolor sit amet consectetur. Amet amet metus amet habitant erat nunc porta mauris. Pellentesque purus 
          </p>

          <Link to="/training_center_details" className='px-10 py-2 bg-evolvisPink rounded-lg text-white'> Register</Link>
        </div>
      {/* Program Card */}
        <div className="bg-white rounded-lg w-1/3 flex flex-col items-center gap-6 py-3">
          <img src={CardImage} alt="cardImage" className='w-[350px] object-cover' />

          <p className='text-gray-700 text-md px-5'>
          Lorem ipsum dolor sit amet consectetur. Amet amet metus amet habitant erat nunc porta mauris. Pellentesque purus 
          </p>

          <Link to="/training_center_details" className='px-10 py-2 bg-evolvisPink rounded-lg text-white'> Register</Link>
        </div>









        
        </div>
   
    </div>



    {/* Past programms */}

    <div className="px-24 py-2 bg-white">

      {/* title */}
      <h2 className='font-semibold text-3xl text-gray-700 py-10'>Past programs</h2>

      <div className="flex gap-5">

      {/* past programs card */}

      <div className="bg-evolvisGray flex flex-col gap-5 py-10 px-5 w-1/4 rounded-lg">

        {/* logo */}
        <img src={courses} alt="courses" className='w-[15px]  m-auto' />

        <h2 className="font-semibold text-gray-700">2023 September Holidays coding hub at Evolvis</h2>
        <p className="font-extralight">Lorem ipsum dolor sit amet consectetur. Lectus ut quis sollicitudin congue ipsume dictumst posuere mattis.</p>

        <div className="flex gap-5 w-[85%] m-auto justify-center">
          <p className="text-center">Check out</p>
         <img src={Arrow} alt="arrow" />

        </div>




      </div>
      {/* past programs card */}

      <div className="bg-evolvisGray flex flex-col gap-5 py-10 px-5 w-1/4 rounded-lg">

        {/* logo */}
        <img src={courses} alt="courses" className='w-[15px]  m-auto' />

        <h2 className="font-semibold text-gray-700">2023 September Holidays coding hub at Evolvis</h2>
        <p className="font-extralight">Lorem ipsum dolor sit amet consectetur. Lectus ut quis sollicitudin congue ipsume dictumst posuere mattis.</p>

        <div className="flex gap-5 w-[85%] m-auto justify-center">
          <p className="text-center">Check out</p>
         <img src={Arrow} alt="arrow" />

        </div>




      </div>

    
      {/* past programs card */}

      <div className="bg-evolvisGray flex flex-col gap-5 py-10 px-5 w-1/4 rounded-lg">

        {/* logo */}
        <img src={courses} alt="courses" className='w-[15px]  m-auto' />

        <h2 className="font-semibold text-gray-700">2023 September Holidays coding hub at Evolvis</h2>
        <p className="font-extralight">Lorem ipsum dolor sit amet consectetur. Lectus ut quis sollicitudin congue ipsume dictumst posuere mattis.</p>

        <div className="flex gap-5 w-[85%] m-auto justify-center">
          <p className="text-center">Check out</p>
         <img src={Arrow} alt="arrow" />

        </div>




      </div>
      {/* past programs card */}

      <div className="bg-evolvisGray flex flex-col gap-5 py-10 px-5 w-1/4 rounded-lg">

        {/* logo */}
        <img src={courses} alt="courses" className='w-[15px]  m-auto' />

        <h2 className="font-semibold text-gray-700">2023 September Holidays coding hub at Evolvis</h2>
        <p className="font-extralight">Lorem ipsum dolor sit amet consectetur. Lectus ut quis sollicitudin congue ipsume dictumst posuere mattis.</p>

        <div className="flex gap-5 w-[85%] m-auto justify-center">
          <p className="text-center">Check out</p>
         <img src={Arrow} alt="arrow" />

        </div>




      </div>
      </div>

    </div>

    {/* footer */}
    <Footer />


    </>
  )
}

export default TechHub