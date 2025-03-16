import { useNavigate, useLocation } from "react-router-dom";
import ProfilePicture from "../../../assets/ProfilePicture.svg";
import Textboxsearch from "./Textboxsearch";
import ailogo from "../../../assets/ailogo.svg";
import Ellipsis from "../../../assets/Ellipsis.svg";
import userprofile from "../../../assets/userprofile.svg";
// import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { GoHash } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { RiFileList2Line } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { BsPlayCircle } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
export default function Sidemenu() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route
  // const [isSelected, setIsSelected] = useState(false);
  const menuItems = [
    { name: "Home", icon: <IoMdHome />, path: "/home" },
    { name: "Explore", icon: <GoHash />, path: "/explore" },
    {
      name: "Notifications",
      icon: <IoNotificationsOutline />,
      path: "/notifications",
    },
    {
      name: "Messages",
      icon: <CiMail/>,
      path: "/messages",
    },
    { name: "Reels", icon: <BsPlayCircle />, path: "/reels" },
    { name: "Bookmark", icon: <IoBookmarkOutline />, path: "/bookmark" },
    { name: "Lists", icon: <RiFileList2Line />, path: "/lists" },
    { name: "Profile", icon: <CiUser />, path: "/profile" },
    { name: "More", icon: <CgMoreO />, path: "/more" },
  ];
  const searchData = [
    { id: 1, picture: userprofile, username: "ted", idname: "TED Talks" },
    { id: 1, picture: userprofile, username: "ted", idname: "TED Talks" },
    { id: 1, picture: userprofile, username: "ted", idname: "TED Talks" },
    { id: 1, picture: userprofile, username: "ted", idname: "TED Talks" },
    { id: 1, picture: userprofile, username: "ted", idname: "TED Talks" },
  ];

  return (
    <div className=" fixed z-40 top-0 left-0 bg-white flex-col border-r-2 border-r-customGray max-w-64 h-screen hidden md:block">
      {/* Logo and Search Bar */}
      <div className="flex ml-6 mt-2 mb-[8px] xl:mr-10">
        <img
          src={ailogo}
          onClick={() => navigate("/home")}
          className="xl:w-7 xl:h-7 md:w-7 md:h-7 cursor-pointer"
        />
        <div className="ml-3 md:hidden xl:block">
          <Textboxsearch data={searchData} />
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col xl:justify-center md:mx-2 mb-[4px] cursor-pointer">
        {menuItems.map((item) => {
          const isSelected = location.pathname === item.path; // Check if the current route matches

          return (
            <div
              key={item.name}
              className={`flex p-[5px] mb-[2px] rounded-md cursor-pointer items-center
                ${isSelected ? "bg-blue-100 text-blue-500" : "text-black"} 
                hover:bg-slate-200`}
              onClick={() => navigate(item.path)}
            >
              <div className={`mr-2 w-[30px] h-[36px] text-3xl ${isSelected ? "text-blue-500" : ""}`}>
          {item.icon }
        </div>

              <div className="font-roboto font-bold text-regular xl:block md:hidden">
                {item.name}
              </div>
            </div>
          );
        })}
      </div>

      {/* Upload Post Button */}
      <button
        onClick={() => navigate("/createpostpage")}
        className="md:hidden xl:block flex justify-center ml-5 mr-4 mt-5 w-[200px] h-12 hover:bg-blue-600 bg-peterriver rounded-3xl text-regular text-white items-center font-roboto"
      >
        Upload post
      </button>

      {/* User Profile Section */}
      <div className="mt-32 mb-3">
        <div className="xl:flex xl:ml-3 smi:ml-4 cursor-pointer">
          <div className="w-9 mr-2 h-8" onClick={()=>navigate("/profile")}>
            <img src={ProfilePicture} className="rounded-2xl" />
          </div>
          <div onClick={()=>navigate("/profile")} className="flex flex-col justify-center h-9 smi:hidden xl:block">
            <div className="font-roboto text-regular font-bold mb-[-7px]">
              Jerome Bell
            </div>
            <div className="font-sectiontitle text-gray-500">
              @afonsoinnocenter
            </div>
          </div>
          <div className="w-8 h-8 xl:ml-6 md:mt-3 rounded-2xl">
            <img src={Ellipsis} />
          </div>
        </div>
      </div>
    </div>
  );
}
