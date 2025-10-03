import React from "react";
import { Briefcase, ExternalLink } from "lucide-react";
import dsa from '../../assets/images/dsalaunchpad.png'
import wceacm from '../../assets/images/wceacm.png'
import wcersc from '../../assets/images/wcersc.png'

const experiences = [
  {
    role: "Assistant Webmaster",
    company: "ACM WCE",
    duration: "Oct 2024 – Present",
    description:
      "Managed and developed the official ACM WCE website, integrated new features, and ensured a responsive design.",
    projects: [
      {
        title: "ACM WCE Website",
        image: wceacm,
        link: "https://acmwce.vercel.app",
      },
      {
        title: "Dsa Launchpad",
        image: dsa,
        link: "dl6.wceacmsc.live",
      },
      {
        title: "Rsc Website",
        image: wcersc,
        link:"https://rsc-website-xi.vercel.app/",
      },
    ],
  },
  {
    role: "Assistant Design & Content Head",
    company: "WCE MLSC",
    duration: "Oct 2024 – Present",
    description:
      "Lead content creation and design initiatives, managing team collaborations and publishing updates.",
  },
  {
    role: "Web Development Intern",
    company: "ABC Technologies",
    duration: "June 2024 – Aug 2024",
    description:
      "Worked on building responsive web applications using React, Tailwind CSS, and REST APIs.",
  },
];

const ExperienceWithShowcase = () => {
  return (
   <section
  id="experience"
  className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-16 md:py-24 text-white mt-12 md:mt-16"
>
  {/* Header */}
  <div className="mb-16 text-center px-2 sm:px-0">
    <div className="inline-flex items-center gap-3 mb-6 justify-center">
      <div className="p-3 rounded-xl border border-red-500/30 bg-red-900/20">
        <Briefcase className="w-7 h-7 text-red-400" />
      </div>
    </div>

    <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-white mb-10 w-full">
      Experience
    </h1>

    <div className="mt-4 mb-32 w-28 h-1 mx-auto bg-red-400 rounded-full"></div>
  </div>

  {/* Timeline */}
  <div className="flex flex-col gap-8 md:gap-12 w-full max-w-5xl px-2 sm:px-4 md:px-0 mt-8">
    {experiences.map((exp, index) => (
      <div key={index} className="relative group">
        {/* Card */}
        <div className="p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-cyan-500/20 shadow-lg hover:shadow-xl hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-1">
          <div className="px-2 sm:px-4">
            {/* Role and Company */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4 md:mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text">
                  {exp.role}
                </h3>
                <p className="text-base sm:text-lg text-cyan-400/80 font-medium mt-1">
                  @ {exp.company}
                </p>
              </div>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium whitespace-nowrap self-start">
                {exp.duration}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4 pl-4 sm:pl-6 md:pl-8">
              {exp.description}
            </p>

            {/* Projects Showcase */}
            {exp.projects && (
              <div className="mt-6 md:mt-8">
                <h4 className="text-xs sm:text-sm font-semibold text-cyan-400/70 uppercase tracking-wider mb-4">
                  Featured Projects
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {exp.projects.map((proj, i) => (
                    <a
                      key={i}
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group/card relative flex flex-col p-4 rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 shadow-lg hover:shadow-[0_8px_30px_rgba(34,211,238,0.25)] transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                    >
                      <div className="overflow-hidden rounded-lg mb-3 aspect-video flex items-center justify-center p-2">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover rounded-md group-hover/card:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center justify-between px-1">
                        <p className="text-xs sm:text-sm font-semibold text-cyan-300 group-hover/card:text-cyan-200 transition-colors">
                          {proj.title}
                        </p>
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400/60 group-hover/card:text-cyan-300 transition-all" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default ExperienceWithShowcase;
