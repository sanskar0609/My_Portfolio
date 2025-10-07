import { useState } from 'react'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Certificates from "./components/Certificate_section/Certificates";
import Contact from './components/contact/Contact'
import Dockergithub from './components/docker-github/Dockergithub'
import AllProject from './components/projects/AllProjects'
import DashBoard from './components/dashboard/DashBoard'
import Info from './components/heading/Info'
import ProfileBadges from './components/profile/ProfileBadges'
import ExperienceSection from './components/Experience/ExperienceSection'
import Gap from './components/profile/Gap'

function App() {
  

  return (
    <div>
      <Nav />
      <Home />
      <About />    
      <AllProject />
      <Certificates></Certificates>
      <ProfileBadges/>
      <Gap/>
      <ExperienceSection/>
      {/* <Info/> */}
      {/* <Projects />  */}
      {/* <Dockergithub /> */}
      <Contact />
    </div>
  )
}

export default App
