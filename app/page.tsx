"use client"
import AnimatedBeam from "./components/background/animatedbeam";
import Navbar from "./components/navbar";
import { Intro } from "./components/subsection/intro";
import Texteditor from "./components/subsection/texteditor";
import Projectcard from "./components/projects/projectcard"
import animationData from "../app/Animation - 1731934877566.json"
import Lottie from "lottie-react";
import Marquee from "./components/skills/marquee";
import { SkillC } from "./components/skills/skillc";
import Card from "./components/project-section/card";


export default function Home() {
  return (
    <AnimatedBeam>
      <div className="h-full  w-full ">

        {/* Navigation Bar Components */}
        <div className="mt-5">
          <Navbar />
        </div>

        {/* Subsection Number 2 Introduction and Text Editor  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="order-2 md:order-1 mt-20 m-10">
          <Intro/>
          </div>
                
          <div className="order-1 md:order-2 mt-3">
        
        <Texteditor/>

        </div>
        </div>


    <hr className="bg-blue-300 mt-6"></hr>
        {/* Education */}

        <div className="flex justify-center items-center">
        <h1 className="bg-[#1a1443] w-fit text-white p-2 px-5 mt-9 text-xl rounded-md flex justify-center items-center">Education</h1>
        </div>
        <br></br>
        <br></br>
    <div className="h-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="flex justify-center">
          <Lottie animationData={animationData} className="w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px]"
                    />
          </div>
          <div className="mt-15">
          
         <Projectcard year="SEP 2023 - SEP 2026" degName="Bachelor's of Engineering" branchName="Computer Science and Engineering"  uniName="Pimpri Chinchwad College of Engineering and Research, Pune"/>
         <br></br>
         <Projectcard year="JAN 2021 - JULY 2023" degName="Diploma in Engineering" branchName="Computer Engineering" uniName="Pimpri Chinchwad Polytechnic"/>
          </div>
         </div>
         </div>

         <hr className="bg-blue-300"></hr>



        {/* My Skills */}

        <div className="flex justify-center items-center mt-8">
        <h1 className="bg-[#1a1443] w-fit text-white p-2 px-5 mt-4 text-xl rounded-md flex justify-center items-center">Skills</h1>
        </div>

        <div className="grid grid-cols-1">

          <div className="w-screen h-72 mt-10">
          
          <Marquee pauseOnHover className="[--duration:15s]">
                <SkillC icon="devicon:javascript" name="JavaScript" />
                <SkillC icon="devicon:react" name="React" />
                <SkillC icon="devicon:nodejs" name="Node.js" />
                <SkillC icon="devicon:mongodb" name="MongoDB" />
                <SkillC icon="devicon:html5" name="HTML5" />
                <SkillC icon="devicon:css3" name="CSS3" />
                <SkillC icon="devicon:git" name="Git" />
                <SkillC icon="devicon:typescript" name="TypeScript" />
          </Marquee>
          </div>
        </div>

  <hr className="bg-blue-300"></hr>

      {/* My Project*/}

      <div className="flex justify-center items-center mt-8">
        <h1 className="bg-[#1a1443] w-fit text-white p-2 px-5 mt-4 text-xl rounded-md flex justify-center items-center">Projects</h1>
      </div>
      
    
    <div className="flex justify-center items-center">

    <div className="mt-10">
      <Card/>
      <br></br>
      <Card/>

      </div>
      </div>

      </div>
    </AnimatedBeam>

  );
}
