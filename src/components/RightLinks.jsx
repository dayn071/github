import React from "react";

const RightLinks = () => {
  return (
    <div className="right-side-links border border-[#d1d9e0] rounded-[9px] mt-6">
      <div className="row  mb-8 p-4">
        <h2 className="text-[14px] font-medium mb-[16px] pt-">
          Latest from our changelog
        </h2>
        <ul className="relative ">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[0.2px] bg-gray-200"></div>

          <li className="relative pl-7 mb-1.5">
            <span className="absolute left-1 mt-1 w-2 h-2 bg-gray-300 rounded-full"></span>
            <div className="text-[12px] text-[#59636e]">2 days ago</div>
            <a className="text-[14px] cursor-pointer hover:underline hover:text-blue-600">
              Optionally skip approval for Copilot coding agent Actions...
            </a>{" "}
          </li>
          <li className="relative pl-7 mb-1.5">
            <span className="absolute left-1 mt-1 w-2 h-2 bg-gray-200 rounded-full"></span>
            <div className="text-[12px] text-[#59636e]">5 days ago</div>
            <a className="text-[14px] cursor-pointer hover:underline hover:text-blue-600">
              Self-hosted runner minimum version enforcement paused
            </a>
          </li>
          <li className="relative pl-7 mb-1.5">
            <span className="absolute left-1 mt-1 w-2 h-2 bg-gray-300 rounded-full"></span>
            <div className="text-[12px] text-[#59636e]">4 days ago</div>
            <a className="text-[14px] cursor-pointer hover:underline hover:text-blue-600">
              Updates to GitHub Copilot for students
            </a>
          </li>
          <li className="relative pl-7 mb-1.5">
            <span className="absolute left-1 mt-1 w-2 h-2 bg-gray-300 rounded-full"></span>
             <div className="text-[12px] text-[#59636e]">4 hours ago</div>
            <a className="text-[14px] cursor-pointer hover:underline hover:text-blue-600">
              REST API version 2026-03-10 is now available
            </a>
          </li>
          <li>
            <a className="text-[11px] text-[#59636e] ms-8 cursor-pointer  hover:text-blue-600">View changelog &rarr;</a>
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default RightLinks;
