import Link from "next/link"

import { IoLogoGithub } from "react-icons/io5";
import { MdEmail , MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";


export function Intro() {
    return <div className="backdrop-blur-sm ">
        <h1 className="font-sans text-2xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[2.5rem]">
            Hello👋,
        </h1>
        <h1 className="text-2xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">I am <span className="text-pink-600">YADNYESH DASHPUTE,</span></h1> 
        <h1 className="text-2xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">I am a Third Year <span className="text-[#16f2b3]">Engineering</span> <span className="text-2xl font-bold leading-10 text-[#16f2b3] md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">Student.</span></h1>
        
        <div className="flex items-center mt-4 space-x-3 text-pink-500">
  <Link href="/">
    <IoLogoGithub className="mt-6 text-4xl hover:scale-125 duration-300 transform" />
  </Link>

  <Link href="/">
    <FaLinkedin className="mt-6 text-4xl hover:scale-125 duration-300 transform" />
  </Link>

  <Link href="/">
  <MdEmail className="mt-6 text-4xl hover:scale-125 duration-300 transform" />
  </Link>
</div>

<button className="flex mt-10 bg-gradient-to-r from-blue-300 to-pink-500 text-white font-bold py-2 px-4 rounded-full text-center hover:scale-125 duration-300 transform">
  Download Resume <MdOutlineFileDownload className="ml-1 h-6 w-6" />
</button>


                
    </div>
}