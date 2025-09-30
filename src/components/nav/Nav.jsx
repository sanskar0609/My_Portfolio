import "./Nav.css"
import React, { useRef } from 'react'
import{Link} from "react-scroll"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
function Nav() {
    let menu=useRef()
    let mobile1=useRef()
    useGSAP(()=>{
        let t1=gsap.timeline()
        t1.from("nav h1",{
            y:-100,
            duration:1,
            opacity:0
        }),
        t1.from("nav ul li",{
            y:-100,
            duration:1,
            opacity:0,
            stagger:1
        })
        
    })
  return (
    <nav>
        <h1>PORTFOLIO</h1>
        <ul className="desktop">
            <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
            <Link to="about" activeClass='active' spy={true} smooth={true} duration={500}><li>about</li></Link>
            <Link to="projects" activeClass='active' spy={true} smooth={true} duration={500}><li>project</li></Link>
            {/* <Link to="dokergithub"  activeClass='active' spy={true} smooth={true} duration={500}><li>docker-Github</li></Link> */}
            <Link to="contact"  activeClass='active' spy={true} smooth={true} duration={500}><li>contact</li></Link>
            
        </ul>

        <div className="hamburg" ref={menu} onClick={()=>
            {
                mobile1.current.classList.toggle("activemobile")
                menu.current.classList.toggle("activeham")
            }
        }>
            <div className="ham"></div>
            <div className="ham"></div>
            <div className="ham "></div>

        </div>
        <ul className="mobile" ref={mobile1}>
            <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
            <Link to="about" activeClass='active' spy={true} smooth={true} duration={500}><li>about</li></Link>
            <Link to="projects" activeClass='active' spy={true} smooth={true} duration={500}><li>project</li></Link>
            {/* <Link to="dokergithub"  activeClass='active' spy={true} smooth={true} duration={500}><li>docker-Github</li></Link> */}
            <Link to="contact"  activeClass='active' spy={true} smooth={true} duration={500}><li>contact</li></Link>
            
        </ul>
    </nav>
  )
}

export default Nav
