import { useState } from 'react'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {
  

  return (
    <>
      <Nav></Nav>
      <Home></Home>
      <About></About>    
      <Projects></Projects> 
      <Contact></Contact>
          
    </>
  )
}

export default App
