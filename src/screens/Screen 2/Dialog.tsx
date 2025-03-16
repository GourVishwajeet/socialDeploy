import { useState } from 'react';
import Screen2 from "./DisplayPage";
import { useNavigate } from 'react-router-dom';
import { RiCloseLargeFill } from "react-icons/ri";
import { GiAlliedStar } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Dialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const navigate = useNavigate();


  return (
    <div className="relative h-screen w-screen">
      <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${isDialogOpen ? 'bg-black bg-opacity-50 pointer-events-none' : ''}`}>
        <div className={`absolute inset-0 transition-filter duration-300 ${isDialogOpen ? 'filter brightness-50' : ''}`}> 
          <Screen2 />
        </div>
      </div>
      {isDialogOpen && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white  rounded-xl shadow-lg z-50">
          <div className='w-[380px] h-auto flex-col '>
            {/* Dialog content */}
            <div className='justify-end flex mr-3 mt-3 cursor-pointer' onClick={()=> navigate('/screen2')} ><RiCloseLargeFill /></div>
            <div className='justify-center flex'><img src='/public/frame.png' className='w-15 rounded-full '/></div>
            <div className='justify-center flex  text-pretty font-semibold mt-1'>mkbhd</div>
            <hr className='mt-2'/>
            <div className='flex items-center justify-between m-3'><div className='font-serif mt-2 ml-2'>Add to close friends list</div><div className='mr-2'><GiAlliedStar /></div></div>
            <div className='flex items-center justify-between m-3'><div className='font-serif mt-2 ml-2'>Add to favorites</div><div className='mr-2'><FaRegStar /></div></div>
            <div className='flex items-center justify-between m-3'><div className='font-serif mt-2 ml-2'>Mute</div><div className='mr-2'><FaArrowRight /></div></div>
            <div className='flex items-center justify-between m-3'><div className='font-serif mt-2 ml-2'>Restrict</div><div className='mr-2'><FaArrowRight /></div></div>
            <div className='flex items-center justify-between m-3'><div className='font-serif mt-2 ml-2'>Unfollow</div></div>
          </div>
          
        </div>
      )}
      
    </div>
  );
};

export default Dialog;