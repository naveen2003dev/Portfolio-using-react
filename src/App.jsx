import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Social from './Components/Social'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Skills from './Components/Skills'

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Projects></Projects>
    <Skills></Skills>
    <Contact></Contact>

    <Social></Social>
    </>
  )
}

export default App