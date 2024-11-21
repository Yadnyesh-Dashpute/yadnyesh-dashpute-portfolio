"use client"
import { useCallback, useRef } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { useMousePosition } from "./use-mouse-position"
import { cn } from "../../libs/utils"

function calculateCardRotation({
  currentX,
  currentY,
  centerX,
  centerY,
  maxRotationX,
  maxRotationY,
}: {
  currentX: number;
  currentY: number;
  centerX: number;
  centerY: number;
  maxRotationX: number;
  maxRotationY: number;
}) {
  // Calculate the distance from the center
  const deltaX = currentX - centerX;
  const deltaY = currentY - centerY;

  // Calculate the maximum distance (assuming a rectangular area)
  const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
  // Calculate the actual distance
  const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  // Calculate the rotation factor (0 to 1)
  const rotationFactor = distance / maxDistance;

  // Calculate rotations (inverted for natural tilt effect)
  const rotationY = ((-deltaX / centerX) * maxRotationY * rotationFactor).toFixed(2);
  const rotationX = ((deltaY / centerY) * maxRotationX * rotationFactor).toFixed(2);
  return { rotationX, rotationY };
}


interface propTypes {
  className?: string;
  year: string;
  degName: string;
  uniName: string;
  branchName: string;
}



export default function ProjectCard({ className,year, degName, uniName, branchName }: propTypes) {

  const containerRef = useRef<HTMLDivElement>(null);
  const resetRef = useRef<NodeJS.Timeout>();

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    if (!containerRef.current) {
      return;
    }

    const { width, height } = containerRef.current.getBoundingClientRect();
    const { rotationX, rotationY } = calculateCardRotation({
      centerX: width / 2,
      centerY: height / 2,
      currentX: x,
      currentY: y,
      maxRotationX: 4,
      maxRotationY: 6,
    });
    containerRef.current.style.setProperty("--x", `${rotationX}deg`);
    containerRef.current.style.setProperty("--y", `${rotationY}deg`);
  }, []);

  useMousePosition(containerRef, update);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex transform-gpu flex-col gap-2 rounded-3xl border border-border bg-[#131327] p-4 text-zinc-200 shadow-lg transition-transform ease-linear will-change-transform max-w-screen-sm h-40",
        className,
      )}
      style={{
        transform: "perspective(400px) rotateX(var(--x)) rotateY(var(--y))",
        transitionDuration: "50ms",
      }}
      onMouseEnter={() => {
        resetRef.current = setTimeout(() => {
          if (!containerRef.current) {
            return;
          }

          // Reset the transition duration to 0 so that the mouse movement is smooth
          containerRef.current.style.transitionDuration = "0ms";
        }, 300);
      }}
      onMouseLeave={() => {
        clearTimeout(resetRef.current);
        if (!containerRef.current) {
          return;
        }

        containerRef.current.style.transitionDuration = "50ms";
        containerRef.current.style.setProperty("--x", "0deg");
        containerRef.current.style.setProperty("--y", "0deg");
      }}
    >
    
    
      {/* Year Range */}
      <span className="text-teal-300 text-sm text-center sm:text-xs">{year}</span>

      {/* Main Content */}
      <div className="flex items-center space-x-4 sm:space-x-2">
        {/* Icon */}
        <FaUserGraduate className="h-10 w-10 text-[#402d75] mt-2 ml-4" />

        {/* Degree and Details */}
        <div className="flex flex-col space-y-1 sm:space-y-0">
          <h1 className="text-white font-semibold text-lg sm:text-[1.2rem]">{degName}</h1>
          <p className="text-gray-400 font-semibold text-sm sm:text-[0.7rem]">{branchName}</p>
          <p className="text-zinc-400 text-sm sm:text-xs">{uniName}</p>
        </div>
      </div>
    </div>
  );
}
