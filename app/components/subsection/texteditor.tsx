"use client"
import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; 

import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function Texteditor() {
    const codeString = `
const coder = {
    name: 'Yadnyesh Dashpute',
    skills: ['Core Java', 'Python', 'NextJs', 'React', 'MySql', 
             'Javascript'],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5
        );
    }
};
    `;

    return (
        
            <div className="max-w-3-xl w-full bg-[#0b0e32] rounded-lg shadow-lg p-4 text-[0.6rem] lg:text-[1.1rem] ">
                {/* Mac Window UI (Fake) */}
                <div className="flex items-center gap-2 mb-4 ml-4">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <hr className="border-0 h-1 bg-white rounded-full mb-2"></hr>
                {/* Syntax Highlighted Code */}
                <SyntaxHighlighter
                    language="javascript"
                    style={dracula}
                    customStyle={{
                        backgroundColor: "transparent",
                        // fontSize: "1.1rem", // Smaller for mobile
                        lineHeight: "1.5",
                        whiteSpace: "pre-wrap", // Ensures wrapping
                        wordBreak: "break-word", // Breaks long words
                        fontFamily: "'Fira Code', monospace", // Custom font
                        padding: "20px",
                    }}
                >
                    {codeString}
                </SyntaxHighlighter>
            </div>
        
    );
}
