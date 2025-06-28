'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { usePathname } from "next/navigation";
  import Link from "next/link";
  import { CiMenuFries } from "react-icons/ci";


  const links = [
    {
        name:"home",
        path:"/",
      
    },
    {
        name:"services",
        path:"/services",
      
    },
    {
        name:"resume",
        path:"/resume",
      
    },
    {
        name:"contact",
        path:"/contact",
      
    },
    {
        name:"work",
        path:"/work",
      
    },
  ]

const MobileNav = () => {
    const pathname = usePathname()
  return (
    <nav>

     <Sheet>
        <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-fonttext"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-30 text-2xl text-center">

            <Link href="/" className="">
             <h1 className="text-staircase text-2xl font-semibold"> Sham<span className="text-fonttext">_</span></h1>
           </Link>
        </div>
        <SheetTitle className="sr-only">menu</SheetTitle>
        {/* nav */}
        <nav className="flex flex-col justify-center gap-6 items-center">
            {links.map((link,index)=>{
                return (
                    <Link key={index} href={link.path} className={`${link.path===pathname && "text-fonttext border-b-2 border-fonttext"}  text-xl capitalize hover:text-fonttext transition-all`}>{link.name}</Link>
                )
            })}
        </nav>
        </SheetContent>
     </Sheet>
    </nav>
  )
}

export default MobileNav