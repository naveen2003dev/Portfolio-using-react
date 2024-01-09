import React from 'react'
import Avatar from '../assets/avatar.jpeg'
import {MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="Home" className="h-screen w-full bg-gradient-to-b from-slate-950 via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pt-10 md:flex-row">
            <div >
                <h2 className="text-white text-5xl sm:text-7xl font-bold">Hello 👋 I'm <br />Naveen Bhadouria</h2><br />
                <p className="text-white font-medium max-w-md">Hi, I’m an aspiring web developer with a keen interest in creating and maintaining websites. I have a background in computer science and I have been learning web development through online courses, books, and tutorials.</p>

                <div className="my-3">
                <a href="/resume.pdf" target='_blank'> <button className=" group text-white text-2xl flex items-center pl-2 w-fit rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                        Resume <span className=" group-hover:rotate-90 duration-300"><MdKeyboardArrowRight/></span>
                    </button>
                    </a>
                </div>
            </div>

            <div className="w-96">
                <img src={Avatar} alt="myprofile" className=" rounded-full mx-auto md:w-full justify-center items-center" style={{height:"90%"}} />
            </div>
        </div>
    </div>
  )
}

export default Home