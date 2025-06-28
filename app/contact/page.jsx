"use client"

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input"
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select";
import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from "react-icons/fa";
import { Description } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";


const info =[

  {
    icon:<FaPhoneAlt/>,
    title:"Phone",
    description:"8921077465"
  },
  
  {
    icon:<FaEnvelope/>,
    title:"Email",
    description:"shamilysasidharan111@gmail.com"
  },
  {
    icon:<FaMapMarkerAlt/>,
    title:"Address",
    description:"Evra 13 , Amrita Nagar near to Amrita Ace Retreat Apartments,Ponnekara,Kunnumpuram."
  },
 

]

const Contact = () => {
  return (
    <motion.section 
    initial={{opacity:0}}
    animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}} 
    className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none "> 
              <form className="flex flex-col gap-6 p-10  rounded-xl bg-[#011e42]">
                  <h3 className="text-4xl text-fonttext">Let's work together</h3>
                  <p className="text-white/60">Work together to create something impactful and inspiring. With a strong foundation in full-stack development and a passion for clean, efficient code, I aim to build applications that are not only functional but also visually engaging. By incorporating inspiring designs, I bring a creative and approachable touch to developer-focused tools, making interactions more enjoyable, relatable, and user-friendly</p> 
                  {/* Inputs */}
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input type="firstname" placeholder="Firstname" />
                    <Input type="lastname" placeholder="Lastname" />
                    <Input type="email" placeholder="Email Address" />
                    <Input type="phone" placeholder="Phone Number" />
                  </div> */}
                  {/* select  */}
                  {/* <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web development</SelectItem>
                      <SelectItem value="cst">Fullstack Devlopment</SelectItem>
                      <SelectItem value="mst">UI/UX design</SelectItem>
                      <SelectItem  value="gst">Freelance</SelectItem>
                    
                    </SelectGroup>
                    </SelectContent>
                   
                  </Select> */}

                  {/* textarea */}
                  {/* <Textarea className="h-[200px]" placeholder="Type your message here."/>
             
                  <Button size="md" className="max-w-40 rounded-md bg-fonttext text-black"> Send message</Button> */}
             
              </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:m-0">
            <ul className="flex flex-col gap-10" >
             {info.map((item,index)=>{
              return (
                <li key={index} className="flex items-center gap-6 mx-2">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#011e42] text-fonttext rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1 ">
                    <p className="text-white/60 ">{item.title}</p>
                    <h3 className="xl:text-xl text-sm  ">{item.description}</h3>
                  </div>
                </li>
              )
             })}
            </ul>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Contact