import React from 'react'

const Contact = () => {
  return (
    <div name='contact me' className='w-full h-screen flex justify-center items-center p-4 text-[#e6fafc] '>
        
        <form method='POST' action="https://getform.io/f/751412ac-38d9-4883-952a-3afc9989c6b0" className='flex flex-col max-w-[600px] w-full items-center justify-center mx-auto'>
            <div className='pb-4  flex flex-col justify-center items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-[#f7b2ad] self-start text-gray-300 '>Contact</p>
                <p className='py-4 text-gray-300'>
                    //Submit the form below or shoot me a email - reaperhound@duck.com
                </p>
                <input className='my-5 bg-[#ccd6f6] w-full p-2 sm:w-[400px]  text-gray-700' type="text" placeholder='Name' name='name' />
                {/* //? If not entered the name property well getform.io won't work */}
                <input className='mb-5 bg-[#ccd6f6] w-full p-2 sm:w-[400px] text-gray-700' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2 w-full sm:w-[400px] text-gray-700' name="message" placeholder='Message' id="" cols="30" rows="10">

                </textarea>
                <button className='text-white border-2 hover:border-pink-600  hover:bg-pink-600 w-[120px] h-[40px] flex justify-center text-center pt-1 mt-6 mx-auto'>Let's Connect</button>
            </div>
        </form>

        {/* //? Other Social */}
        <ul>
            <li></li>
        </ul>
    </div>
  )
}

export default Contact