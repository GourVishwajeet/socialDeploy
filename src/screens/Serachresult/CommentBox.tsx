import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import profilepik from "../../assets/profilepik.svg";

interface CommentBoxProps {
  isOpen: boolean;
  onClose: () => void;
  onAddComment: (comment: string) => void;
  comments: string[]; // ✅ Parent se comments receive karenge
}

export default function CommentBox({ isOpen, onClose, onAddComment, comments }: CommentBoxProps) {
  const [newComment, setNewComment] = useState("");

  if (!isOpen) return null; // ✅ Agar open nahi hai toh return null

  const submitComment = () => {
    if (newComment.trim() === "") return; // ✅ Empty comment allow nahi karenge

    onAddComment(newComment); // ✅ Parent ke function ko call karenge
    setNewComment(""); // ✅ Input field clear
  };

  return (
    <div className="fixed inset-0 flex items-start justify-end bg-black bg-opacity-50 z-50">
      <div className="bg-black text-white w-[400px] p-4 rounded-lg shadow-lg relative">
        {/* Header */}
        <div className="flex justify-between items-center pb-2 border-b border-gray-600">
          <h2 className="text-lg font-semibold">Comments</h2>
          <IoCloseSharp className="text-2xl cursor-pointer" onClick={onClose} />
        </div>

        {/* ✅ Comments List (Ab properly render honge) */}
        <div className="h-[350px] overflow-y-auto mt-3">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="mb-3">
                <div className="flex items-start space-x-2">
                  <img src={profilepik} alt="User" className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="text-sm">
                      <span className="font-semibold">your.username</span>{" "}
                      <span className="text-gray-400">Just now</span>
                    </p>
                    <p className="text-sm">{comment}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">No comments yet. Be the first to comment!</p>
          )}
        </div>

        {/* Comment Input */}
        <div className="flex items-center mt-3 border-t border-gray-600 pt-2">
          <img src={profilepik} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-grow bg-transparent border-none text-white placeholder-gray-500 focus:outline-none"
            placeholder="Add a comment..."
          />
          <BsEmojiSmile className="text-xl text-gray-400 cursor-pointer mr-2" />
          <button onClick={submitComment} className="text-blue-500 font-semibold">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
