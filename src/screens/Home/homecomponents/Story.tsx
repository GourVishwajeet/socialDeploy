import  { useRef, useState, useEffect } from "react";
import Avatar from "../../../assets/Avatar.svg";
import Avatarnext from "../../../assets/Avatarnext.svg";
import Plusbutton from "../../../assets/Plusbutton.svg";
import scrolllefticon from "../../../assets/scrolllefticon.svg";
import scrollrighticon from "../../../assets/scrollrighticon.svg";
import CloseIcon from "../../../assets/Frame.svg";
import LeftArrow from "../../../assets/scrolllefticon.svg";
import RightArrow from "../../../assets/scrollrighticon.svg";
import aiwhite from "../../../assets/aiwhite.svg";
import { LuSend } from "react-icons/lu";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaVolumeUp, FaEllipsisH, FaPlay, FaPause } from "react-icons/fa";

export default function Story() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [viewedStories, setViewedStories] = useState<number[]>([]);
  const [message, setMessage] = useState("");
  const [liked, setLiked] = useState(false);
  const items = [
    { id: 1, picture: Avatarnext, username: "Ruffles" },
    { id: 2, picture: Avatarnext, username: "Max" },
    { id: 3, picture: Avatarnext, username: "Charlie" },
    { id: 4, picture: Avatarnext, username: "Bella" },
    { id: 5, picture: Avatarnext, username: "Rocky" },
    { id: 6, picture: Avatarnext, username: "Rocky" },
    { id: 7, picture: Avatarnext, username: "Rocky" },
    { id: 8, picture: Avatarnext, username: "Rocky" },
  ];

  useEffect(() => {
    if (selectedStory !== null && isPlaying) {
      if (startTime === null) {
        setStartTime(Date.now() - (progress / 100) * 15000);
      }

      const interval = setInterval(() => {
        if (startTime !== null) {
          const elapsedTime = Date.now() - startTime;
          const newProgress = (elapsedTime / 15000) * 100;
          if (newProgress >= 100) {
            nextStory();
            clearInterval(interval);
          } else {
            setProgress(newProgress);
          }
        }
      }, 50); // Smooth progress update every 50ms

      return () => clearInterval(interval);
    }
  }, [selectedStory, isPlaying, startTime]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const openStory = (id: number) => {
    setSelectedStory(id);
    setProgress(0);
    setStartTime(null);
    if (!viewedStories.includes(id)) {
      setViewedStories([...viewedStories, id]);
      console.log("Viewed Stories:", [...viewedStories, id]); // Debugging
    }
  };

  const closeStory = () => setSelectedStory(null);

  const nextStory = () => {
    if (selectedStory !== null && selectedStory < items.length) {
      setSelectedStory(selectedStory + 1);
      setProgress(0);
      setStartTime(null);
    } else {
      closeStory();
    }
  };

  const prevStory = () => {
    if (selectedStory !== null && selectedStory > 1) {
      setSelectedStory(selectedStory - 1);
      setProgress(0);
      setStartTime(null);
    }
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="md:w-[670px] smi:w-[483px] xsm:w-[370px] xxsm:w-[300px] px-4 relative">
      {/* Scroll buttons */}
      <img
        onClick={scrollLeft}
        src={scrolllefticon}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hidden smi:block cursor-pointer"
        alt="Scroll Left"
      />
      <img
        onClick={scrollRight}
        src={scrollrighticon}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 xsm:hidden smi:block cursor-pointer"
        alt="Scroll Right"
      />

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-4 py-2 overflow-hidden overflow-x-auto scrollbar-hide"
      >
        {/* First Story (User Story) */}
        <div className="flex flex-col items-center relative min-w-[80px] cursor-pointer">
          <img
            src={Avatar}
            alt="Your Avatar"
            className="smi:w-15 smi:h-15 xxsm:w-12 xxsm:h-12 rounded-full"
          />
          <div className="absolute bottom-0 right-4 smi:right-2 top-10">
            <img
              src={Plusbutton}
              alt="Add Story"
              className="smi:w-5 smi:h-5 w-4 h-4"
            />
          </div>
          <div className="mt-1 text-metatitle font-roboto text-gray-500 text-center">
            You
          </div>
        </div>

        {/* Other Stories */}
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center smi:min-w-[80px] xxsm:min-w-[60px] cursor-pointer"
            onClick={() => openStory(item.id)}
          >
            <div
              className={`p-[2.5px] rounded-full ${
                viewedStories.includes(item.id)
                  ? "bg-gray-300" // Viewed story border (gray)
                  : "bg-gradient-to-tr from-blue-900 via-purple-600 to-black" // Unviewed story border (gradient)
              }`}
            >
              <img
                src={item.picture}
                alt={item.username}
                className="smi:w-16 smi:h-16 xxsm:w-12 xxsm:h-12 rounded-full object-cover border-2 border-white"
              />
            </div>
            <div className="mt-1 text-metatitle font-roboto text-gray-500 text-center">
              {item.username}
            </div>
          </div>
        ))}
      </div>

      {/* Instagram-Style Story Viewer */}
      {selectedStory !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div
            
            className="absolute top-4 left-4 m-3 hidden md:block"
          >
            <img src={aiwhite} alt="Close" className="w-8 h-8" />
          </div>

          {/* Close Button */}
          <button
            onClick={closeStory}
            className="absolute top-4 right-4 text-white hidden md:block"
          >
            <img src={CloseIcon} alt="Close" className="w-6 h-6" />
          </button>

          {/* Left Navigation */}
          {selectedStory > 1 && (
            <button
              onClick={prevStory}
              className="absolute left-4 text-white hidden md:block"
            >
              <img src={LeftArrow} alt="Previous" className="w-10 h-10" />
            </button>
          )}

          {/* Story Container */}
          <div className="relative w-[300px] h-[600px] smi:w-[420px] smi:h-[700px] bg-black rounded-2xl flex flex-col items-center justify-center">
            {/* Progress Bar */}
            <div className="absolute top-2 w-full px-4">
              <div className="w-full bg-gray-600 rounded-full overflow-hidden">
                <div
                  className="h-[2px] bg-white"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* User Info */}
            <div className="absolute top-4 left-4 flex items-center z-10 justify-between smi:w-[370px] w-[280px]">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-story-linear-gradient p-[2px]">
                  <div className="w-full h-full rounded-full bg-black p-[2px]">
                    <img
                      src={items[selectedStory - 1].picture}
                      alt="User Avatar"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-white text-lg font-semibold ml-2">
                  {items[selectedStory - 1].username}
                </span>
              </div>
              <div className="flex justify-between w-[100px]">
                <button
                  onClick={togglePlay}
                  className="text-white text-xl hidden md:block"
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button className="text-white text-2xl">
                  <FaVolumeUp />
                </button>
                <button className="text-white text-2xl">
                  <FaEllipsisH />
                </button>
                <button
                  onClick={closeStory}
                  className="text-2xl text-white md:hidden"
                >
                  <img src={CloseIcon} alt="Close" className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Story Image */}
            <div
              className="w-full h-full"
              onClick={() => {
                if (window.innerWidth < 768) {
                  // Check if screen size is below md (768px)
                  nextStory();
                }
              }}
            >
              <img
                src={items[selectedStory - 1].picture}
                alt="Story"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Input and Actions */}
            <div className="w-full absolute bottom-0 z-10">
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center w-full">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Reply to username..."
                    className="w-full bg-transparent border border-white text-white placeholder-gray-400 px-4 py-2 rounded-full focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-3 ml-3 text-white">
                  {liked ? (
                    <AiFillHeart
                      className="w-7 h-7 cursor-pointer text-red-500"
                      onClick={() => setLiked(!liked)}
                    />
                  ) : (
                    <AiOutlineHeart
                      className="w-7 h-7 cursor-pointer"
                      onClick={() => setLiked(!liked)}
                    />
                  )}
                  <LuSend
                    size={22}
                    className="cursor-pointer hover:opacity-75"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Navigation */}
          {selectedStory < items.length && (
            <button
              onClick={nextStory}
              className="absolute right-4 text-white hidden md:block"
            >
              <img src={RightArrow} alt="Next" className="w-10 h-10" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
