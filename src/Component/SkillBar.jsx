import React from "react";

export default function SkillBar({ logo, skill }) {
  return (
    <div className="mb-4 sm:w-full">
      <div className="flex items-center gap-x-1 mb-1">
        <span className="text-sm font-medium text-blue-700 dark:text-black">
          <img src={logo} alt={skill} className="w-9" />
        </span>
        <span className="text-2xl font-medium text-blue-700 dark:text-black">
          {skill}
        </span>
      </div>
    </div>
  );
}
