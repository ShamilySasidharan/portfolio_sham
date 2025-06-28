'use client'
import { easeInOut, motion } from "framer-motion";
import Image from "next/image"


const Photo = () => {
    return (
        <div className="relative flex items-center justify-center w-[300px] h-[300px] xl:w-[460px] xl:h-[460px]">
          {/* Animated SVG Circle (outer border) */}
          <motion.svg
            className="absolute w-full h-full"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#C2E812"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: [
                  "15 120 25 25",
                  "16 25 92 72",
                  "4 250 22 22",
                ],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
    
          {/* Inner Image */}
          <motion.div
            className="relative w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
            }}
          >
            <Image
              src="/assets/myImage.png"
              alt="Profile"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </motion.div>
        </div>
      );
}

export default Photo