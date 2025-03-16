import Header from "../Home/homecomponents/Header";
import Request from "../ChatScreen/request"
import ChatDisplay from "../ChatScreen/Chatdisplay"
import ProfilePicture from "../../assets/ProfilePicture.svg";
import Textboxsearch from "../Home/homecomponents/Textboxsearch";
import reels from "../../assets/reels.svg";
import ailogo from "../../assets/ailogo.svg";
import Selected from "../../assets/Selected.svg";
import Explore from "../../assets/Explore.svg";
import Notifications from "../../assets/Notifications.svg";
import Bookmark from "../../assets/Bookmark.svg";
import Lists from "../../assets/Lists.svg";
import Profile from "../../assets/Profile.svg";
import More from "../../assets/More.svg";
import Ellipsis from "../../assets/Ellipsis.svg";
import MoreSticker from "./MoreSticker";
import { tempData } from "../../temp/SearchResultData";



export default function MoreStickerscreen() {
  return (

    <div className="flex relative h-screen">


      {/* Sidebar */}

      <div className=" bg-white fixed shadow-md top-0 left-0  grid-flow-col border-r-2 border-r-customGray max-w-64 h-screen place-content-center z-50 ">
        <div className="flex xl:ml-8 mt-5 mb-7 xl:mr-10 md:ml-6">
          <img src={ailogo} className="xl:w-7 xl:h-7 md:w-7 md:h-7" />

          <div className="ml-3 md:hidden xl:block">
            <Textboxsearch data={tempData}/>
          </div>
        </div>
        <div className="flex flex-col xl:ml-8 md:ml-6">
          <div className="flex mb-5">
            <img src={Selected} className="mr-3" />
            {/* <TagSharpIcon className="mr-3 w-1/8 " /> */}
            <div className="font-roboto font-bold text-regular xl:block md:hidden">
              Home
            </div>
          </div>
          <div className="flex mb-5">
            <img src={Explore} className="mr-3" />
            <div className="font-roboto font-bold text-regular xl:block md:hidden">
              Explore
            </div>
          </div>
          <div className="flex mb-5">
            <img src={Notifications} className="mr-3" />
            <div className="font-roboto font-bold text-regular xl:block md:hidden">
              Notifications
            </div>
          </div>
          <div className="flex mb-5">
            <img src={reels} className="mr-3" />
            <div className="font-roboto font-bold text-regular xl:block md:hidden">
              Reels
            </div>
          </div>
          <div className="flex mb-5">
            <img src={Bookmark} className="mr-3" />
            <div className="font-roboto font-bold text-regular float-right xl:block md:hidden">
              Bookmark
            </div>
          </div>
          <div className="flex mb-5">
            <img src={Lists} className="mr-3" />
            <div className="font-roboto font-bold text-regular float-right xl:block md:hidden">
              Lists
            </div>
          </div>
          <div className="flex mb-5">
            <img src={Profile} className="mr-3" />
            <div className="font-roboto font-bold text-regular float-right xl:block md:hidden">
              Profile
            </div>
          </div>
          <div className="flex mb-5">
            <img src={More} className="mr-3" />
            <div className="font-roboto font-bold text-regular float-right xl:block md:hidden">
              More
            </div>
          </div>
        </div>
        <button className="md:hidden xl:block flex justify-center ml-5 mr-4 w-[200px] h-12 bg-peterriver rounded-3xl text-regular text-white items-center font-roboto">
          Upload post
        </button>
        <div className="mt-32 mb-3 ">
          <div className="xl:flex xl:ml-3 md:ml-5">
            <div className="w-9 mr-2 h-8">
              <img src={ProfilePicture} className="rounded-2xl" />
            </div>
            <div className="flex flex-col justify-center h-9 md:hidden xl:block ">
              <div className="font-roboto text-regular font-bold mb-[-7px]">
                Jerome Bell
              </div>
              <div className="font-sectiontitle text-gray-500 ">
                @afonsoinnocenter
              </div>
            </div>
            <div className="w-8 h-8 xl:ml-6 md:mt-3 rounded-2xl">
              <img src={Ellipsis} className="" />
            </div>
          </div>
        </div>
      </div>

        {/* home */}


      <div className="ml-64">
        <div>
          <Header />
        </div>
        <div className="flex -ml-40">
          <div className="ml-40 border border-neutral-300">
            <Request />
          </div>
          <div className="w-full ml-8">
            <ChatDisplay />
          </div>
        </div>
      </div>

      <MoreSticker />

    </div>

  );
}