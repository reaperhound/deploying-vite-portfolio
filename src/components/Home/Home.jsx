import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import './Home.scss'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen  '>
        
        {/* //? Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <p className='text-[#d7cf07]'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl text-[#e6fafc] font-bold mb-2 ' >Ajmal Khan</h1>
            <h2 className='text-[#837a75] text-4xl sm:text-7xl font-semibold  ' >I'm a developer</h2>
            <p className='text-[#837a75] py-4 max-w-[700px] '>I'm a software developer currently specializing on full stack applications</p>
            <div>
                <button className='text-[#e6fafc] border-2 border-[#e6fafc] py-3 px-5 flex items-center group hover:border-[#d7cf07] hover:bg-[#d7cf07] '>View Work <HiArrowNarrowRight className='ml-2 group-hover:bg-[#d7cf07] group-hover:rotate-90 duration-300' /> </button>
            </div>
        </div>
    </div>
  )
}

export default Home