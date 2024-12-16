import React from 'react'
import con from '../../assets/images/contact.png'
import './Contact.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
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
    <div id="contact">
        <div className="leftcontact">
            <img src={con} alt="" />
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
  )
}

export default Contact
