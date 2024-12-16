import React from 'react'
import Card from '../card/Card'
import "./Projects.css"
import va from "../../assets/images/va.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Projects() {

  useGSAP(()=>{
    gsap.from("#para",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"#para",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 20%"
      }
    })
    gsap.from(".slider",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        scroll:"body",
        scrub:2,
        start:"top 70%",
        end:"top 20%"
      }
    })
  })
  return (
    <div id="projects">
        <h1 id="para">1+ YEARS EXPERIENCED IN PROJECTS</h1>
        <div className="slider">
            <Card title="CHATBOT" image={va}></Card>
            <Card title="TEXT EDITOR" image={va}></Card>
            <Card title="WEB NGO" image={va}></Card>
            <Card title="SCHOOL MANAGMENT" image={va}></Card>
            <Card title="Font_detector-Extension" image={va}></Card>
        </div>
    </div>
  )
}

export default Projects
