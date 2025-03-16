
import { IoMdHome } from "react-icons/io";
import menu from "../../../assets/menu.svg";
import image from "../../../assets/image.svg";
import thundar from "../../../assets/thundar.svg";
import belllll from "../../../assets/bellll.svg";
import ailogo from "../../../assets/ailogo.svg";
import Textboxsearch from "./Textboxsearch";
import { useNavigate, useLocation } from "react-router-dom";
import userprofile from "../../../assets/userprofile.svg";
import { MdLiveTv } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
 
  const menuItems = [
    { icon: <IoMdHome />, name: "home" },
    { icon: <MdLiveTv />, name: "tv" },
    { icon: <FaHouseUser />, name: "house" },
    { icon: <FaUserFriends />, name: "followers" },
    { icon: <MdEdit />, name: "edit" },
  ];
  const searchData = [
    { id: 1, picture: userprofile, username: "ted", idname: "TED Talks" },
    { id: 1, picture: userprofile, username: "ted", idname: "TED Talks" },
    { id: 1, picture: userprofile, username: "ted", idname: "TED Talks" },
    { id: 1, picture: userprofile, username: "ted", idname: "TED Talks" },
    { id: 1, picture: userprofile, username: "ted", idname: "TED Talks" },
  ];
 
  return (
    <div
      className="xl:w-[calc(100%-16rem)] md:w-[calc(100%-4rem)] w-full h-[60px] fixed z-50 top-0 md:left-18 xl:left-64 flex items-center justify-between lg:pl-40 md:pl-20 bg-customGray"
      style={{ backgroundColor: "#E2E2E2" }}>
      {/* Logo and Search Box */}
      <div className="md:hidden xsm:block xxsm:mr-auto">
        <img src={ailogo} className="h-7 w-7 smi:ml-2" alt="AI Logo" />
      </div>
      <div className="mdi:hidden md:block xxsm:hidden ml-[-65px]">
         <Textboxsearch data={searchData} width="w-80"/>
      </div>

      {/* Center Icons */}
      <div className="mdi:flex block justify-between xxsm:hidden mdi:w-[530px] md:mx-auto">
  {menuItems.map((item) => {
    const isSelected = location.pathname === `/${item.name}`;

    return (
      <div
        key={item.name}
        className={`p-4 px-8 cursor-pointer flex flex-col items-center hover:bg-slate-300 
          ${isSelected ? "border-b-2 border-blue-500" : ""}`}
        onClick={() => navigate(`/${item.name}`)}
      >
        {/* Icon Component with Dynamic Styling */}
        <div className={`text-3xl mdi:block md:hidden ${isSelected ? "text-blue-500" : ""}`} >
          {item.icon}
        </div>
      </div>
    );
  })}
</div>

      {/* Right-Aligned Icons */}
      <div className="flex justify-between md:w-[270px] xxsm:w-[200px] smi:ml-auto">
        <img src={menu} alt="Menu Icon" className="cursor-pointer" />
        <img src={thundar} alt="Thunder Icon" className="cursor-pointer" />
        <img src={belllll} alt="Bell Icon" className="cursor-pointer" />
        <img src={image} alt="User Profile Icon" className="cursor-pointer" />
      </div>
    </div>
  );
}
