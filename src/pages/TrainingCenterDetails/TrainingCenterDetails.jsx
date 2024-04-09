import React from 'react'


import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import cardImage from "./cardImage.png";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";
import image5 from "./image5.png";
import image6 from "./image6.png";
import image7 from "./image7.png";

const TrainingCenterDetails = () => {
  return (
    <>
    <Navbar />
    <div className=''>
    {/* Description */}
    <div className='flex justify-between bg-white py-10 px-24'>
        {/* Image  */}
        <img src={cardImage} alt="card_image" className='w-[40%]' />

        {/* Description */}
        <div className="w-[50%] flex flex-col gap-5 text-gray-700">
            <h2 className='text-3xl'>Lorem ipsum dolor sit amet</h2>

            <p>Lorem ipsum dolor sit amet consectetur. Et vel pellentesquerei viverra bibendum nunc. Pellentesque vitae tellus viverra vitae feugiat convallis convallis sit. Auctor risus nonesti malesuada est tellus sed facilisi. Scelerisque elit pretium suspendisse etiame curabitur elementum. Non nam feugiat ut. suspendisse. Pellentesque vitae tellus viverra vitae feugiat convallis convallis sit. Auctor risus nonesti malesuada est tellus sed facilisi. elementum. Non nam feugiat ut. suspendisse. Pellentesque vitae tellus viverra vitae feugiat convallis convallis sit. Auctor risus nonesti malesuada est tellus sed facilisi.</p>

            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
    </div>

    {/* pictures section */}

    <div className="flex flex-wrap  gap-5 bg-evolvisGray py-24 px-24">
        <img src={image1} alt="image1" className="w-[23%]" />
        <img src={image2} alt="image2" className="w-[23%]" />
        <img src={image3} alt="image3" className="w-[23%]" />
        <img src={image4} alt="image4" className="w-[23%]" />
        <img src={image5} alt="image5" className="w-[23%]" />
        <img src={image6} alt="image6" className="w-[23%]" />
        <img src={image7} alt="image7" className="w-[23%]" />



    </div>

    
    </div>
    <Footer />
    </>
  )
}

export default TrainingCenterDetails