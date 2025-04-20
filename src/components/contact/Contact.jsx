import React from 'react'
import con from '../../assets/images/contact.png'
import './Contact.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import My3dModel from '../3dmodel/My3dModels'
import DockGitCard from '../card/DockGitCard'
import Dockergithub from '../docker-github/Dockergithub'
gsap.registerPlugin(ScrollTrigger)

function Contact() {

  useGSAP(()=>{
    gsap.from(".leftcontact img",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".leftcontact img",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 20%"
      }
    })

    
  
  })
  return (
    <div>
      <Dockergithub/>
    <div id="contact">
        <div className="leftcontact">
            {/* <img src={con} alt="" /> */}
            <My3dModel/>
        </div>
        <div className="rightcontact">
            <form action="https://formspree.io/f/xdkovggp" method='POST'>
                <input type="text" name='username' placeholder='Name' />
                <input type="email" name='email' placeholder='enter email' />
                <textarea name="message" id="textarea" placeholder='message me'></textarea>
                <input type="submit" id="btn" value="submit"/> 
            </form>
        </div>
        
    </div>
    </div>
  )
}

export default Contact
