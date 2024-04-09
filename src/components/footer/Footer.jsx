import React from 'react'
import { Link } from 'react-router-dom';

import logo from "./logo.png";
import map from "./map.png";
import instagram from "./Instagram.png";
import facebook from "./facebook.png";
import linkedin from "./linkedin.png";
import twitter from "./twitter.png";

const Footer = () => {
  return (
    <div className="bg-evolvisFooterDark flex flex-col gap-5 px-24 py-8 text-white mt-5">

        {/* links */}

        <div className="flex gap-5 ">
            {/* logo */}
            <img src={logo} alt="logo" className="w-[85px] h-[85px] relative top-10" />
            {/* Quick links */}
            <div className="w-1/5 flex flex-col gap-3 self-start">
                <h2>Quick Links</h2>
                <Link to="profile" className='font-extralight text-sm' >Company profile</Link>
                <Link to="brandkit" className='font-extralight text-sm'>Brandkit</Link>
                <Link to="ratecard" className='font-extralight text-sm'>Rate card</Link>
                <Link to="announcements" className='font-extralight text-sm'>Announcements</Link>
            </div>
            {/* Stay in touch */}
            <div className="w-1/5 flex flex-col gap-3 self-start">
            <h2>Stay in touch</h2>
                <p className='font-extralight text-sm' >+250 787 335 761</p>
                <p className='font-extralight text-sm' >PO Box 1447 Kigali</p>
                <p className='font-extralight text-sm' >info@evolvis.rw</p>
                <p className='font-extralight text-sm' >www.evolvis.rw</p>
            </div>
            {/* Address */}
            <div className="w-1/5 flex flex-col gap-3 self-start">
                <h2>Address</h2>
                <p className='font-extralight text-sm' >Centre Saint Paul KN 32 St</p>
                <p className='font-extralight text-sm' >Green Corner Plaza KN 20 St</p>
            </div>


            {/* Map */}

            <img src={map} alt="map" className='w-[400px] self-start' />
        </div>

        {/* Copyright & social media */}
        <div className="flex gap-[0.4rem] relative top-3">
            <p className='text-xs relative top-[6px]'>&copy;  2023 Evolvis. All rights reserved </p>

            <div className="h-[1px] relative top-[17px] bg-evolvisGray w-[67%]"></div>

            {/* social media */}

            <div className="flex gap-5">
            <img src={instagram} alt="logo" className="w-[25px]" />
            <img src={facebook} alt="logo" className="w-[25px]" />
            <img src={linkedin} alt="logo" className="w-[25px]" />
            <img src={twitter} alt="logo" className="w-[25px]" />


            </div>
        </div>


    </div>
  )
}

export default Footer