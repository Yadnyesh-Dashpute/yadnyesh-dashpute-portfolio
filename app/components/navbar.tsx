import Link from "next/link"
import { FaReact, FaJsSquare } from "react-icons/fa";
import { BiSolidFileTxt, BiLogoTailwindCss } from "react-icons/bi";

export default function Navbar() {

    return <div>
        <nav className="flex items-center h-10 rounded-md justify-between  p-2 sm:text-1xl md:p-4 backdrop-blur-sm">
            <div className="flex  m-6 space-x-1 md:mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="hidden text-3xl lg:flex items-center space-x-8 flex-wrap md:flex-nowrap m-8 p-2">
                <Link
                    href="#1"
                    className="flex items-center sm:text-sm md:text-base text-white-700 hover:text-pink-500 transition duration-300 ease-in-out"
                >
                    <FaJsSquare className="mr-1" /> Home.js
                </Link>

                <a href="#2" className="flex items-center text-xs sm:text-sm md:text-base text-white-700 hover:text-pink-500 transition duration-300 ease-in-out">
                    <FaReact className="mr-1 text-blue-500" /> Projects.tsx
                </a>
                <Link href="/" className="flex items-center text-xs sm:text-sm md:text-base text-white-700 hover:text-pink-500 transition duration-300 ease-in-out">
                    <BiSolidFileTxt className="mr-1 text-gray-500" /> Resume.txt
                </Link>
                <Link href="/" className="flex items-center text-xs sm:text-sm md:text-base text-white-700 hover:text-pink-500 transition duration-300 ease-in-out">
                    <BiLogoTailwindCss className="mr-1 text-blue-500" /> Contact.css
                </Link>
            </div>

        </nav>
    </div>

}
