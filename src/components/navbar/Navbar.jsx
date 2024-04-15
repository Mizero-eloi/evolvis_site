import React from 'react'
import Logo from "./Vector.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='border-b  px-24 py-8 flex justify-between'>

      {/* logo  */}
      <img src={Logo} alt="logo" className='w-[15%] h-[15%]' />
      {/* Nav links */}

      <div className="flex gap-10  items-center">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/Techhub">Techhub</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/Our_team">Our Team</Link>

        <Link to="/contact_us" className='px-16  py-2 bg-evolvisPink rounded-lg text-white'>Contact us</Link>
        

      </div>

    </div>
  )
}

export default Navbar