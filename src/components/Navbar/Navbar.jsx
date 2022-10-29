import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import './Navbar.scss'
import { useState } from 'react'
import logo from '../../assets/logo.svg'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
  const[close,setClose] = useState(false)
  const toggleIcon = () => {
    //? Ternery function
    setClose(!close)
  }
  return (

    //? NAVBAR
   <nav className='bg-[#222222] m-auto pt-2 text-[#e6fafc] flex justify-between items-center mr-5' name='home' id='home' >
    <img src={logo} alt="Logo"  className='w-[120px] px-4 '/>
    <div className='hidden md:flex justify-between items-center'>
      <ul className='capitalize flex '>
        {['home','about','skills','projects','blog','contact me'].map((item) => (
          <li className='px-3 cursor-pointer' >
            <Link to={item} smooth={true} duration={500} >
          {item} 
          </Link>
        </li>
        ))}
      </ul>
    </div>

    {/* //? MenuIcon/Close Icon */}
    <div className='block md:hidden' onClick={toggleIcon} >
      {close ? <AiOutlineClose className='ease-in-out duration-300' /> : <AiOutlineMenu className='ease-in-out duration-300' />}
    </div>
    
    {/* //? Sidebar */}
    <div className={close ? ' md:hidden ease-in-out duration-500 absolute left-0 top-0 pt-[25vh] pl-[15vw] border-r-[1px] border-r-[#2e2e2e] w-[50vw] h-[100vh] ' : 'fixed left-[100%]'}>

      <img src={logo} alt="Logo" className={close ? ' ease-in-out duration-500 w-[100px] absolute top-[4vh] left-[10vw]': 'fixed left-[100%]' }/>

      <ul className='capitalize  '>
      {['home','about','skills','projects','blog','contact me'].map((item) => (
          <li className='py-4  cursor-pointer' >
            <Link to={item} smooth={true} duration={500} >
              {item}
            </Link>
          </li>
        ))}
      </ul>

    </div>

    {/* //? SOCIAL ICONS */}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul className='flex flex-col'>
        {[<FaLinkedin size='25px' className='bg-[#0077b5] text-white'/>].map((item) => (
          <li className='py-2 px-4 w-[160px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]'>
            <a href="" className='font-bold flex justify-around text-grey items-center w-full bg-[#0077b5] '>LinkedIn {item}</a>
          </li>
        ))}

        {[<FaGithub size='25px' className='bg-[#333333] text-white ml-3'/>].map((item) => (
          <li className='py-2 px-4 w-[160px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a href="" className='font-bold flex justify-around text-grey items-center w-full bg-[#333333]  '>GitHub {item}</a>
          </li>
        ))}

        {[<HiOutlineMail size='25px' className='bg-[#6fc2b0] text-white ml-7'/>].map((item) => (
          <li className='py-2 px-4 w-[160px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a href="" className='font-bold flex justify-around text-grey items-center w-full bg-[#6fc2b0]  '>Email {item}</a>
          </li>
        ))}

        {[<BsFillPersonLinesFill size='25px' className='bg-[#565f69] text-white ml-3'/>].map((item) => (
          <li className='py-2 px-4 w-[160px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a href="" className='font-bold flex justify-around text-grey items-center w-full bg-[#565f69]  '>Resume {item}</a>
          </li>
        ))}
      </ul>
    </div>


   </nav>
  )
}

export default Navbar