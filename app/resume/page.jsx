"use client";
import Link from "next/link";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "I am a passionate Frontend software developer with extensive experience in designing and implementing Scalable and robust server-side solutions. I am proficient in various programming languages such as JavaScript and Python, and frameworks like React, React Native and Node.js",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Olawale 'RAE' Hassan",
    },
    {
      fieldName: "Phone",
      fieldValue: "+2348123085176",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "olawalerae@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Yoruba, French",
    },
  ],
};

const experience = {
  icon: "",
  title: " My Experiences",
  description: " These are some of the places I have worked previously",
  items: [
    {
      company: "Urvan Concepts Information Technology",
      position: "Website Developer and Instructor",
      duration: "January 2022 - Present",
    },
    {
      company: "Konnekt - Fi (Remote) ",
      position: "Web3 Developer",
      duration: "January 2022 - April 2022",
    },
    {
      company: "SourceIN Analytics",
      position: "WordPress Developer",
      duration: "May 2020 - Jan. 2022 ",
    },
    {
      company: "SourceIN Analytics",
      position: "WordPress Development Intern",
      duration: "July 2014 - August 2015",
    },
  ],
};

const education = {
  icon: "",
  title: "Education",
  items: [
    {
      institution: "University of Lagos",
      degree: "Bachelor's Degree",
      duration: "September 2015 - November 2021",
    },
    {
      institution: "Urvan Academy",
      degree: "Certificate of Completion",
      duration: "June 2021 - November 2021",
    },
    {
      institution: "Methodist Boys High School",
      degree: "WASSCE",
      duration: "September 2008 - June 2014",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "I am experienced in using these tools and frameworks",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React J.S",
    },
    {
      icon: <FaFigma />,
      name: "UI/UX",
    },
    {
      icon: <FaNodeJs />,
      name: "Node J.S",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next J.S",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition:
      { delay: 2.4, duration: 0.4, ease: "easeIn"}
    }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-10">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">Biography</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
             <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index)=>{
                    return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3 ">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>

                    );
                  })}
                </ul>
              </ScrollArea>
             </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index)=>{
                    return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3 ">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>

                    );
                  })}
                </ul>
              </ScrollArea>
             </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index)=>{
                      return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                      );
                    })}
                  </ul>
                </div>
            </TabsContent>

            {/* About/Biography */}
            <TabsContent value="about" className="w-full xl:text-left">
               <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul>
                  {about.info.map((item, index)=>{
                    return (
                      <li key={index} 
                      className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
               </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
    
};

export default Resume;
