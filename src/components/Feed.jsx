import React, { useState } from "react";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ExploreIcon from "@mui/icons-material/Explore";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CampaignIcon from "@mui/icons-material/Campaign";

const Feed = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleDropdownFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  

  return (
    <>
      {/* Feed Header */}
      <div className="flex items-center justify-between px-[16px] md:px-[24px] lg:px-[48px] xl:px-[26px] pt-6 md:pt-0">
        <h2 className="text-sm sm:text-base font-medium text-gray-900">Feed</h2>
        <div className="flex gap-2 relative">
          <button
            onClick={toggleDropdownFilter}
            className="text-[#25292e] bg-[#f6f8fa] font-medium text-[14px] border border-[#d1d9e0] rounded-[6px] px-4 flex justify-evenly py-1.5 mt-1 items-center "
          >
            <span className="me-1">
              <UnfoldMoreIcon
                sx={{ height: 16, width: 16, cursor: "pointer" }}
              />
            </span>
            <span className="ms-1 text-[12px] ">Filter</span>
          </button>
          {isFilterOpen && (
            <div className="container flex flex-col h-[420px] overflow-y-auto m-[8px_0px_16px] bg-[#ffffff] w-[310px] border rounded-t-[6px] border-[#d1d9e0] absolute right-0 top-full  z-50">
              <div className="flex flex-shrink-0 mt-1 text-[13px] items-center justify-between h-5 p-[7px_7px_7px_16px]">
                <span className="text-[#1f2823] ">filter</span>
              </div>
              <div className="border-t mt-[8px] py-4 border-t-[#d1d9e0] flex-1 overflow-y-auto min-h-0">
                <div className="events m-[8px_0px_0px] p-[0px_16px]">
                  <h5 className="text-[14px] text-[#1f2823] font-medium">
                    Events
                  </h5>
                  <p className="text-[12px] text-[#59636e] m-[4px_0px_0px]">
                    Activity you want to see on your feed
                  </p>
                </div>
                {/* Event checkboxes */}
                <div className="checkboxes mb-[-1px]">
                  <label className="my-[8px] hover:bg-[#e6e6e6] cursor-pointer h-[57px] ms-2 flex flex-col my-0 px-[7px] py-[16px]">
                    <div className="flex items-center   h-5 ">
                      <input type="checkbox" className="square-checkbox " />
                      <span className="h-4 w-4 mx-2  flex items-center justify-center">
                        <CampaignIcon sx={{ fontSize: 22, color: "#59636e" }} />
                      </span>
                      <h5 className=" text-[14px] font-medium text-[#1f2823]">
                        Announcements
                      </h5>
                    </div>
                    <div className="h-5 text-[12px]  flex flex-col">
                      <span className="text-[#59636e] text-[12px] mt-1 ml-5.5">
                        Special discussion post from repositories
                      </span>
                    </div>
                  </label>
                  <label className="my-[8px] hover:bg-[#e6e6e6] cursor-pointer h-[57px] ms-2 flex flex-col my-0 px-[7px] py-[16px]">
                    <div className="flex items-center   h-5 ">
                      <input type="checkbox" className="square-checkbox " />
                      <span className="h-4 w-4 mx-2  flex items-center justify-center">
                        <CampaignIcon sx={{ fontSize: 22, color: "#59636e" }} />
                      </span>
                      <h5 className=" text-[14px] font-medium text-[#1f2823]">
                        Announcements
                      </h5>
                    </div>
                    <div className="h-5 text-[12px]  flex flex-col">
                      <span className="text-[#59636e] text-[12px] mt-1 ml-5.5">
                        Special discussion post from repositories
                      </span>
                    </div>
                  </label>
                  <label className="my-[8px] hover:bg-[#e6e6e6] cursor-pointer h-[57px] ms-2 flex flex-col my-0 px-[7px] py-[16px]">
                    <div className="flex items-center   h-5 ">
                      <input type="checkbox" className="square-checkbox " />
                      <span className="h-4 w-4 mx-2  flex items-center justify-center">
                        <CampaignIcon sx={{ fontSize: 22, color: "#59636e" }} />
                      </span>
                      <h5 className=" text-[14px] font-medium text-[#1f2823]">
                        Announcements
                      </h5>
                    </div>
                    <div className="h-5 text-[12px]  flex flex-col">
                      <span className="text-[#59636e] text-[12px] mt-1 ml-5.5">
                        Special discussion post from repositories
                      </span>
                    </div>
                  </label>
                  <label className="my-[8px] cursor-pointer hover:bg-[#e6e6e6] h-[57px] ms-2 flex flex-col my-0 px-[7px] py-[16px]">
                    <div className="flex items-center   h-5 ">
                      <input type="checkbox" className="square-checkbox " />
                      <span className="h-4 w-4 mx-2  flex items-center justify-center">
                        <CampaignIcon sx={{ fontSize: 22, color: "#59636e" }} />
                      </span>
                      <h5 className=" text-[14px] font-medium text-[#1f2823]">
                        Announcements
                      </h5>
                    </div>
                    <div className="h-5 text-[12px]  flex flex-col">
                      <span className="text-[#59636e] text-[12px] mt-1 ml-5.5">
                        Special discussion post from repositories
                      </span>
                    </div>
                  </label>
                  <label className="my-[8px] hover:bg-[#e6e6e6]  hover:bg-[#e6e6e6] cursor-pointer h-[57px] ms-2 flex flex-col my-0 px-[7px] py-[16px]">
                    <div className="flex items-center   h-5 ">
                      <input type="checkbox" className="square-checkbox " />
                      <span className="h-4 w-4 mx-2  flex items-center justify-center">
                        <CampaignIcon sx={{ fontSize: 22, color: "#59636e" }} />
                      </span>
                      <h5 className=" text-[14px] font-medium text-[#1f2823]">
                        Announcements
                      </h5>
                    </div>
                    <div className="h-5 text-[12px]  flex flex-col">
                      <span className="text-[#59636e] text-[12px] mt-1 ml-5.5">
                        Special discussion post from repositories
                      </span>
                    </div>
                  </label>
                  <label className="hover:bg-[#e6e6e6] my-[8px] cursor-pointer h-[57px] ms-2 flex flex-col my-0 px-[7px] py-[16px]">
                    <div className="flex items-center   h-5 ">
                      <input type="checkbox" className="square-checkbox " />
                      <span className="h-4 w-4 mx-2  flex items-center justify-center">
                        <CampaignIcon sx={{ fontSize: 22, color: "#59636e" }} />
                      </span>
                      <h5 className=" text-[14px] font-medium text-[#1f2823]">
                        Announcements
                      </h5>
                    </div>
                    <div className="h-5 text-[12px]  flex flex-col">
                      <span className="text-[#59636e] text-[12px] mt-1 ml-5.5">
                        Special discussion post from repositories
                      </span>
                    </div>
                  </label>
                  <label className="my-[8px] hover:bg-[#e6e6e6] cursor-pointer h-[57px] ms-2 flex flex-col my-0 px-[7px] py-[16px]">
                    <div className="flex items-center   h-5 ">
                      <input type="checkbox" className="square-checkbox " />
                      <span className="h-4 w-4 mx-2  flex items-center justify-center">
                        <CampaignIcon sx={{ fontSize: 22, color: "#59636e" }} />
                      </span>
                      <h5 className=" text-[14px] font-medium text-[#1f2823]">
                        Announcements
                      </h5>
                    </div>
                    <div className="h-5 text-[12px]  flex flex-col">
                      <span className="text-[#59636e] text-[12px] mt-1 ml-5.5">
                        Special discussion post from repositories
                      </span>
                    </div>
                  </label>
                  <label className="my-[8px] hover:bg-[#e6e6e6] cursor-pointer h-[57px] ms-2 flex flex-col my-0 px-[7px] py-[16px]">
                    <div className="flex items-center   h-5 ">
                      <input type="checkbox" className="square-checkbox " />
                      <span className="h-4 w-4 mx-2  flex items-center justify-center">
                        <CampaignIcon sx={{ fontSize: 22, color: "#59636e" }} />
                      </span>
                      <h5 className=" text-[14px] font-medium text-[#1f2823]">
                        Announcements
                      </h5>
                    </div>
                    <div className="h-5 text-[12px]  flex flex-col">
                      <span className="text-[#59636e] text-[12px] mt-1 ml-5.5">
                        Special discussion post from repositories
                      </span>
                    </div>
                  </label>
                  <label className="my-[8px] hover:bg-[#e6e6e6] cursor-pointer h-[57px] ms-2 flex flex-col my-0 px-[7px] py-[16px]">
                    <div className="flex items-center   h-5 ">
                      <input type="checkbox" className="square-checkbox " />
                      <span className="h-4 w-4 mx-2  flex items-center justify-center">
                        <CampaignIcon sx={{ fontSize: 22, color: "#59636e" }} />
                      </span>
                      <h5 className=" text-[14px] font-medium text-[#1f2823]">
                        Announcements
                      </h5>
                    </div>
                    <div className="h-5 text-[12px]  flex flex-col">
                      <span className="text-[#59636e] text-[12px] mt-1 ml-5.5">
                        Special discussion post from repositories
                      </span>
                    </div>
                  </label>
                  <label className="my-[8px] hover:bg-[#e6e6e6] cursor-pointer h-[57px] ms-2 flex flex-col my-0 px-[7px] py-[16px]">
                    <div className="flex items-center   h-5 ">
                      <input type="checkbox" className="square-checkbox " />
                      <span className="h-4 w-4 mx-2  flex items-center justify-center">
                        <CampaignIcon sx={{ fontSize: 22, color: "#59636e" }} />
                      </span>
                      <h5 className=" text-[14px] font-medium text-[#1f2823]">
                        Announcements
                      </h5>
                    </div>
                    <div className="h-5 text-[12px]  flex flex-col">
                      <span className="text-[#59636e] text-[12px] mt-1 ml-5.5">
                        Special discussion post from repositories
                      </span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex justify-end border-t border-[#d1d9e0] p-2 flex-shrink-0">
                <button className="text-[#25292e] h-8 py-2 px-4 cursor-pointer text-[14px] font-medium flex items-center">
                  <span>Reset to default</span>
                </button>
                <button className="bg-[#1f883d] py-2 px-4 h-8 cursor-pointer text-[#ffffff] text-[14px] font-medium rounded-[8px] flex items-center">
                  <span>Save</span>
                </button>
              </div>
            </div>
          )}
          <button className="flex  lg:hidden items-center gap-1 sm:gap-2 bg-[#f6f8fa] rounded-[8px] text-[#25292e] px-1.5 py-1.5   border border-[#d1d9e0] text-xs sm:text-sm hover:bg-gray-100">
            <ExploreIcon
              sx={{
                height: 16,
                width: 16,
                cursor: "pointer",
                color: "#555d66",
              }}
            />
          </button>
        </div>
      </div>
      {/*  */}
      {/* Updates Section */}
      <div className="px-[16px] md:px-[24px] lg:px-[48px] xl:px-[26px] pt-2 ">
        {/* First Update Card */}
        <div className="rounded-t-[6px] border border-[#d1d9e0] bg-white overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-2 px-3 sm:px-4 pt-3  border-[#d1d9e0]">
            <TrendingUpIcon sx={{ height: 18, width: 18, color: "#59636e" }} />
            <h3 className="text-xs sm:text-sm text-[#59636e]">
              Trending repositories
            </h3>
            <span className="text-[#59636e] text-[9px]">•</span>
            <a
              href="#"
              className="text-xs underline decoration-blue-500 sm:text-sm text-[#0969da] hover:underline"
            >
              See more
            </a>
          </div>

          {/* Content */}
          <div className="px-4 py-2 ">
            {/* Repo Info */}
            <div className="mb-2 flex flex-inline-block sm:flex-row sm:items-center justify-between gap-x-3">
              <a
                href="#"
                className="flex items-center gap-2 text-sm font-medium hover:underline"
              >
                <img
                  className="h-4 w-4 sm:h-5 sm:w-5 rounded-full"
                  src="https://avatars.githubusercontent.com/u/3710007?s=40&v=4"
                  alt="avatar"
                />
                <span className="truncate max-w-[200px]">
                  andrewehr/context-hub
                </span>
              </a>

              <button className="flex items-center justify-center gap-x-2 text-[#25292e] bg-[#f6f8fa] px-3 py-1 h-7  border border-[#d1d9e0] rounded-[8px] hover:bg-gray-100">
                <StarBorderIcon sx={{ fontSize: 16 }} />
                <span className="text-xs sm:text-sm">Star</span>
                <div className="border-l-[1px] h-7 border-[#d1d9e0] "></div>
                <span className="text-[#25303b] text-[9px] pl-1">▼</span>
              </button>
            </div>

            {/* Description */}
            <div className="w-[70%] sm:w-[80%] md:w-[70%] lg:w-[80%]">
              <p className="text-xs sm:text-sm text-gray-600   ">
                A complete AI agency at your fingertips From frontend wizards to
                Reddit.
              </p>
            </div>

            {/* further Info */}
            <div className="flex items-center gap-3 sm:gap-4 mt-3">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-200"></div>
                <span className="text-xs text-[#59636e]">JavaScript</span>
              </div>
              <div className="flex items-center gap-1">
                <StarBorderIcon sx={{ fontSize: 14, color: "#59636e" }} />
                <span className="text-xs text-[#59636e]">32.2k</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Update Card */}
        <div className="rounded-b-[12px] border border-t-0 border-[#d1d9e0] bg-white overflow-hidden">
          <div className="p-3 sm:p-4">
            <div className="flex flex-inline-block sm:flex-row sm:items-center justify-between gap-3">
              <a
                href="#"
                className="flex items-center gap-2 text-sm font-medium hover:underline"
              >
                <img
                  className="h-4 w-4 sm:h-5 sm:w-5 rounded-full"
                  src="https://avatars.githubusercontent.com/u/3710007?s=40&v=4"
                  alt="avatar"
                />
                <span className="truncate max-w-[200px]">
                  andrewehr/context-hub
                </span>
              </a>

              <button className="flex items-center  justify-center gap-2 bg-[#f6f8fa] text-[#25292e] h-7 px-3 py-1 border border-[#d1d9e0] rounded-[8px] hover:bg-gray-100  ">
                <StarBorderIcon sx={{ fontSize: 16 }} />
                <span className="text-xs sm:text-sm">Star</span>{" "}
                <div className="border-l-[1px] h-7 border-[#d1d9e0] "></div>
                <span className="text-[#25303b] text-[9px]  pl-1 h-full flex items-center">
                  ▼
                </span>
              </button>
            </div>

            <div className="w-[70%] sm:w-[80%] md:w-[70%] lg:w-[80%]">
              <p className=" text-xs sm:text-sm text-gray-600 mt-2  ">
                A complete AI agency at your fingertips - From frontend wizards
                to Reddit. A complete AI agency at your fingertips - From
                frontend wizards to Reddit. A complete AI agency at your
                fingertips - From frontend wizards to Reddit.
              </p>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 mt-3">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-300"></div>
                <span className="text-xs text-[#59636e]">Shell</span>
              </div>
              <div className="flex items-center gap-1">
                <StarBorderIcon sx={{ fontSize: 14, color: "#59636e" }} />
                <span className="text-xs text-[#59636e]">3.32k</span>
              </div>
            </div>
          </div>
        </div>
        {/* Overlay dropdown e background */}
      {isFilterOpen && (
        <div 
          className="fixed inset-0 bg-[#c8d1da66] z-40"
          onClick={() => setIsFilterOpen(false)}
        />
      )}
      </div>
    </>
  );
};

export default Feed;
