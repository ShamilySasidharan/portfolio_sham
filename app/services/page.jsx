"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { use } from "react";


 const services =[
  {
    num:"01",
    title:"Full-Stack Web App Development",
    description:"I develop full-stack applications using React for the frontend and Node.js for the backend — ideal for dashboards, tools, or dynamic websites.",
    useCase:"DevTinder",
    skills:"React,Tailwind,Node.js,Redux,Api integration."
  },
  {
    num:"02",
    title:"Frontend Development",
    description:"I build clean, reusable, and responsive user interfaces.",
    useCase:"Netflix gpt,HotStar clone,Resto App",
    skills:"React and Tailwind CSS, Material UI,Daisy UI,Shadcn UI libraries."
  },
  {
    num:"03",
    title:"Data Management",
    description:"I handle complex application state and API data using Redux and other state management tools to ensure smooth data flow and reactivity.",
    useCase:"Netflix gpt,HotStar clone,Youtube clone, Dev Tinder",
    skills:"Redux Toolkit, Context API, useReducer, API integration, Axios"
  },
  {
    num: "04",
    title: "UI/UX Design",
    description: "I focus on crafting clean and user-friendly interfaces with modern UI libraries and design systems to enhance usability and visual consistency.",
    useCase: "Netflix GPT, HotStar Clone, YouTube Clone, Dev Tinder",
    skills: "Tailwind CSS, Material UI, Shadcn UI, DaisyUI, responsive design"
  }
 
 ]


const Services = () => {
  const pathname = usePathname()
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mx-4">
<div className="container mx-auto"> 
  <motion.div 
  initial={{opacity:0}}
  animate={{opacity:1,
    transition:{delay:2.4,duration:0.4,ease:"easeIn"}
  }}
  className="grid grid-col-1 md:grid-cols-2 gap-[60px]"
  >
    {
      services.map((service,index)=>{
        return(
        <div key={index} className="flex-1 flex flex-col justify-between items-center group gap-6">
          {/* top */}
        <div className="w-full flex justify-between items-center group">
          <div className="text-5xl 
          font-extrabold 
          text-outline
          text-transparent 
          transition-all duration-500 group-hover:text-outline">{service.num}</div>
          
          <Link href="/" className="bg-white w-[70px] h-[70px] rounded-full flex justify-center
           items-center group-hover:bg-fonttext transition-all duration-500 hover:-rotate-45">
          <BsArrowDownRight className="text-3xl text-black" />
          </Link>
        </div>
        {/* title */}
          <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-fonttext transition-all duration-500"> {service.title}</h2>
        {/* description */}
        <p className="text-white/60"> {service.description }</p>
        <h5 className="text-white/60">{service.useCase}</h5>
        <h5 className="text-white/60">{service.skills}</h5>
       <div className="border borer-b border-white/20 w-full"></div>
          </div>
        )
      })
    }
  </motion.div>
  
   </div>
    </section>
    
  )
}

export default Services