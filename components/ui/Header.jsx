import Link from "next/link";
import { Button } from "./button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between">
               
                <Link href="/">
                    <h1 className="text-3xl font-semibold px-2">Sham's <span className="text-fonttext">_</span></h1>
                </Link>

                {/* desktop nav and hire me */}
                <div className="hidden xl:flex px-2 items-center gap-4">
                    <Nav />
                    <Link href="/contact">  <Button className="hover:bg-fonttext hover:text-black">Hire me</Button></Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden px-4">
                    <MobileNav/>
                </div>


            </div>
        </header>
    )
}

export default Header
