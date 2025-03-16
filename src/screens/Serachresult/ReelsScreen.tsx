import { useState, useRef, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Sidemenu from "../Home/homecomponents/Sidemenu";
import profilepik from "../../assets/profilepik.svg";
import CommentBox from "./CommentBox"; // ✅ Comment Box Component Import
import ThreeDotsicon from "./TherrDotsicon";
import ShareModal from "./ShareModel";

const reels = [
  { id: 1, src: "/reel1.mp4", caption: "First Reel" },
  { id: 2, src: "/reel2.mp4", caption: "Second Reel" },
  { id: 3, src: "/reel3.mp4", caption: "Third Reel" },
];

export default function ReelsScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [likes, setLikes] = useState(reels.map(() => ({ liked: false, count: 0 })));
  const [comments, setComments] = useState<string[][]>(reels.map(() => []));
  const [showComments, setShowComments] = useState(false);
  const [activeReel, setActiveReel] = useState<number | null>(null);
 const [showOptions, setShowOptions] = useState(reels.map(() => false));
 const [openShareModal, setOpenShareModal] = useState(false);

const toggleMenu = (index: number) => {
  setShowOptions((prev) =>
    prev.map((item, i) => (i === index ? !item : false)) 
  );
};


  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (index === currentIndex && video) {
        video.play();
      } else if (video) {
        video.pause();
      }
    });
  }, [currentIndex]);

  const handleLike = (index: number) => {
    setLikes((prevLikes) =>
      prevLikes.map((like, i) =>
        i === index ? { liked: !like.liked, count: like.liked ? like.count - 1 : like.count + 1 } : like
      )
    );
  };

  const handleOpenComments = (index: number) => {
    setActiveReel(index);
    setShowComments(true);
  };

  const handleAddComment = (index: number, newComment: string) => {
    if (!newComment.trim()) return; // Prevent empty comments
  
    setComments((prevComments) =>
      prevComments.map((commentList, i) =>
        i === index ? [...commentList, newComment] : commentList
      )
    );
  };

  return (
    <div className="flex h-screen ">
      {/* Sidebar Menu */}
      <Sidemenu />

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="relative w-96 h-[550px] overflow-y-scroll-non snap-mandatory snap-y space-y-4">
          {reels.map((reel, index) => (
            <div
              key={reel.id}
              className="relative flex items-center justify-center w-full h-full snap-center"
            >
              {/* Video */}
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={reel.src}
                className="h-full w-full object-cover rounded-xl"
                autoPlay={index === 0}
                loop
                muted
              ></video>

              {/* Caption Overlay */}
              {/* <div className="absolute bottom-10 left-4 text-white">
                <p className="text-lg font-semibold">{reel.caption}</p>
              </div> */}

              {/* Right Sidebar */}
              <div className=" ml-3 mt-45 top-0 space-y-4 text-black justify-center">
                {/* Like Button */}
                <button className="flex flex-col items-center" onClick={() => handleLike(index)}>
                  {likes[index].liked ? (
                    <AiFillHeart className="text-[28px] text-red-500" />
                  ) : (
                    <AiOutlineHeart className="text-[28px]" />
                  )}
                  {likes[index].count > 0 && ( // ✅ Agar 0 hai to count hide hoga
                    <span className="text-sm">{likes[index].count.toLocaleString()}</span>
                  )}
                </button>

                {/* Comment Button */}
                <button className="flex flex-col items-center" onClick={() => handleOpenComments(index)}>
                  <FaRegComment className="text-2xl" />
                  {comments[index].length > 0 && ( // ✅ Agar 0 hai to count hide hoga
                    <span className="text-sm">{comments[index].length}</span>
                  )}
                </button>

                 {/* Share Button */}
                 <button
                  className="flex flex-col items-center"
                  onClick={() => setOpenShareModal(true)} // ✅ Open Share Modal
                >
                  <LuSend className="text-2xl" />
                </button>

                <button className="flex flex-col items-center">
                  <IoBookmarkOutline className="text-2xl" />
                </button>

               {/* 🛠 Three Dots Icon Only Here */}
              <button className="flex flex-col items-center ml-[-4px]">
                <ThreeDotsicon isOpen={showOptions[index]} toggleMenu={() => toggleMenu(index)} />
              </button>

                <button className="flex flex-col items-center">
                  <img src={profilepik} alt="Profile" className="w-8 h-8 rounded-full" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Comment Box with Function to Add Comments */}
      {activeReel !== null && (
        <CommentBox
          isOpen={showComments}
          onClose={() => setShowComments(false)}
          onAddComment={(comment) => handleAddComment(activeReel, comment)}
          comments={comments[activeReel] || []}  // ✅ Pass comments array
        />
      )}

       {/* ✅ Share Modal */}
       {openShareModal && (
        <ShareModal onClose={() => setOpenShareModal(false)} />
      )}
    </div>
  );
}
