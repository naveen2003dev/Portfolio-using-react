import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact Me</p>

                <p className="py-6">Submit the below form to get in touch with me</p>
            </div>

            <div className="flex justify-center items-center">

                <form action="https://getform.io/f/7c91fc14-c761-4ec9-a29b-6f442a180db6" method="POST" className="flex flex-col w-full md:w-1/2">
                    
                    <input type="text" autoComplete='name' name='Name' placeholder='Enter Your Name....' className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                    
                    <input type="text" name='Email' autoComplete='username' placeholder='Enter Your Email....' className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>

                    <textarea name="Message" placeholder="Enter Your Message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto my-8 flex items-center rounded-md hover:scale-110 duration-300">Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact