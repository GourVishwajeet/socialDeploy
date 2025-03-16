
// import ProfilePic from "../../../assets/Profilee.svg";
// import dot from "../../../assets/dot.svg";
// import Postpic from "../../../assets/Postpic.svg"
// export default function Post() {
//   return (
//     <>
//       <div className="flex flex-col mt-2 md:w-full xsm:w-auto">
//         <div className="flex justify-between w-auto">
//           <div className="flex p-1 ">
//             <img src={ProfilePic} className="" />
//             <span className="ml-1 font-medium flex justify-center items-center">
//               lewishamilton
//             </span>
//           </div>
//           <div className="flex justify-center items-center float-right mr-4">
//             <img src={dot} />
//           </div>
//         </div>
//         <div>
//         <img src={Postpic} className="md:w-full md:h-full xl:w-full xl:h-full xsm:w-full xsm:h-full "/>
//         </div>
//       </div>
//     </>
//   );
// }
// import ProfilePic from "../../../assets/Profilee.svg";
// import dot from "../../../assets/dot.svg";
// import Postpic from "../../../assets/Postpic.svg"
// export default function Post() {
//   return (
//     <>
//       <div className="flex flex-col mt-2 md:w-full xsm:w-auto">
//         <div className="flex justify-between w-auto">
//           <div className="flex p-1 ">
//             <img src={ProfilePic} className="" />
//             <span className="ml-1 font-medium flex justify-center items-center">
//               lewishamilton
//             </span>
//           </div>
//           <div className="flex justify-center items-center float-right mr-4">
//             <img src={dot} />
//           </div>
//         </div>
//         <div>
//         <img src={Postpic} className="md:w-full md:h-full xl:w-full xl:h-full xsm:w-full xsm:h-full "/>
//         </div>
//       </div>
//     </>
//   );
// }
import { useState } from "react";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5"; // Import IoBookmark
import ProfilePic from "../../../assets/Profilee.svg";
import dot from "../../../assets/dot.svg";
import Postpic from "../../../assets/Postpic.svg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { LuSend } from "react-icons/lu";
import smiley from "../../../assets/smiley.svg";
import comment from "../../../assets/comment.svg";
import { useNavigate } from "react-router-dom";

export default function Post() {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const navigate=useNavigate()
  return (
    <div className="flex flex-col mt-2 md:w-full xsm:w-auto border-b-2 border-b-customGray mb-5">
      {/* Post Header */}
      <div className="flex justify-between items-center pb-2">
        <div className="flex items-center">
          <img src={ProfilePic} className="w-10 h-10 rounded-full" alt="Profile" />
          <span className="ml-2 font-medium">lewishamilton <span className='text-gray-500 text-xs'>• 5h</span></span>
        </div>
        <img src={dot} className="w-7 h-5 cursor-pointer" alt="More options" />
      </div>
      
      {/* Post Image */}
      <div>
        <img src={Postpic} className="md:w-full md:h-full xl:w-full xl:h-full xsm:w-full xsm:h-full " alt="Post" />
      </div>
      
      {/* Post Actions */}
      <div className="flex justify-between items-center pt-2">
        <div className="flex space-x-3 items-center">
          {liked ? (
            <AiFillHeart 
              className="w-7 h-7 cursor-pointer text-red-500" 
              onClick={() => setLiked(!liked)} 
            />
          ) : (
            <AiOutlineHeart 
              className="w-7 h-7 cursor-pointer hover:opacity-60" 
              onClick={() => setLiked(!liked)} 
            />
          )}
          <img src={comment} onClick={()=> navigate("/comment")} className="w-6 h-6 cursor-pointer hover:opacity-60" alt="Comment" />
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
      
      {/* Likes and Caption */}
      <div className="mt-2">
        <p className="text-sm font-semibold">741,368 likes</p>
        <p className="text-sm"><span className="font-semibold">lewishamilton</span> Parabéns Ayrton, minha inspiração sempre 🇧🇷🏎️</p>
        <p className="text-xs text-gray-500">See translation</p>
      </div>
      
      {/* Comment Section */}
      <div className="mt-2 text-xs text-gray-500">View all 13,384 comments</div>
      <div className="mt-2 pt-2 mb-7 flex justify-between">
        <input 
          type="text" 
          placeholder="Add a comment..." 
          className="w-full text-sm p-1 outline-none"
        />
        <img src={smiley} alt="Smiley" />
      </div>
    </div>
  );
}
