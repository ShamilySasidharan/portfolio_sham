"use client"
import CountUp from "react-countup"

const stats = [
    {
        num:"1.7",
        text:"Years Of Experience"

    },
    {
        num:6,
        text:"Technologies"

    },
    {
        num:10,
        text:"Project Build"

    },

   
    {
        num:5,
        text:"Certification"

    }
]


const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap mx-auto max-w-[80vh] xl:max-w-none gap-6">
            {
            stats.map((item,index)=>{
                return (
                  <div key={index} className=" mx-4 flex-1 flex  gap-4 items-center justify-center xl:justify-start">
                    <CountUp end={item.num}
                    duration={5}
                    delay={2}
                    className="text-xl xl:text-6xl font-extrabold"/>
                    <span>+</span>

                    <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/90`  }>{item.text}</p>
                    </div>
                )
            })
         }
            </div>
       
        </div>

    </section>
  )
}

export default Stats