import { useState } from "react";
import d3 from "../../../public/d3.svg";
import d6 from "../../../public/d6.svg";
import Sidemenu from "../Home/homecomponents/Sidemenu";
import { MdOutlineGridOn } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";
import { GoBookmark } from "react-icons/go";

export default function Tweets() {
  const data = [
    { id: 1, picture: d3 },
    { id: 2, picture: d3 },
    { id: 3, picture: d3 },
    { id: 4, picture: d6 },
    { id: 5, picture: d6 },
    { id: 6, picture: d6 },
  ];
  const [btntext, setBtntext] = useState<string>("Follow");
  const [btntext2, setBtntext2] = useState<string>("Follow");
  const [activeTab, setActiveTab] = useState('posts');

  const handleClick = () => {
    setBtntext((prevText) => (prevText === 'Follow' ? 'Following' : 'Follow'));;
  };
  const handleClick2 = () => {
    setBtntext2((prevText) => (prevText === 'Follow' ? 'Following' : 'Follow'));;
  };
  return (
    <div className="flex">
      <div>
        <Sidemenu />
      </div>
      <div className="w-[610px] flex-col xl:ml-72 md:ml-16">
        <div className="flex items-center">
          <img src="public/tarrow.svg" className="xl:ml-5 md:ml-5 xsm:ml-1" />
          <div className="flex-col">
            <div className="xl:ml-8 md:ml-8 xsm:ml-4 font-bold  text-sm">Name</div>
            <div className="xl:ml-8 md:ml-8 xsm:ml-4 text-xs -mt-1 text-gray-600">9 Tweets</div>
          </div>
        </div>
        <div className="mt-2 ">
          <img src="public/cover.svg" className="xl:w-auto md:w-[500px] xsm:w-[380px]" />
        </div>
        <div className="flex">
          <div className="absolute xl:top-40 ml-4 md:top-28 xsm:top-30">
            <img src="public/davide.svg" className="xl:w-auto md:w-22 xsm:w-17" />
          </div>
          <div className="border border-blue-500 ml-auto xl:mr-6 md:mr-5 xsm:mr-3 mt-2 p-1 rounded-3xl xl:w-25 md:w-22 xsm:w-19 justify-center flex cursor-pointer">
            <div className="text-blue-500 font-semibold xl:text-base md:text-sm xsm:text-xs">
              Edit Profile
            </div>
          </div>
        </div>
        <div className="mt-5 ml-1 font-semibold xl:text-lg md:text-lg xsm:text-base">Davide Biscuso</div>
        <div className="xl:text-sm md:text-sm xsm:text-xs text-gray-500 ml-1 -mt-1">@biscuttu</div>
        <div className="mt-1 ml-1 font-semibold xl:text-base md:text-base xsm:text-sm">Product Designer</div>
        <div className="flex mt-1 ml-1">
          <img src="public/location.svg" />
          <div className="ml-1 text-gray-500   font-medium xl:text-sm md:text-sm xsm:text-xs ">
            London
          </div>
          <img src="public/calendar.svg" className="ml-5" />
          <div className="ml-1 text-gray-500  xl:text-sm md:text-sm xsm:text-xs font-medium ">
            Joined September 2011
          </div>
        </div>
        <div className="flex mt-2 ml-2 items-center xl:text-base md:text-base xsm:text-sm ">
          <div className="font-medium">569</div>
          <div className="text-gray-500 text-pretty font-medium  ml-2">
            Following
          </div>
          <div className="font-medium ml-7">72</div>
          <div className="text-gray-500 text-pretty font-medium  ml-2">
            Followers
          </div>
        </div>
        <div className="flex items-center xl:mt-20 md:mt-5 xl:ml-16 md:ml-3 xsm:ml-2 xsm:mt-20 cursor-pointer text-gray-600">
          <div className={`flex items-center ${activeTab === 'posts' ? "text-black" : ""} `} onClick={() => setActiveTab('posts')}>
          <MdOutlineGridOn/>
          <div className="font-semibold text-sm ml-2">POSTS</div></div>

          <div className={`xl:ml-18 md:ml-7 xsm:ml-6 flex items-center ${activeTab === 'reels' ? "text-black" : ""}`} onClick={() => setActiveTab('reels')}>
          <BiSolidMoviePlay />
          <div className="font-semibold text-sm ml-2">REELS</div></div>

          <div className={`xl:ml-18 md:ml-7 xsm:ml-6 flex items-center ${activeTab === 'saved' ? "text-black" : ""}`} onClick={() => setActiveTab('saved')}>
          <GoBookmark />
          <div className="font-semibold text-sm ml-2">SAVED</div></div>

          <div className={`xl:ml-18 md:ml-7 xsm:ml-6 flex items-center ${activeTab === 'tagged' ? "text-black" : ""}`} onClick={() => setActiveTab('tagged')}>
          <BsPersonSquare />
          <div className="font-semibold text-sm ml-2">TAGGED</div></div>
        </div>
        
        <div className="flex flex-wrap mt-5 md:ml-2 xsm:ml-1">
          {data.map((item) => (
            <div>
              <img
                src={item.picture}
                className="xl:w-48 md:w-24 mr-0.5 -mt-0.5 xsm:w-28"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-col">
        <div className="bg-slate-100 xl:w-96 md:w-72 xl:ml-8 md:ml-3 xl:h-60 md:h-50 mt-5 rounded-3xl xsm:hidden xl:block md:block ">
          <div className="xl:text-xl md:text-lg font-semibold ml-4 ">
            You Might Like
          </div>
          <div className="mt-3">
            <hr />
          </div>
          <div className="flex items-center">
            <div className="mt-3 ml-5">
              <img
                src="/bessie.svg"
                className="rounded-full xl:w-auto md:w-10"
              />
            </div>
            <div className="flex-col">
              <div className="font-semibold xl:text-base md:text-sm ml-3 mt-3">
                Bessie Cooper
              </div>
              <div className="ml-2 -mt-1 xl:text-base md:text-sm">
                @alessandroveronezi
              </div>
            </div>
            <div
              className={`border border-blue-500 ml-auto xl:mr-6 md:mr-2 mt-2 p-1 rounded-3xl xl:w-20 md:w-15 justify-center flex cursor-pointer`}
            >
              <div
                className="text-blue-500 xl:text-base md:text-sm font-semibold"
                onClick={handleClick}
              >
                {btntext}
              </div>
            </div>
          </div>
          <div className="mt-3">
            <hr />
          </div>
          <div className="flex items-center">
            <div className="mt-3 ml-5">
              <img
                src="/jenny.svg"
                className="rounded-full  xl:w-auto md:w-10"
              />
            </div>
            <div className="flex-col">
              <div className="font-semibold ml-3 mt-3 xl:text-base md:text-sm">
                Jenny Wilson
              </div>
              <div className="ml-2 -mt-1 xl:text-base md:text-sm">
                @gabrielcantarin
              </div>
            </div>
            <div className="border border-blue-500 ml-auto xl:mr-6  md:mr-2 mt-2 p-1 rounded-3xl xl:w-20 md:w-15  justify-center flex cursor-pointer">
              <div
                className="text-blue-500 xl:text-base md:text-sm font-semibold"
                onClick={handleClick2}
              >
                {btntext2}
              </div>
            </div>
          </div>
          <div className="mt-3">
            <hr />
          </div>
          <div className="text-blue-500 xl:text-base md:text-sm font-semibold xl:mt-2 md:mt-1 ml-6">
            Show More
          </div>
        </div>
        <div className="bg-slate-100 xl:w-96 md:w-[310px] xl:ml-8 md:ml-3 xl:h-[530px] md:h-auto mt-5 rounded-3xl xsm:hidden xl:block md:block">
          <div className=" xl:text-xl md:text-lg font-semibold ml-4">
            What's Happening
          </div>
          <div className="mt-3">
            <hr />
          </div>
          <div className="flex items-center mt-1">
            <div className="font-semibold ml-4 text-gray-600 mt-1 xl:text-sm md:text-xs">
              COVID 19
            </div>
            <div className="ml-1 text-gray-600 font-bold">.</div>
            <div className="ml-1 text-gray-600 font-semibold mt-1 xl:text-sm md:text-xs">
              Last night
            </div>
          </div>
          <div className="flex">
            <div className=" font-semibold ml-4 mt-2 xl:text-base md:text-sm">
              England's Cheif Medical Officer<br></br>says the UK is at the most
              <br></br>dangerous time of the pandemic
            </div>
            <div>
              <img src="/news1.svg" className="ml-4 mt-3 xl:w-auto md:w-15" />
            </div>
          </div>
          <div className="flex">
            <div className="ml-4 text-gray-600 font-semibold mt-1 xl:text-base md:text-sm">
              Trending with
            </div>
            <div className="text-blue-600 font-semibold mt-1 ml-1 xl:text-base md:text-sm">
              #covid19
            </div>
          </div>
          <div className="mt-3">
            <hr />
          </div>
          <div className="flex items-center mt-1">
            <div className="font-semibold ml-4 text-gray-600 mt-1 xl:text-sm md:text-xs">
              US news
            </div>
            <div className="ml-1 text-gray-600 font-bold">.</div>
            <div className="ml-1 text-gray-600 font-semibold mt-1 xl:text-sm md:text-xs">
              4h ago{" "}
            </div>
          </div>
          <div className="flex">
            <div className=" font-semibold ml-4 mt-2 xl:text-base md:text-sm">
              Parler may go offline following<br></br>suspension by Amazon,
              Apple<br></br>and Google
            </div>
            <div>
              <img src="/news2.svg" className="ml-7 mt-3 xl:w-auto md:w-15" />
            </div>
          </div>
          <div className="flex">
            <div className="ml-4 text-gray-600 font-semibold mt-1 xl:text-base md:text-sm">
              Trending with
            </div>
            <div className="text-blue-600 font-semibold mt-1 ml-1 xl:text-base md:text-sm">
              #trump
            </div>
          </div>
          <div className="mt-3">
            <hr />
          </div>
          <div className="flex items-center mt-1">
            <div className="font-semibold ml-4 text-gray-600 mt-1 xl:text-sm md:text-xs">
              India
            </div>
            <div className="ml-1 text-gray-600 font-bold">.</div>
            <div className="ml-1 text-gray-600 font-semibold mt-1 xl:text-sm md:text-xs">
              1h ago{" "}
            </div>
          </div>
          <div className="flex">
            <div className=" font-semibold ml-4 mt-2 xl:text-base md:text-sm">
              India vs Australia: India hold on<br></br>to earn a draw on Day 5
              in<br></br>Sydney test
            </div>
            <div>
              <img src="/news3.svg" className="ml-6 mt-3 xl:w-auto md:w-15" />
            </div>
          </div>
          <div className="flex">
            <div className="ml-4 text-gray-600 font-semibold mt-1 xl:text-base md:text-sm">
              Trending with
            </div>
            <div className="text-blue-600 font-semibold mt-1 ml-1 xl:text-base md:text-sm">
              #sport
            </div>
          </div>
          <div className="mt-3">
            <hr />
          </div>
          <div className="text-blue-500 font-semibold xl:mt-2 md:mt-1 ml-6 xl:text-base md:text-sm">
            Show More
          </div>
        </div>
        <div className="ml-10 xl:text-sm md:text-xs text-gray-600 font-semibold mt-3 xsm:hidden xl:block md:block ">
          Terms of Service Privacy Policy Cookie Policy<br></br>Ads info More @
          2021 Twitter,Inc.
        </div>
      </div>
    </div>
  );
}
