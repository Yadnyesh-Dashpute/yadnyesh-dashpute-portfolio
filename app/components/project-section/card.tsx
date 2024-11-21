"use client"
import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function Texteditor() {
  const codeString = `
const project = {
   name:'Find Your Hostel',
   tools: ['NodeJS', 'Material UI', 'HTML5', 'CSS', 'Bootstrap', 
   'MySQL', 'Express'],
   myRole:Backend Developer,
   Description: A streamlined website that connects students 
   with nearby hostels effortlessly. Key features include easy 
   communication between students and hostel owners, detailed 
   residence information, tour booking, user reviews, 
   and map integration for location-based decisions.,
    
};
    `;

  return (

    <div className="max-w-xl max-h-dvh bg-[#0b0e32] rounded-lg shadow-lg p-4 text-[0.55rem] lg:text-[1.1rem] lg:max-w-2xl lg:max-h-dvh ">
      {/* Mac Window UI (Fake) */}
      <div className="flex items-center mb-2">

      <div className="flex items-center gap-2 ml-4">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <span className="flex-grow text-center  text-[#16f2b3] mr-14 font-semibold">My Project</span>

      </div>
      <hr className="border-0 h-1 bg-white rounded-full mb-2"></hr>
      {/* Syntax Highlighted Code */}
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        customStyle={{
          backgroundColor: "transparent",
          overflow:"hidden",
          lineHeight: "1.2",
          whiteSpace: "pre-wrap", // Ensures wrapping
          wordBreak: "break-word", // Breaks long words
          fontFamily: "'Fira Code', monospace", // Custom font
          
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>

  );
}
