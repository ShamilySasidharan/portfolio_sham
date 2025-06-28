import { JetBrains_Mono } from "next/font/google";

import { Button } from "@/components/ui/button";
import { FileDownIcon } from "lucide-react";

// components 
import Socials from "@/components/ui/Socials";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";

const page = () => {
  return (

    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex 
      flex-col 
      items-center 
      justify-between
      xl:flex-row 
      xl:pt-8 
      xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-white">FullStack Developer</span>
            <h1 className="h1 mb-6"> Hello I'm <br /> <span className="text-fonttext">Shamily Sasidharan</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80"> Curious, reliable, and always learning. I enjoy solving problems, working with others, and building things that make life a little easier or better.
            </p>
            {/* button and socials  */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* <Button className="uppercase flex items-center gap-2 hover:bg-fonttext hover:text-black cursor-pointer" 
              variant="outline"
              size="lg"
              >
                <span>Download cv</span>
                <FileDownIcon/>
              </Button> */}
              <div className="mb-8 xl:mb-0 ">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-fonttext rounded-full flex
                justify-center items-center text-fonttext text-base hover:bg-fonttext hover:text-black hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* PHOTO */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0"> 
            <Photo/>
          </div>
        </div>

       {/* STATS */}
        <div>
            <Stats/>
          </div>
      </div>
    </section>
  )
}

export default page