
import dottt from "../../../assets/dottt.svg";
import picture from "../../../assets/picture.svg";
import aiwhite from "../../../assets/aiwhite.svg";
import CloseIcon from "../../../assets/Frame.svg";
import userprofilee from "../../../assets/userprofilee.svg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5"; // Import IoBookmark
import { useState } from "react";
import comment from "../../../assets/comment.svg";
import { LuSend } from "react-icons/lu";
import smiley2 from "../../../assets/smiley2.svg"
import { useNavigate } from "react-router-dom";
export default function Commentbox() {
  const navigate=useNavigate()
  const [likes, setLikes] = useState(1000);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const comments = [
    {
      id: 1,
      picture: userprofilee,
      username: "salvadxr",
      text: "Server isn’t working",
      time: "1 d",
      like: "1 Like",
    },
    {
      id: 2,
      picture: userprofilee,
      username: "edubras101",
      text: "Ainda bem que não é 2077, ou essas tattoos iam ficar todas bugadas.",
      time: "1 d",
      like: "1 Like",
    },
    {
      id: 3,
      picture: userprofilee,
      username: "theactormekhaitaylor",
      text: "None of my prompts look a thing like this.",
      time: "1 d",
      like: "1 Like",
    },
    {
      id: 3,
      picture: userprofilee,
      username: "theactormekhaitaylor",
      text: "None of my prompts look a thing like this.",
      time: "1 d",
      like: "1 Like",
    },
    {
      id: 3,
      picture: userprofilee,
      username: "theactormekhaitaylor",
      text: "None of my prompts look a thing like this.",
      time: "1 d",
      like: "1 Like",
    },
    {
      id: 3,
      picture: userprofilee,
      username: "theactormekhaitaylor",
      text: "None of my prompts look a thing like this.",
      time: "1 d",
      like: "1 Like",
    },
  ];
  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-95 z-50">
      
      <div className="absolute top-4 left-4 m-3 hidden md:block">
        <img src={aiwhite} className="w-8 h-8" />
      </div>

      
      <button className="absolute top-4 right-4 text-white hidden md:block">
        <img src={CloseIcon} onClick={()=> navigate("/home")} alt="Close" className="w-6 h-6" />
      </button>

      
      <div className="bg-black rounded-lg flex md:w-[850px] w-full max-w-[90%] h-[90vh] md:h-[65vh]">
        
        <div className="flex-1 w-[400px] flex justify-center items-center p-4">
          <img
            src={picture}
            alt="Post"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

       
        <div className="bg-white w-[450px] flex flex-col">
          
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
              <span className="font-semibold text-sm mr-1">rafaelfigni</span>
              <span className="text-sm mr-1">and</span>
              <span className="font-semibold text-sm">openaidalle</span>
            </div>
            <button className="text-gray-600">
              <img src={dottt} alt="Options" />
            </button>
          </div>

          
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
            <p className="text-sm">
              <span className="font-semibold">rafaelfigni</span> O ano é 2073.
              Tatuadores e tatuados mudam a cor e aumentam o brilho de suas
              tatuagens através de dispositivos futuristas.
            </p>

            <div className="text-xs text-gray-500">#AI #fntbrazil #DallE</div>

            <div className="text-xs text-gray-500 mt-2 ">
              3d ago
              <span className="text-xs text-gray-500 mt-2 font-bold ml-3">
                See Translation
              </span>
            </div>

            
            {comments.map((comment) => (
              <div key={comment.id} className="text-sm flex">
                <div className="flex w-full justify-between items-center">
                  <div className="flex w-[415px] mr-[10px]">
                    <img src={comment.picture} />
                    <div className="flex flex-col">
                      <div className="">
                        <span className="font-semibold mr-1">
                          {comment.username}
                        </span>
                        {comment.text}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 ">
                        {comment.time}

                        <span className="text-xs text-gray-500 mt-2 ml-3">
                          {comment.like}
                        </span>
                        <span className="text-xs text-gray-500 mt-2 ml-3 font-semibold">
                          Reply
                        </span>
                        <span className="text-xs text-gray-500 mt-2 ml-3 font-bold">
                          See Translation
                        </span>
                      </div>
                    </div>
                  </div>
                  {liked ? (
                    <AiFillHeart
                      className="w-3 h-3 cursor-pointer text-red-500"
                      onClick={() => setLiked(!liked)}
                    />
                  ) : (
                    <AiOutlineHeart
                      className="w-3 h-3 cursor-pointer "
                      onClick={() => setLiked(!liked)}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          
          <div className="p-4 border-t flex items-center justify-between">
            <div className=" mx-auto bg-white w-full ">
             
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  {liked ? (
                    <AiFillHeart
                      className="w-7 h-7 cursor-pointer text-red-500"
                      onClick={toggleLike}
                    />
                  ) : (
                    <AiOutlineHeart
                      className="w-7 h-7 cursor-pointer hover:opacity-60"
                      onClick={toggleLike}
                    />
                  )}
                 <img src={comment} className="w-6 h-6 cursor-pointer hover:opacity-60" alt="Comment" />
                 <LuSend className="w-6 h-6 cursor-pointer hover:opacity-60" />
                </div>
                {bookmarked ? (
          <IoBookmark 
            className="w-6 h-6 cursor-pointer text-black" 
            onClick={() => setBookmarked(!bookmarked)} 
          />
        ) : (
          <IoBookmarkOutline 
            className="w-6 h-6 cursor-pointer hover:opacity-60" 
            onClick={() => setBookmarked(!bookmarked)} 
          />
        )}
              </div>

             
              <p className="mt-2 text-sm text-gray-800">
                Liked by <span className="font-semibold">openaidalle</span> and{" "}
                <span className="font-semibold">{likes} others</span>
              </p>

              
              <p className="text-xs text-gray-500 mt-1">3 DAYS AGO</p>

              
              <div className="border-t pt-2 mt-2 flex items-center space-x-2">
                <span className="text-gray-500 text-sm hover:opacity-60">
                  <img src={smiley2}/>
                </span>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 text-sm border-none outline-none"
                />
                <button className="text-blue-500 text-sm font-semibold">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
