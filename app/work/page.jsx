"use client"
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import Link from 'next/link';

import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import { TooltipContent, Tooltip, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import Image from "next/image"
import { Description } from '@radix-ui/react-dialog';
import WorkSlidderBtn from '@/components/ui/WorkSlidderBtn';


const projects = [
  
  {
    num: "01",
    category: "FullStack",
    title: "DevTinder",
    description: "The app is built to help developers communicate easily, with an anime-themed design to make interactions more engaging and easier to relate to. ",
    stack: [
      {
        name: "Html5"
      },
      {
        name: "Css3"
      },
      {
        name: "Javascript"
      },
      {
        name: "React"
      },
      {
        name: "Daisyui"
      },
      {
        name: "Redux"
      },
      {
        name: "Node.js"
      },
      {
        name: "Express.js"
      },
      {
        name: "Tailwind."
      },
    ],
    image: "/assets/devtinder_02.png",
    
  
    live: "",
    github: ""
  },
  
  {


    num: "02",
    category: "Frontend",
    title: "Netflixgpt",
    description: "Netflix GPT is a React app with Firebase auth and GPT-powered movie search using TMDB and OpenAI APIs. Users can browse movies, watch trailers, and search in multiple languages.",
    stack: [
      {
        name: "Html5"
      },
      {
        name: "Css3"
      },
      {
        name: "Javascript"
      },
      {
        name: "React"
      },
      {
        name: "Daisyui"
      },
      {
        name: "Redux"
      },
      {
        name: "Node.js"
      },
      {
        name: "Tailwind."
      },
    ],
    image: "/assets/netflixgpt1.png",
   
    live: "cheery-liger-8320f2.netlify.app/",
    github: "https://github.com/ShamilySasidharan/netflix_gpt"
  },
  {
    num: "03",
    category: "Frontend",
    title: "Youtube Clone",
    description: "A fully responsive YouTube clone built using React, Redux, and Tailwind CSS, with core features like video browsing, watching, live chat simulation, nested comments, and smart search suggestions. ",
    stack: [
      {
        name: "Html5"
      },
      {
        name: "Css3"
      },
      {
        name: "Javascript"
      },
      {
        name: "React"
      },
      {
        name: "Daisyui"
      },
      {
        name: "Redux"
      },
     
      {
        name: "Tailwind."
      },
    ],
    image: "/assets/yt_01.png",
   
    live: "https://superlative-jalebi-1243c0.netlify.app/",
    github: "https://github.com/ShamilySasidharan/youtubeMachineInterview"
  },
  {
    num: "04",
    category: "Frontend",
    title: "Shoe Design",
    description: "The goal of this project was to familiarize myself with React and CSS fundamentals. ",
    stack: [
      {
        name: "Html5"
      },
      {
        name: "Css3"
      },
      {
        name: "Javascript"
      },
      {
        name: "React"
      },
      {
        name: "Daisyui"
      },
   
     
      {
        name: "Tailwind."
      },
    ],
    image: "/assets/shoe_image.png",
   
    live: "https://jocular-cendol-9eadbe.netlify.app/",
    github: "https://github.com/ShamilySasidharan/shoe_design"
  },

]



const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper)=>{
    // get the current slide index
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
    }
  return (

    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1,transition:{delay:2.4,duration:0.4,ease:"easeIn"} }} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%] mx-2'>
              {/* outline num */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
              {/* project category */}
              <div className='text-[42px] font-bold leading-none text-white/60 hover:text-fonttext transition-all duration-500 capitalize'>
                {project.category}
              </div>
                 {/* description */}
                 <div className=' text-fonttext'>
                {project.title}
              </div>
              {/* description */}
              <div className='text-white/60'>
                {project.description}
              </div>
              {/* stack name */}
              <ul className='flex gap-4 flex-wrap mx-2 '>
                {
                  project?.stack?.map((item, index) => {
                    return (
                      <li key={index} className='xl:text-xl text-fonttext text-base'>
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    )
                  })
                }
              </ul>

              {/* border */}
              <div className='border border-white/20 '></div>
             
              {/* button */}
              <div className='flex items-center gap-4'>
               
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"><BsArrowUpRight className='text-3xl text-white hover:text-fonttext' /></TooltipTrigger>
                      <TooltipContent>Live Project</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
               
                {/* github */}
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"><BsGithub className='text-3xl text-white hover:text-fonttext' /></TooltipTrigger>
                      <TooltipContent><p>Github repo</p></TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

              </div>
            </div>
          </div>
         
          {/* slidder */}
          <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[524px] mb-12' onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return <SwiperSlide key={index} >
                  <div className='flex justify-center items-center h-[460px] relative group  bg-pink-50/20'>
                   {/* overlay */}
                   <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                   {/* image */}
                   <div className='relative w-full h-full'>

                    <Image src={project.image} fill className='object-contain' alt="project_images"/>
                   </div>
                  </div>
                </SwiperSlide>
              })}

              {/* work slidder buttons */}
              <WorkSlidderBtn
  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:justify-start xl:w-max"
  btnStyles=" hover:bg-fonttext text-fonttext hover:text-[#011e42] xl:rounded-md bg-[#011e42] shadow-sm text-[22px] w-[44px] h-[44px] justify-center flex items-center transition-all"
/>

            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work