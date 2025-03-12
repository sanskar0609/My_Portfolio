import React from 'react'
import "./About.css"
import Card from '../card/Card'
import mern from "../../assets/images/vb.png"
import java from '../../assets/images/java.png'
import dsa from "../../assets/images/dsa.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function About() {

  useGSAP(()=>{
    gsap.from(".circle",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 20%"
      }
    })
    gsap.from(".line",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".line",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })
    gsap.from(".aboutdetail h1",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetail h1",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })
    gsap.from(".aboutdetail ul",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetail ul",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })
    gsap.from(".rightabout",{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".rightabout",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })
  })
  return (
   <div id="about">
       <div className="leftabout">
          <div className="circleline">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            
          </div>
          <div className="aboutdetail">
            <div className="personalinfo">
              <h1>Personal Info</h1>
              <ul>
                <li>
                  <span>Name</span>: Sontakke Sanskar
                </li>
                <li>
                  <span>Age</span>: 18 Year
                </li>
                <li>
                  <span>Gender</span>: Male
                </li>
                <li>
                  <span>Language known</span>: Marathi,Hindi,English
                </li>
              </ul>
            </div>
            <div className="education">
              <h1>Education</h1>
              <ul>
                <li>
                  <span>Degree</span>: B-Tech
                </li>
                <li>
                  <span>Branch</span>: Computer Science and Engineering
                </li>
                <li>
                  <span>College</span>: Walchand College Of Engineering
                </li>
              </ul>
            </div>
            <div className="skills">
              <h1>Skills</h1>
              <ul>
                <li>
                  <span>Languages</span>: HTML,CSS,JAVASCRIPT,PHP,JAVA,MYSQL,C,C++
                </li>
                <li>
                  <span>Tools</span>:Figma,Canva,VS Code, Github 
                </li>
                <li>
                  <span>Fundamental Of Computer Science</span>: O.S,DSA,DBMS,Computer Network
                </li>
                
              </ul>
            </div>
          </div>

       </div>
       <div className="rightabout">
        <Card title="VB.NET DEVELOPER" image={mern}></Card>
        <Card title="JAVA FULL STACK" image={java}>
        </Card>
        <Card title="DSA" image={dsa}></Card>
       </div>
   </div>
  )
}

export default About
