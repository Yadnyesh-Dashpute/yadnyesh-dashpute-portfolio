import { Icon } from '@iconify/react';
import Bordertrail from "../bordertrail";

// Define specific types for SkillC props
interface SkillCProps {
  icon: string;  // The icon name or identifier (a string)
  name: string;  // The name of the skill (a string)
}

export function SkillC({ icon, name }: SkillCProps) {
  return (
    <Bordertrail>
      <div className="flex flex-col mt-8 items-center justify-center hover:scale-110 transform duration-300 m-6">
        {/* Icon */}
        <div className="flex justify-center items-center w-11 h-11">
          <Icon className="h-16 w-16 text-purple-400" icon={icon} />
        </div>
        {/* Name */}
        <span className="text-white text-sm font-semibold uppercase mt-4 text-center truncate">
          {name}
        </span>
      </div>
    </Bordertrail>
  );
}
