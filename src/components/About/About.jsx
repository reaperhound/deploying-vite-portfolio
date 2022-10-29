import React from 'react'

const About = () => {
  return (
    <div name='about' id='about' className='w-full h-screen text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8 '>
                <div className='sm:text-right pb-8 pl-4 '>
                    <p className='inline text-4xl font-bold border-b-4 border-b-[#f7b2ad]'>
                        About
                    </p>
                </div>
                <div> 

                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='text-4xl font-semibold sm:text-right  '>
                        <p>
                            Hi, I'm Ajmal nice to meet you please take a look
                        </p>
                    </div>
                    <div>
                        <p>
                            I am passionate about building excellent software that improves
                            the lives of thoese around me. I specialize in creating software
                            for clients ranging from individuals and amall-businesses all the
                            way to large enterprise corporations. What would you do if you had
                            a software expert available at your fingertips.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About