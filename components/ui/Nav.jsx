
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    {
        name: "home",
        path: "/"

    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"

    },
   
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    }
]



const Nav = () => {

    const pathname = usePathname();
    // console.log(pathname)

    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link key={index} href={link.path}
                        className={`${pathname === link.path && "text-fonttext border-b-2 border-fonttext cursor-pointer "} capitalize font-medium hover:text-fonttext transition-all`}
                    >{link.name}</Link>
                )
            })}
        </nav>
    )
}

export default Nav