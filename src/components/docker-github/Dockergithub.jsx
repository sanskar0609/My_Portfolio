import React from 'react'
import "./Dockergithub.css"
import DockGitCard from '../card/DockGitCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Projects from '../projects/Projects'
gsap.registerPlugin(ScrollTrigger)

function Dockergithub() {

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
     <div>
    <div id="dokergithub">
      
        <h1 id="dok">Github Repository and Docker Images</h1>
        <div className="slider">

        <DockGitCard 
  title="My all images" 
  dockerHubUrl="https://hub.docker.com/repositories/sanskar0609" 
  githubUrl="https://github.com/sanskar0609" 
/>
        <DockGitCard 
  title="AI-Email Extension" 
  dockerHubUrl="https://hub.docker.com/repository/docker/sanskar0609/ai-email/general" 
  githubUrl="https://github.com/sanskar0609/AI-Email-Reply/tree/main" 
/>

<DockGitCard 
  title="Unity Hub(Selenium)" 
  dockerHubUrl="sanskar0609/selenium-unityhub" 
  githubUrl="https://github.com/sanskar0609/neighbour-helping-app" 
/>

<DockGitCard 
  title="Leetcode Extension" 
  dockerHubUrl="https://hub.docker.com/repository/docker/sanskar0609/leetcodeext/general" 
  githubUrl="https://github.com/sanskar0609/leetcode-extension" 
/>

<DockGitCard 
  title="Jobmicroservice" 
  dockerHubUrl="https://hub.docker.com/repository/docker/sanskar0609/jobappimage/general" 
  githubUrl="https://github.com/sanskar0609/job-app-microservice?tab=readme-ov-file" 
/> 

       <DockGitCard 
  title="Jobmicroservice - companyms" 
  dockerHubUrl="https://hub.docker.com/repository/docker/sanskar0609/companyms/general" 
  githubUrl="https://github.com/sanskar0609/job-app-microservice/tree/main/companyms" 
/> 

<DockGitCard 
  title="Jobmicroservice - jobms" 
  dockerHubUrl="https://hub.docker.com/repository/docker/sanskar0609/jobms/general" 
  githubUrl="https://github.com/sanskar0609/job-app-microservice/tree/main/jobms" 
/> 

<DockGitCard 
  title="Jobmicroservice - reviewms" 
  dockerHubUrl="https://hub.docker.com/repository/docker/sanskar0609/reviewms/general" 
  githubUrl="https://github.com/sanskar0609/job-app-microservice/tree/main/reviewms" 
/> 

        </div>
    </div>
    </div>
  )
}

export default Dockergithub
