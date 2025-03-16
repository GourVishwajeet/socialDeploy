
import ProfilePicture from "../../assets/ProfilePicture.svg";
import Textboxsearch from "../Home/homecomponents/Textboxsearch";
import reels from "../../assets/reels.svg";
import ailogo from "../../assets/ailogo.svg";
import Explore from "../../assets/Explore.svg";
import Notifications from "../../assets/Notifications.svg";
import Bookmark from "../../assets/Bookmark.svg";
import Lists from "../../assets/Lists.svg";
import Profile from "../../assets/Profile.svg";
import More from "../../assets/More.svg";
import Ellipsis from "../../assets/Ellipsis.svg";
import Post from "../Home/homecomponents/Post";
import Story from "../Home/homecomponents/Story";
import Header from "../Home/homecomponents/Header";
import icc from "../../assets/icc.svg";
import Ellipse5 from "../../assets/Ellipse5.svg";
import numbernoti from "../../assets/numbernoti.svg";
import Cake from "../../assets/Cake.svg";
import camerab from "../../assets/Camerab.svg";
import Search from "../../assets/Saerch.svg";
import Setting from "../../assets/settings.svg";
import Profileonline from "../../assets/Profileonline.svg";

import { useNavigate, useLocation } from "react-router-dom";
import Messages from "../../assets/Messages.svg";
import home from "../../assets/home.svg";
import StoryFilters from "./StoryFilters";

export default function FilterImage() {
    
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    { name: "Home", icon: home, path: "/home" },
    { name: "Explore", icon: Explore, path: "/explore" },
    { name: "Notifications", icon: Notifications, path: "/notifications" },
    { name: "Messages", icon: Messages, path: "/messages" },
    { name: "Reels", icon: reels, path: "/reels" },
    { name: "Bookmark", icon: Bookmark, path: "/bookmark" },
    { name: "Lists", icon: Lists, path: "/lists" },
    { name: "Profile", icon: Profile, path: "/profile" },
    { name: "More", icon: More, path: "/more" },
  ];

  const items = [
    { id: 1, picture: Profileonline, name: "Anushka Sharma" },
    { id: 2, picture: Profileonline, name: "Anushka Sharma" },
    { id: 2, picture: Profileonline, name: "Anushka Sharma" },
    { id: 2, picture: Profileonline, name: "Anushka Sharma" },
    { id: 2, picture: Profileonline, name: "Anushka Sharma" },
  ];

  return (
    <div className="relative h-screen">
      
      <div className="flex fixed z-50 top-0 left-0 bg-white flex-col border-r-2 border-r-customGray max-w-64 h-screen xsm:hidden md:block">
        {/* Logo and Search Bar */}
        <div className="flex ml-6 mt-2 mb-[3px] xl:mr-10">
          <img
            src={ailogo}
            onClick={() => navigate("/home")}
            className="xl:w-7 xl:h-7 md:w-7 md:h-7 cursor-pointer"
          />
          <div className="ml-3 md:hidden xl:block">
            <Textboxsearch />
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col xl:justify-center md:mx-2 mb-[1px] cursor-pointer">
          {menuItems.map((item) => {
            const isSelected = location.pathname === item.path; // Check if the current route matches

            return (
              <div
                key={item.name}
                className={`flex p-[11px] mb-[1px] rounded-md cursor-pointer 
                ${isSelected ? "bg-blue-100 text-blue-500" : "text-black"} 
                hover:bg-slate-200`}
                onClick={() => navigate(item.path)}
              >
                <img
                  src={item.icon}
                  className={`mr-1 w-[28px] ${
                    isSelected ? "text-blue-500" : "text-black "
                  }`}
                />
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
          className="md:hidden xl:block flex justify-center ml-5 mr-4 w-[200px] h-12 hover:bg-blue-600 bg-peterriver rounded-3xl text-regular text-white items-center font-roboto"
        >
          Upload post
        </button>

        {/* User Profile Section */}
        <div className="mt-32 mb-3">
          <div className="xl:flex xl:ml-3 smi:ml-4">
            <div className="w-9 mr-2 h-8">
              <img src={ProfilePicture} className="rounded-2xl" />
            </div>
            <div className="flex flex-col justify-center h-9 smi:hidden xl:block">
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

           <div className="flex flex-col w-full xl:ml- flex-grow">
        <Header />
        <main className="overflow-y-auto flex-grow pt-20">
          <div className="flex justify-center  md:pl-20 xl:pl-10 ">
            <div className="flex flex-col   xl:pr-10 lg:ml-3  md:pr-5 ">
              <Story />
              <Post />
            </div>

            <div className="flex flex-col  pr- h-auto smi:hidden lg:block xl:block">
              <div className="flex flex-col w-auto h-auto bg-customGray rounded-md p-5">
                <div className="text-sectiontitle text-gray-600 font-medium">
                  Your Pages and Profiles
                </div>
                <div className="flex mt-3 justify-between w-full">
                  <div className="flex ">
                    <div className="relative mr-2">
                      <img src={icc} />
                      <div className="absolute bottom-0 right-0 top-7">
                        <img src={numbernoti} />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-regular">ICC Officials</p>
                      <p className="text-gray-600 font-medium text-metatitle">
                        <i>@icc_officials</i>
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src={Ellipse5} className="" />
                  </div>
                </div>
              </div>

              <div className="flex max-w-[260px] xl:h-auto bg-customGray rounded-md mt-6">
                <div className="p-5">
                  <div className="text-sectiontitle text-gray-600 font-medium">
                    Birthdays
                  </div>
                  <div className="flex mt-3">
                    <img src={Cake} className="mr-2" />
                    <div>
                      <span className="text-sectiontitle">
                        Anushka
                        <i>
                          <b> and </b>
                        </i>
                        2 others
                        <i>
                          <b> have birthdays today. </b>
                        </i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex max-w-[260px] h-auto bg-customGray rounded-md mt-6 justify-center relative">
                <div className="p-5">
                  <div className="text-sectiontitle text-gray-600 font-medium justify-between flex">
                    Contacts
                    <div className="flex">
                      <img src={camerab} className="mr-3 w-5" />
                      <img src={Search} className="mr-3 w-5" />
                      <img src={Setting} className="w-5" />
                    </div>
                  </div>
                  <div className="mt-8">
                    {items.map((item) => (
                      <div key={item.id} className="mb-2 flex">
                        <img src={item.picture} />
                        <p className="ml-3 text-gray-600 text-sectiontitle font-medium">
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <StoryFilters/>
    </div> 
  );
}