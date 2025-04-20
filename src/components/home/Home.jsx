import React from 'react'
import "./Home.css"
import man from "../../assets/images/man.png"
import { Link } from "react-scroll";
import TypingEffect from "react-typing-effect"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import cv from "../../assets/images/Sanskar_Sontakke_CV.pdf"
import Model from '../3dmodel/My3d';
function Home() {

  useGSAP(()=>{
    let tl=gsap.timeline();
    tl.from(".line1",{
      y:80,
      duration:1,
      opacity:0
    })
    tl.from(".line2",{
      y:80,
      duration:1,
      opacity:0
    })
    tl.from(".line3",{
      y:80,
      duration:1,
      opacity:0
    })
    tl.from(".right img",{
      x:100,
      duration:1,
      opacity:0
    })
  })

  return (
   <div id="home">
        <div className="left">
              <div className="detailhome">
                <div className="line1">
                          I'M
                </div>
                <div className="line2">
                          SONTAKKE SANSKAR
                </div>
                <div className="line3">
                        <TypingEffect
                        text={["WEB DEVELOPER", "SOFTWARE DEVELOPER","UI/UX DESIGNER","Automation Tester"]}
                        speed={50}
                        eraseSpeed={100}
                        eraseDelay={500}
                        cursor='|'
                        />
                </div>
                <Link to="contact" spy={true} smooth={true} duration={500}>
  <button>HIRE ME</button>
</Link>
        <a href={cv} download>
            <button>Resume</button>
        </a>

              </div>
              
        </div>
        <div className="right">
          {/* <img src={man} alt=''/> */}
          <Model/>
        </div>
   </div>
  )
}

export default Home
