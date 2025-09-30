import { useState } from 'react'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Dockergithub from './components/docker-github/Dockergithub'
import AllProject from './components/projects/AllProjects'

function App() {
  

  return (
    <>
      <Nav></Nav>
      <Home></Home>
      <About></About>    
      <AllProject></AllProject>
      {/* <Projects></Projects>  */}
      {/* <Dockergithub></Dockergithub> */}
      <Contact></Contact>
          
    </>
  )
}

export default App
