import React from 'react'
import Card from '../card/Card'
import "./Projects.css"
import va from "../../assets/images/va.png"
import clg from "../../assets/images/clg.jpg"
import chatbot from "../../assets/images/chatbot.jpg"
import webngo from "../../assets/images/webngp.jpg"
import mycafe from "../../assets/images/mycafe.jpg"
import school from "../../assets/images/school.jpg"
import ext from "../../assets/images/fontext.jpg"
import txteditor from "../../assets/images/texteditor.jpg"
import email from '../../assets/images/email.png'
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
            <Card title="Ai-Email extension" image={email} url="https://github.com/sanskar0609/AI-Email-Reply/tree/main"></Card>
           <Card title="College Predictor" image={clg} url="http://collegepredictor.infinityfreeapp.com/"/>
          
            <Card title="CHATBOT" image={chatbot} url="https://sanskar0609.github.io/chatbot/"></Card>
            <a href="https://drive.google.com/file/d/1LTMVoQmkpd-dR5RPqDHP1ZM8s-DZSE_Q/view?usp=drive_link" download>
            <Card title="Cafe Managment" image={mycafe}></Card></a>
            <Card title="WEB NGO" image={webngo} url="https://sanskar0609.github.io/WEB_NGO/"></Card>
            <Card title="SCHOOL MANAGMENT" image={school} url="https://github.com/sanskar0609/school-managment-java"></Card>

            <Card title="Font_detector-Extension" image={ext} url="https://font-detector-extension.netlify.app/"></Card>
            <Card title="TEXT EDITOR" image={txteditor} url="https://github.com/sanskar0609/text-editor"></Card>
        </div>
    </div>
  )
}

export default Projects
