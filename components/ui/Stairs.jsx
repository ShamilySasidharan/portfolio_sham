import { animate,motion } from "framer-motion"

// variants
const stairAnimation = {
  initial:{
    top: "0%",
  },
  animate:{
   top:"100%"
  },
  exit:{
    top:["100%","0%"]
}}

// calculate  the  reverse index
const reverseIndex = (index)=>{
  const totalSteps = 6;
 return totalSteps - index - 1;
}
const Stairs = () => {

  return (
    <>
    {/* render 6 motion divs smae animation defined using the stairanimationobj 
        delay is calculated by its reversed index dynamically
        creating the staggered effect  with decreasing delay  for each  subsequent 
    
    */}
    {[...Array(6)].map((_,index)=>{
      return(
        <motion.div 
        key={index} 
        variants={stairAnimation} 
        initial="initial" 
        animate="animate" 
        exit="exit"
       transition={{
        duration:0.4,
        ease:"easeInOut",
        delay:reverseIndex(index)*0.1
       }}
       className="h-full w-full bg-staircase relative"
       />
      );
    })}
    </>
  )
}

export default Stairs