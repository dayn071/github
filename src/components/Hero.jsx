import React from "react";
import MessageIcon from "@mui/icons-material/Message";
import AddIcon from "@mui/icons-material/Add";
import FolderIcon from "@mui/icons-material/Folder";
import SendIcon from "@mui/icons-material/Send";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CallMergeIcon from "@mui/icons-material/CallMerge";

const Hero = () => {
  return (
    <div className="px-[16px] md:px-[24px] lg:px-[48px] xl:px-[26px] pt-6 ">
      <div className="dashboard max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4 sm:mb-5 md:mb-[16px]">
          <h2 className="text-xl sm:text-2xl md:text-[24px] font-medium text-gray-900">
            Home
          </h2>
        </div>

        {/* Main Form -  */}
        <div
          tabIndex={0}
          className="mb-3 focus-within:outline-none focus-within:border-[#0969da] focus-within:ring-1 focus-within:ring-[#0969da] transition-colors border border-transparent rounded-[15px]"
        >
          <form className="rounded-[15px]  flex flex-col justify-around border border-[#d1d9e0] h-[126px] w-full bg-white">
            {/* Textarea */}
            <div className="p-1 ">
              <textarea
                placeholder="Ask Anything"
                name="claude"
                id="claude"
                rows="2"
                className="w-full  resize-none rounded-lg h-[56px] focus:outline-none  placeholder:align-middle placeholder:ps-2 placeholder:pt-2 focus:border-blue-500 text-sm sm:text-base"
              ></textarea>
            </div>

            {/* Action Buttons  */}
            <div className="flex justify-between p-[8px_12px] ">
              {/* Ask Button */}
              <div className="flex me-2">
                <div className="w-full sm:w-auto">
                  <button className="w-full md:w-[90px] h-[32px] border border-[#d1d9e0] rounded-[8px] hover:bg-gray-50">
                    <span className="flex justify-around items-center px-2">
                      <MessageIcon
                        sx={{
                          fontSize: 14,
                          color: "#787e85",
                          cursor: "pointer",
                        }}
                      />
                      <span className="font-medium text-[14px] text-[#25303b]  hidden md:block">
                        Ask
                      </span>
                      <span className="text-[#25303b]   hidden md:block text-[8px] text-[#787e85]">
                        ▼
                      </span>
                    </span>
                  </button>
                </div>

                {/* Repositories on mobile */}
                <div className="flex w-full sm:w-auto items-center gap-x-2 ms-2">
                  <button className="flex-1 sm:flex-none md:w-[165px] h-[32px] border border-[#d1d9e0] rounded-[8px] hover:bg-gray-50">
                    <span className="flex justify-around items-center px-2">
                      <FolderIcon
                        sx={{
                          fontSize: 14,
                          color: "#787e85",
                          cursor: "pointer",
                        }}
                      />
                      <span className="font-medium text-[14px] text-[#25303b] truncate hidden md:block">
                        All repositories
                      </span>
                      <span className="text-[#25303b] text-[8px] text-[#787e85] hidden md:block">
                        ▼
                      </span>
                    </span>
                  </button>
                  <button className="w-[32px] h-[32px] border border-[#d1d9e0] rounded-[4px] hover:bg-gray-50 flex items-center justify-center">
                    <AddIcon
                      sx={{ fontSize: 18, cursor: "pointer", color: "#787e85" }}
                    />
                  </button>
                </div>
              </div>
              {/* Right section */}
              <div className="flex items-center justify-end gap-1 sm:gap-2 md:gap-3 w-auto">
                <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                 <span className="block truncate 
  min-[768px]:w-[10px]
  min-[801px]:w-[40px]
  min-[841px]:w-[60px]
  min-[881px]:w-[80px]
  min-[921px]:w-[100px]
  min-[961px]:w-[120px]">
  Claude Haiko 4.5
</span>
                  <span className="text-[#787e85] text-[8px] flex-shrink-0">
                    ▼
                  </span>
                </button>
                <div className="h-4 w-px bg-gray-300 flex-shrink-0"></div>
                <button className="text-gray-600 hover:text-gray-900 flex-shrink-0">
                  <SendIcon sx={{ fontSize: 20, color: "#787e85" }} />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Action Buttons Grid */}
        <div className="flex flex-wrap justify-center gap-y-2 gap-x-3 my-2 ">
          <button className="flex items-center justify-center gap-x-2  border border-[#d1d9e0] rounded-[12px] cursor-pointer px-3 sm:px-4 py-2 hover:bg-gray-50 whitespace-nowrap">
            <CloudUploadIcon sx={{ height: 22, width: 22, color: "#787e85" }} />
            <span className="text-[#25282e] text-xs sm:text-sm">Agent</span>
          </button>

          <button className="flex items-center justify-center gap-x-2 border cursor-pointer border-[#d1d9e0] rounded-[12px] px-3 sm:px-4 py-2 hover:bg-gray-50 whitespace-nowrap">
            <RadioButtonUncheckedIcon
              sx={{ height: 22, width: 22, color: "#787e85" }}
            />
            <span className="text-[#25282e] text-xs sm:text-sm">
              Create Issue
            </span>
          </button>

          <button className="flex items-center justify-center gap-x-2 cursor-pointer border border-[#d1d9e0] rounded-[12px] px-3 sm:px-4 py-2 hover:bg-gray-50 whitespace-nowrap">
            <InsertDriveFileIcon
              sx={{ height: 22, width: 22, color: "#787e85" }}
            />
            <span className="text-[#25282e] text-xs sm:text-sm">
              Write Code
            </span>
          </button>

          <button className="flex items-center justify-center gap-x-2 cursor-pointer border border-[#d1d9e0] rounded-[12px] px-3 sm:px-4 py-2 hover:bg-gray-50 whitespace-nowrap">
            <CallMergeIcon sx={{ height: 22, width: 22, color: "#787e85" }} />
            <span className="text-[#25282e] text-xs sm:text-sm">Git</span>
          </button>

          <button className="flex items-center justify-center cursor-pointer gap-x-2 border border-[#d1d9e0] rounded-[12px] px-3 sm:px-4 py-2 hover:bg-gray-50 whitespace-nowrap">
            <CallMergeIcon sx={{ height: 22, width: 22, color: "#787e85" }} />
            <span className="text-[#25282e] text-xs sm:text-sm">
              Pull Requests
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
