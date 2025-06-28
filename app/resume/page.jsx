"use client"
import { Description } from "@radix-ui/react-dialog"
import { FaHtml5,FaCss3,FaJs,FaFigma,FaNodeJs,FaReact} from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs} from "react-icons/si";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip,TooltipProvider,TooltipContent,TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about
const about={
  title:"About",
  Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur aliquid ut ab, consectetur a aperiam animi.",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Shamily Sasidharan"
      

    },
    {
      fieldName:"Nationality",
      fieldValue:"Indian"


    },
    {
      fieldName:"Email",
      fieldValue:"Shamilysasidharan111@gmail.com"


    },
    {
      fieldName:"Freelance",
      fieldValue:"Available"


    },
    {
      fieldName:"Languages",
      fieldValue:"English,Malayalam,Tamil"


    }
  ]

}

// experience
const experience = {
  icon:"",
  title:"My Experience",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto mollitia odit rem?",
  items:[
    {
      company:"Lyon IT.",
      position:"Full Stack Developer",
      duration:"1.7 Year"
    },
    {
      company:"ICTAK. ",
      position:"Student",
      duration:"6 months"
    },
    {
      company:"ICTAK. ",
      position:"Student",
      duration:"6 months"
    },
    {
      company:"ICTAK. ",
      position:"Student",
      duration:"6 months"
    },

  ]

}

// Education
const education = {
  icon:"",
  title:"My Education",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto mollitia odit rem?",
  items:[
    {
      institution:"Our Lady Of Mercy , Aroor",
      degree:"High School Education",
      duration:"2010",
      status:"10th "
    },
    {
      institution:"Vaduthala Jama-ath Higher Secondary School",
      degree:"Higher Secondary Education ",
      duration:"2012",
      status:"12th "
    },
    {
      institution:"Govt Model Engineering College,Thrikkakara",
      degree:"Computer Science and Engineering",
      duration:"2017",
      status:"Graduation"
    },
    {
      institution:"ICT Academy of kerala",
      degree:"Certified Specialist in FullStack",
      duration:"2021-2022",
      status:"Completed "
    },
    {
      institution:"Namaste React",
      degree:"Fronted Developer Course",
      duration:"2024",
      status:"Completed "
    },
    {
      institution:"Namaste Node",
      degree:"Full Stack Development ",
      duration:"2024",
      status:"Completed "
    },
   

  ]

}

// skills
const skills={
  title:"My Skills",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius ea accusamus aut accusantium.",
  skillList:[
    {
      icon: <FaHtml5/>,
      name:"html 5"
    },
    {
      icon: <FaCss3/>,
      name:"css 3"
    },
    {
      icon: <FaJs/>,
      name:"javascript"
    },
   
    {
      icon: <FaReact/>,
      name:"react.js"
    },
    {
      icon: <FaFigma/>,
      name:"figma"
    },
    {
      icon: <FaNodeJs/>,
      name:"node.js"
    },
    {
      icon: <SiNextdotjs/>,
      name:"next.js"
    },
    {
      icon: <SiTailwindcss/>,
      name:"tailwind.css"
    },

  ]
}


const Resume = () => {
  return (
    <>
     <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1,
      transition:{
        delay:2.4,
        duration:0.4,ease:"easeIn"
      }
    }}
    className="flex items-center justify-center min-h-[80vh] py-12 xl:py-0 "
    > 
    <div className="container mx-auto">
     <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px] ">
      <TabsList className="flex flex-col gap-6 mx-auto xl:mx-0 max-w-[380px] w-full  ">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="about">About Me</TabsTrigger>
      
      </TabsList>

      {/* contents */}
    <div className="min-h-[70vh] w-full">

     {/* experience */}
     <TabsContent value="experience" className="w-full">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">
         {experience.title}
        </h3>
        <p className="max-w-[600px]   text-white/60 mx-auto xl:mx-0">{experience.description}</p>
         
         <ScrollArea className="h-[400px] xl:text-center mx-4">
          <ul className="grid grid-col-1 md:grid-cols-2 gap-[30px]">
            {
              experience.items.map((item,index)=>{
                return <li key={index} className="bg-[#011e42] h-[184px] px-10 rounded-xl gap-1 flex flex-col justify-center items-center lg:items-center">
                <span className="text-fonttext">{item.duration}</span>
                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                <div className="flex items-center gap-3">
                  {/* dot */}
                <span className="w-[6px] h-[6px] rounded-full bg-fonttext"></span>
                  <p className="text-white/60">{item.company}  </p>
                </div>
      
                </li>
              })
            }
          </ul>
         </ScrollArea>

      </div>
     </TabsContent>

     {/* education */}
     <TabsContent value="education" className="w-full">
     <div className="flex flex-col gap-[30px] text-center xl:text-left  ">
        <h3 className="text-4xl font-bold">
         {education.title}
        </h3>
        <p className="max-w-[600px]   text-white/60 mx-auto xl:mx-0">{education.description}</p>
         
         <ScrollArea className="h-[400px] xl:text-center mx-4 ">
          <ul className="grid grid-col-1 md:grid-cols-2 gap-[30px] ">
            {
              education.items.map((item,index)=>{
                return <li key={index} className="bg-[#011e42] h-[250px] px-10 rounded-xl gap-1 flex flex-col justify-center items-center lg:items-left">
                <span className="text-fonttext lg:text-left">{item.duration}</span>
                <p className="text-fonttext  mx-auto text-center">{item.degree}</p>
                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.status}</h3>
                <div className="flex items-center gap-3">
                  {/* dot */}
                <span className="w-[6px] h-[6px] rounded-full bg-fonttext"></span>
                  <p className="text-white/60">{item.institution}  </p>
                </div>
      
                </li>
              })
            }
          </ul>
         </ScrollArea>

      </div>
     </TabsContent>

     {/* skills */}
     <TabsContent value="skills" className="w-full h-full">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{skills.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 mx-2 ">
          {skills.skillList.map((skill,index)=>{
            return <li key={index} className="cursor-pointer ">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] bg-[#011e42] rounded-xl flex justify-center items-center group">
                    <div className="text-6xl hover:text-fonttext transition-all duration-300"> 
                      {skill.icon}</div>
                   
                  </TooltipTrigger>
                  <TooltipContent  >
                   <p className="capitalize">{skill.name}</p> 
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          })}
        </ul>
      </div>
     </TabsContent>


     {/* about */}
     <TabsContent value="about" className="w-full text-center xl:text-left">
      <div className="flex flex-col gap-[30px]">
        <h3 className="text-4xl font-bold">{about.title}</h3>
        <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
          {about.Description}
        </p>
        <ul className="grid grid-cols-1   gap-y-6 max-w-[640px] mx-auto xl:mx-0 ">
         {about.info.map((item,index)=>{
          return (
            <li key={index} className="flex justify-between items-center  xl:justify-start gap-4  xl:flex-row text-sm">
              <span className="text-white/60  ">{item.fieldName}</span>
              <span className="text-xl">{item.fieldValue}</span>
            </li>
          )
         })}
        </ul>
      </div>
     </TabsContent>
      </div>
     </Tabs>

    </div>
    
  
    </motion.div>
   
   
 

    </>
   
  
 


)
}

export default Resume