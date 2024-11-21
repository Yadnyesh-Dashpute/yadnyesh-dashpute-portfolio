import { Icon } from '@iconify/react';
import Bordertrail from "../bordertrail"


export function SkillC({icon,name}:any) {
    
        return (
            <Bordertrail>
            {/* <div className="flex flex-col mt-10 items-center justify-center p-6 m-4 border-2 border-gray-700 bg-[#11152c] rounded-lg hover:scale-110 transform duration-300 w-36 h-32"> */}
            <div className="flex flex-col mt-8 items-center justify-center hover:scale-110 transform duration-300 m-6">
            {/* Icon */}
            <div className="flex justify-center items-center w-11 h-11">
              <Icon
                className="h-16 w-16 text-purple-400"
                icon={icon}
              />
            </div>
            {/* Name */}
            <span className="text-white text-sm font-semibold uppercase mt-4 text-center truncate">
              {name}
            </span>
          </div>
          </Bordertrail>
        );
      };
      
     
      