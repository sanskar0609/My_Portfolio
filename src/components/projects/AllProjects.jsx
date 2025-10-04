import React from 'react';
import UnifiedCard from './UnifiedCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import va from "../../assets/images/va.png" 
import clg from "../../assets/images/clg.jpg"
import chatbot from "../../assets/images/chatbot.jpg" 
import webngo from "../../assets/images/webngp.jpg" 
import mycafe from "../../assets/images/mycafe.jpg" 
import school from "../../assets/images/school.jpg" 
import ext from "../../assets/images/fontext.jpg" 
import txteditor from "../../assets/images/texteditor.jpg" 
import email from '../../assets/images/email.png' 
import unityHub from '../../assets/images/unityhub.png' 
import jobapp from '../../assets/images/jobapp.png'
import BrowseBoost from '../../assets/images/extension.png'
import mockmaster from '../../assets/images/mockmaster.png'
import './AllProject.css'

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
   {
    title: "BrowseBoost",
    imageUrl:BrowseBoost,
    liveUrl: "https://browseboost.vercel.app/",
    githubUrl: "https://github.com/sanskar0609/Extensions",
    // dockerHubUrl: "https://hub.docker.com/repository/docker/sanskar0609/selenium-unityhub"
  },
  {
    title: "MockMaster",
    imageUrl:mockmaster,
    liveUrl: "https://mock-master-green.vercel.app/",
    githubUrl: "https://github.com/sanskar0609/MockMaster",
    dockerHubUrl: "https://hub.docker.com/repository/docker/sanskar0609/mindmap-v1/general"
  }, 

  {
    title: "UnityHub",
    imageUrl:unityHub,
    liveUrl: "http://unityhub.great-site.net/",
    githubUrl: "https://github.com/sanskar0609/neighbour-helping-app",
    dockerHubUrl: "https://hub.docker.com/repository/docker/sanskar0609/selenium-unityhub"
  },
  {
    title: "Job App Microservice",
    imageUrl:jobapp,
    liveUrl: "https://jobmicroservice.netlify.app/",
    githubUrl: "https://github.com/sanskar0609/job-app-microservice",
    dockerHubUrl: "https://hub.docker.com/repository/docker/sanskar0609/jobappimage/general"
  },
  {
    title: "AI-Email Extension",
    imageUrl: email,
    liveUrl: "https://drive.google.com/drive/folders/1avbPYIhcCbA7_PNbawDyXlKBU4IfVAY1?usp=drive_link",
    githubUrl: "https://github.com/sanskar0609/AI-Email-Reply/tree/main",
    dockerHubUrl: "https://hub.docker.com/repository/docker/sanskar0609/ai-email/general"
  },
  {
    title: "College Predictor",
    imageUrl: clg,
    liveUrl: "http://collegepredictor.infinityfreeapp.com/",
    githubUrl: "https://github.com/sanskar0609/college-predictor",
    dockerHubUrl: ""
  },
  {
    title: "CHATBOT",
    imageUrl: chatbot,
    liveUrl: "https://sanskar0609.github.io/chatbot/",
    githubUrl: "https://github.com/sanskar0609/chatbot",
    dockerHubUrl: ""
  },
  {
    title: "Cafe Management",
    imageUrl: mycafe,
    liveUrl: "https://drive.google.com/file/d/1LTMVoQmkpd-dR5RPqDHP1ZM8s-DZSE_Q/view?usp=drive_link",
    githubUrl: "",
    dockerHubUrl: ""
  },
  {
    title: "WEB NGO",
    imageUrl: webngo,
    liveUrl: "https://sanskar0609.github.io/WEB_NGO/",
    githubUrl: "https://github.com/sanskar0609/WEB_NGO",
    dockerHubUrl: ""
  },
  {
    title: "SCHOOL MANAGEMENT",
    imageUrl: school,
    liveUrl: "",
    githubUrl: "https://github.com/sanskar0609/school-managment-java",
    dockerHubUrl: ""
  },
  {
    title: "Font Detector Extension",
    imageUrl: ext,
    liveUrl: "https://font-detector-extension.netlify.app/",
    githubUrl: "https://github.com/sanskar0609/font-detector-extension",
    dockerHubUrl: ""
  },
  {
    title: "TEXT EDITOR",
    imageUrl: txteditor,
    liveUrl: "",
    githubUrl: "https://github.com/sanskar0609/text-editor",
    dockerHubUrl: ""
  }
];

export default function AllProjects() {
  useGSAP(() => {
    gsap.from("#projects h1", {
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#projects h1",
        start: "top 80%",
        end: "top 20%",
        scrub: 2
      }
    });

    gsap.from(".projects-slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".projects-slider",
        start: "top 70%",
        end: "top 20%",
        scrub: 2
      }
    });
  });

  return (
    <div id="projects" className="flex flex-col items-center gap-10 py-10">
      <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-white">
        3+ YEARS EXPERIENCED IN PROJECTS
      </h1>
      <div className="projects-slider flex gap-6 overflow-x-scroll w-[90%] py-4 px-2 scrollbar-hide">

        {projectsData.map((project, index) => (
          <UnifiedCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            dockerHubUrl={project.dockerHubUrl}
          />
        ))}
      </div>
    </div>
  );
}
