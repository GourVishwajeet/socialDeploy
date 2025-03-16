import { BsThreeDots } from "react-icons/bs";

interface ThreeDotsiconProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function ThreeDotsicon({ isOpen, toggleMenu }: ThreeDotsiconProps) {
  return (
    <div className="relative inline-block text-left">
     
      <button onClick={toggleMenu} className="p-2 ">
        <BsThreeDots className="text-2xl cursor-pointer " />
      </button>

     
      {isOpen && (
        <div className="absolute -top-[300px] left-3 w-48 bg-black text-white rounded-md shadow-lg border border-gray-700">
          <ul className="py-2">
            <li className="px-4 py-2 text-red-500 hover:bg-gray-800 cursor-pointer">Report</li>
            <li className="px-4 py-2 text-blue-400 hover:bg-gray-800 cursor-pointer">Follow</li>
            <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Go to post</li>
            <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Share to...</li>
            <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Copy link</li>
            <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Embed</li>
            <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">About this account</li>
          </ul>
        </div>
      )}
    </div>
  );
}
