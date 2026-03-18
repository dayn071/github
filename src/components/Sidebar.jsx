import React from "react";
import FolderIcon from "@mui/icons-material/Folder";

const Sidebar = () => {
  return (
    <>
      {/* Parent Div - 320px fixed width */}
      <div className=" mt-2 ">
        {/* Top Repositories Header */}
        <div className="flex items-center justify-between px-4 md:px-6 md:pb-0 pb-6">
          <h2 className="text-[14px] font-semibold text-[#1f2328]">
            Top repositories
          </h2>
          <a
            className="bg-[#1f883d] hover:bg-[#2c974b] hidden md:flex items-center z text-white text-[12px] font-medium px-2 py-[3px] rounded-[6px] h-[28px] whitespace-nowrap transition-colors"
            href=""
          >
            <FolderIcon
              sx={{
                fontSize: 14,
                color: "white",
              }}
            />
            <span>New</span>
          </a>
        </div>
        <div className="">
          <div className="md:border-0 border border-gray-300 rounded-[8px] pb-3  mx-4 md:mx-0">
            {/* Search Box */}
            <div className="px-4 md:px-6 mb-2 ">
              {" "}
              <input
                className="w-full mt-2 h-[32px] px-3 text-[14px] border border-[#d0d7de] rounded-[6px]  placeholder:text-[#656d76] placeholder:text-[14px] focus:outline-none focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da] transition-colors"
                type="text"
                placeholder="Find a repository..."
              />
            </div>

            {/* Repository List */}
            <ul className="text-[#1f2328] px-4 md:px-6">
              {" "}
              {/* 👈 Same padding here too */}
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 py-[4px] text-[14px] hover:underline w-full"
                  >
                    <img
                      className="h-4 w-4 rounded-full flex-shrink-0"
                      src="https://avatars.githubusercontent.com/u/183586611?s=16&v=4"
                      alt=""
                    />
                    <span className="truncate text-[14px] text-[#1f2328]">
                      dayn071<span>/</span>github
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
