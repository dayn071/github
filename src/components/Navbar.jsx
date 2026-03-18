import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import AssistantIcon from "@mui/icons-material/Assistant";
import AddIcon from "@mui/icons-material/Add";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CallMergeIcon from "@mui/icons-material/CallMerge";
import FolderIcon from "@mui/icons-material/Folder";
import InboxIcon from "@mui/icons-material/Inbox";
import React, { useState } from "react";

const Navbar = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const toggleDropdownSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  return (
    <div className="border-b border-[#d1d9e0] bg-[#f6f8fa] h-[64px] flex items-center pe-3 w-full">
      {/* Overlay dropdown e background */}
      {isSearchBarOpen && (
        <div
          className="fixed inset-0 bg-[#c8d1da66] z-40"
          onClick={() => setIsSearchBarOpen(false)}
        />
      )}
      {/* Left section - fixed width */}
      <div className="navbar-left-module flex items-center ms-4 gap-2 flex-shrink-0">
        <div className="flex justify-center rounded-[6px] items-center h-8 w-8 border border-[#d1d9e0]">
          <MenuIcon
            sx={{
              color: "#59636e",
              fontSize: 20,
              cursor: "pointer",
            }}
          />
        </div>
        <GitHubIcon
          sx={{
            fontSize: 32,
            color: "#1F2328",
            cursor: "pointer",
            marginLeft: "4px",
          }}
        />
      </div>

      {/* Middle section - takes remaining space */}
      <div className="navbar-middle-module flex items-center justify-between flex-1 px-4">
        <span className="text-[#1F2328] text-[14px] font-[500] whitespace-nowrap cursor-pointer">
          Dashboard
        </span>

        {/* search bar */}
        <div
          onClick={toggleDropdownSearchBar}
          className="search-bar flex items-center border border-[#d1d9e0] h-[32px] text-[12px] rounded-[7px] px-1.5"
        >
          <div className="flex items-center justify-center gap-1 lg:w-[175px] ">
            <SearchIcon
              sx={{ color: "#656f79", fontSize: "20px", cursor: "pointer" }}
            />
            <span className="text-[#656f79] items-center hidden lg:block me-5">
              <span className="text-[15px] align-middle cursor-pointer">
                type{" "}
                <span className="border inline-flex items-center justify-center rounded-[4px] text-[10px] w-4 h-4 ">
                  /
                </span>{" "}
                to search
              </span>
            </span>
          </div>
        </div>
      </div>

      {isSearchBarOpen && (
        <div className="container flex flex-col  bg-[#ffffff] w-full lg:w-[920px] absolute right-0 top-[2px]  z-50 xl:right-auto xl:left-[90px] rounded-[8px]">
          <div className="flex flex-shrink-0 text-[13px] items-center justify-between h-[32px] my-2 mx-3  border  rounded-[8px] border-[#0969da] ring-1 ring-[#0969da] transition-colors">
            <span className="text-[#59636e] text-5 ms-2">
              <SearchIcon />
            </span>
            <input
              className="w-full  h-[32px] ps-1 text-[14px] placeholder:text-[14px] focus:outline-none "
              type="text"
            />
          </div>
          <ul className="mx-3  mt-2 flex-1 overflow-y-auto min-h-0">
            <li className="h-18 px-2 mt-2 border-b border-[#d1d9e0]">
              <h5 className="text-[12px] text-[#59636e] h-9 font-medium">
                Repositories
              </h5>

              {/* Parent span with flex and justify-between */}
              <span className="cursor-pointer hover:bg-[#c8d1da66] h-8 rounded-[8px] text-[14px] text-[#59636e] mb-2  flex items-center justify-between w-full">
                {/* Left side - Icon and repo id */}
                <span className="flex items-center gap-1">
                  <AssistantIcon sx={{ fontSize: 16 }} />
                  <span>Chat with copilot</span>
                </span>

                {/* Right side*/}
                <span className="text-[#59636e] hover:text-blue-600 cursor-pointer">
                  Start a thread with copilot
                </span>
              </span>
            </li>{" "}
            <li className="h-18  border-b border-[#d1d9e0]">
              <h5 className="text-[12px] px-2 mt-2 text-[#59636e] h-9 font-medium">
                Repositories
              </h5>

              {/* Parent span with flex and justify-between */}
              <span className="px-2 cursor-pointer hover:bg-[#c8d1da66] h-8 rounded-[8px] text-[14px] text-[#59636e] mb-2 flex items-center justify-between w-full">
                {/* Left side - Icon and repo id */}
                <span className="flex items-center gap-1">
                  <AssistantIcon sx={{ fontSize: 16 }} />
                  <span>Chat with copilot</span>
                </span>

                {/* Right side*/}
                <span className="text-[#59636e] hover:text-blue-600 cursor-pointer">
                  Start a thread with copilot
                </span>
              </span>
            </li>
            <li className="h-18  ">
              <h5 className="text-[12px] px-2 mt-2 text-[#59636e] h-9 font-medium">
                Repositories
              </h5>

              {/* Parent span with flex and justify-between */}
              <span className="px-2 cursor-pointer hover:bg-[#c8d1da66] h-8 rounded-[8px] text-[14px] text-[#59636e] mb-2 flex items-center justify-between w-full">
                {/* Left side - Icon and repo id */}
                <span className="flex items-center gap-1">
                  <AssistantIcon sx={{ fontSize: 16 }} />
                  <span>Chat with copilot</span>
                </span>

                {/* Right side*/}
                <span className="text-[#59636e] hover:text-blue-600 cursor-pointer">
                  Start a thread with copilot
                </span>
              </span>
            </li>
            {/* Event checkboxes */}
          </ul>
          <div className="flex justify-between border-t border-[#d1d9e0] p-2 flex-shrink-0">
            <a className="text-[#0969da] h-8 py-2 px-4 cursor-pointer text-[12px] flex items-center">
              <span>Reset to default</span>
            </a>
            <a className=" py-2 px-4 h-8 cursor-pointer text-[#0969da] text-[12px] rounded-[8px] flex items-center">
              <span>Save</span>
            </a>
          </div>
        </div>
      )}
      {/* Right section  */}
      <div className="navbar-right-module flex items-center justify-between gap-1.5  ">
        {/* chat with copilot icon */}
        <div className="hidden md:flex border border-[#d1d9e0] items-center rounded-[5px] overflow-hidden h-[32px]">
          <a
            className="h-full w-[32px] flex items-center justify-center"
            href="#"
          >
            <AssistantIcon
              sx={{ color: "#59636e", fontSize: 18, cursor: "pointer" }}
            />
          </a>
          <button className="px-2 h-full border-l border-[#d1d9e0] flex cursor-pointer items-center justify-center text-[#59636e]">
            &#8595;
          </button>
        </div>

        <span className="hidden md:block w-px h-5 bg-[#d1d9e0]"></span>

        {/* Plus icon */}
        <div className="hidden md:flex border border-[#d1d9e0] items-center rounded-[5px] overflow-hidden h-[32px]">
          <a
            className="h-full w-[32px] flex items-center justify-center"
            href="#"
          >
            <AddIcon
              sx={{ color: "#59636e", fontSize: 18, cursor: "pointer" }}
            />
          </a>
          <button className="px-2 h-full border-l cursor-pointer border-[#d1d9e0] flex items-center justify-center text-[#59636e]">
            &#8595;
          </button>
        </div>

        {/* Other icons */}
        <div className="flex items-center gap-2">
          {/* ErrorOutlineIcon */}
          <div className="hidden md:flex h-[32px] w-[32px] rounded-[5px] items-center justify-center border border-[#d1d9e0]">
            <a
              href="#"
              className="w-full h-full flex items-center justify-center"
            >
              <ErrorOutlineIcon
                sx={{ color: "#59636e", fontSize: 18, cursor: "pointer" }}
              />
            </a>
          </div>

          {/* CallMergeIcon */}
          <div className="hidden md:flex h-[32px] w-[32px] rounded-[5px] items-center justify-center border border-[#d1d9e0]">
            <a
              href="#"
              className="w-full h-full flex items-center justify-center"
            >
              <CallMergeIcon
                sx={{ color: "#59636e", fontSize: 18, cursor: "pointer" }}
              />
            </a>
          </div>

          {/* FolderIcon */}
          <div className="hidden md:flex h-[32px] w-[32px] rounded-[5px] items-center justify-center border border-[#d1d9e0]">
            <a
              href="#"
              className="w-full h-full flex items-center justify-center"
            >
              <FolderIcon
                sx={{ color: "#59636e", fontSize: 18, cursor: "pointer" }}
              />
            </a>
          </div>

          {/* InboxIcon */}
          <div className=" md:flex h-[32px] w-[32px] rounded-[5px] items-center justify-center border border-[#d1d9e0]">
            <a
              href="#"
              className="w-full h-full flex items-center justify-center"
            >
              <InboxIcon
                sx={{ color: "#59636e", fontSize: 18, cursor: "pointer" }}
              />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="h-[32px] w-[32px] rounded-full overflow-hidden cursor-pointer border border-[#d1d9e0] flex-shrink-0">
          <img
            src="https://avatars.githubusercontent.com/u/183586611?v=4&size=64"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
