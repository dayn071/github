import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="p-[48px_0px_40px] ps-[16px] lg:ps-[48px] xl:ps-[26px] flex md:flex-row flex-col-reverse justify-between">
      {/* Left section - Copyright */}
      <div className="flex  items-center justify-center mt-2 ms-3 text-[#59636e]">
        <span>
          <GitHubIcon sx={{ fontSize: 26, color: "#59636e" }} />
        </span>
        <span className="text-[12px] ms-2">
          &copy; {new Date().getFullYear()} GitHub, Inc.
        </span>
      </div>

      {/* Right section - Links */}
      <ul className="text-[12px] text-[#59636e] flex flex-wrap items-center justify-center gap-x-3">
        <li>
          <a className="hover:underline hover:text-blue-500 cursor-pointer">
            Terms
          </a>
        </li>
        <li>
          <a className="hover:underline hover:text-blue-500 cursor-pointer">
            Privacy
          </a>
        </li>
        <li>
          <a className="hover:underline hover:text-blue-500 cursor-pointer">
            Security
          </a>
        </li>
        <li>
          <a className="hover:underline hover:text-blue-500 cursor-pointer">
            Status
          </a>
        </li>
        <li>
          <a className="hover:underline hover:text-blue-500 cursor-pointer">
            Community
          </a>
        </li>
        <li>
          <a className="hover:underline hover:text-blue-500 cursor-pointer">
            Docs
          </a>
        </li>
        <li>
          <a className="hover:underline hover:text-blue-500 cursor-pointer">
            Contact
          </a>
        </li>
        <li>
          <a className="hover:underline hover:text-blue-500 cursor-pointer">
            Manage Cookies
          </a>
        </li>
        <li>
          <button className="hover:underline hover:text-blue-500 cursor-pointer whitespace-nowrap">
            Do not share my personal information
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
