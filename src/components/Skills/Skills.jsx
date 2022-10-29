import React from 'react'

import HTML from '../../assets/HTML.png'
import CSS from '../../assets/CSS.png'
import Javascipt from '../../assets/Javascript.png'
import Cplus from '../../assets/C++.png'
import Python from '../../assets/Python.png'
import Postgres from '../../assets/Postgresql.png'
import ReactIcon from '../../assets/React.png'
import NodeJs from '../../assets/NodeJs.png'
import GitHub from '../../assets/GitHub.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen text-[#e6fafc] '>

        {/* //? Containers */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div className=''>
                <p className='text-4xl inline font-extrabold border-b-4 border-[#f7b2ad]'>Skills</p>
                <p className='py-4 text-1xl '>//These are the technologies I've worked with</p>
            </div>

            <div className='grid grid-cols-2 w-full sm:grid-cols-4 text-center py-8 gap-8 '>

                <div className='shadow-md shadow-[#040c16] hover:rotate-180 group duration-300'>
                    <img src={HTML} alt="HTML icon" className='w-20 mx-auto group-hover:-rotate-180 '/>
                    <p className='group-hover:-rotate-180 my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:rotate-180 group duration-300'>
                    <img src={CSS} alt="HTML icon" className='w-20 mx-auto group-hover:-rotate-180 '/>
                    <p className='group-hover:-rotate-180 my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:rotate-180 group duration-300'>
                    <img src={Javascipt} alt="HTML icon" className='w-20 mx-auto group-hover:-rotate-180 '/>
                    <p className='group-hover:-rotate-180 my-4'>JAVASCRIPT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:rotate-180 group duration-300'>
                    <img src={Python} alt="HTML icon" className='w-20 mx-auto group-hover:-rotate-180 '/>
                    <p className='group-hover:-rotate-180 my-4'>PYTHON</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:rotate-180 group duration-300'>
                    <img src={Postgres} alt="HTML icon" className='w-20 mx-auto group-hover:-rotate-180 '/>
                    <p className='group-hover:-rotate-180 my-4'>POSTGRESQL</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:rotate-180 group duration-300'>
                    <img src={ReactIcon} alt="HTML icon" className='w-20 mx-auto group-hover:-rotate-180 '/>
                    <p className='group-hover:-rotate-180 my-4'>REACT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:rotate-180 group duration-300'>
                    <img src={NodeJs} alt="HTML icon" className='w-20 mx-auto group-hover:-rotate-180 '/>
                    <p className='group-hover:-rotate-180 my-4'>NODE JS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:rotate-180 group duration-300'>
                    <img src={GitHub} alt="HTML icon" className='w-20 mx-auto group-hover:-rotate-180 '/>
                    <p className='group-hover:-rotate-180 my-4'>GITHUB</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills