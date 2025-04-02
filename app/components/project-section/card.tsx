"use client";

import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "../../../components/ui/3d-card";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  githubLink?: string; 
};

export function Card({ title, description, imageUrl,githubLink }:CardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#131327] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] sm:w-[25rem] h-auto rounded-xl p-4 border">
      <CardItem translateZ="50" className="w-full mt-4">
          <Image
            src={imageUrl}
            height="800"
            width="800"
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <CardItem
          translateZ="60"
          className="text-lg font-bold text-white mt-5">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="70"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
        {description}
        </CardItem>
        
        <div className="flex justify-between items-center mt-10">
        <CardItem
    translateZ={20}
    as={Link}
    href={githubLink} // Replace with your GitHub link
    target="_blank"
    className="px-3 py-2 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex items-center gap-2"
  >
    <FaGithub className="text-lg" /> GitHub
  </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
