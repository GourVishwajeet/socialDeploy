// export default function ChatDisplay(){
//   return(
//       <div>
//           <div className="flex">
//           <div>
//               <img src="/public/ig.svg" className="w-7 ml-15 mt-4"/>
//           </div>
//           <div>
//               <div className="ml-3 font-medium text-sm mt-3">Chirag Sighla</div>
//               <div className="text-gray-400 text-xs ml-3">Active 2h ago</div>
//           </div>
//           <div className="ml-auto flex ">
//           <div className=" mt-4 mr-5"><img src="/public/phone.svg"  /></div>
//           <div className=" mt-4 mr-5"><img src="/public/video.svg"  /></div>
//           <div className=" mt-4 mr-10"><img src="/public/info.svg"  /></div>
//         </div> 
//         </div>
//         <div>
//         <hr className='border border-x-gray-400 border-opacity-50 mt-3'/>
//         </div>
//         <div className="border border-x-gray-400 border-opacity-50 w-60 mt-5 p-2 rounded-xl ml-8 ">
//         <div><img src="/public/chat.svg" className="rounded"/></div>
//         <div className=" flex-wrap">
//           <span className="mt-2  text-sm font-medium h-6">adam.godigital </span>
//           <span className="mt-2  text-sm  ">These 5 useful websites are so amazing!</span>
//           <span className="text-blue-700 text-sm font-medium"> #adamdigital</span>
//         </div>
//         </div>
//         <div className="w-8 -mt-3"><img src="/public/ig.svg"/></div>
//         <div className="flex ml-72 items-center -mt-60">
//         <div><img src="/public/react.svg"/></div>
//         <div className="ml-3"><img src="/public/rearrow.svg"/></div>
//         <div className="ml-3"><img src="/public/menu.png"/></div>
//         </div>
//         <div className=" mt-60 ml-90 text-gray-400 text-xs">5.00 AM</div>
//         <div className="w-full h-10 border border-x-gray-400 border-opacity-50 rounded-full mt-22 flex">
//           <div className="mt-2 ml-5"><img src="/public/react.svg"/></div>
//           <input type="text" placeholder="Message..." className="ml-5 w-full"/>
//           <div className="mt-2 ml-auto"><img src="/public/image.svg"/></div>
//           <div className="mt-2 ml-4 mr-8"><img src="/public/like.svg"/></div>
//         </div>
        
//       </div>
//   )
import { LuMic } from "react-icons/lu";
import { PiSticker } from "react-icons/pi";
import { RiCloseLargeFill } from "react-icons/ri";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoArrowUndoCircle } from "react-icons/io5";
import { useState } from "react";
import { useRef } from "react";



export default function ChatDisplay(){
  const [active, setActive] = useState(false);
  const [mactive, setMactive] = useState(false);
  const [iactive, setIactive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const fileInputRef = useRef<HTMLInputElement>(null); 
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files); 
      console.log('Selected Files:', files);
    }
  };
  

  
    return(
       <div className="flex">
        <div className={` md:w-[500px] ${isDrawerOpen? 'xl:w-[500px]':'xl:w-[750px]'}` }>
            <div className="flex ">
            <div>
                <img src="/ig.svg" className="w-7 xl:ml-15 mt-4 md:ml-5 xsm:ml-2"/>
            </div>
            <div>
                <div className="ml-3 font-medium text-sm mt-3">Chirag Sighla</div>
                <div className="text-gray-400 text-xs ml-3">Active 2h ago</div>
            </div>
            <div className=" xl:ml-auto md:ml-50 xsm:ml-10 flex ">
            <div className=" mt-4 mr-5 cursor-pointer"><img src="/phone.svg"  /></div>
            <div className=" mt-4 mr-5 cursor-pointer"><img src="/video.svg"  /></div>
            <div className="cursor-pointer" onClick={()=>setIactive(!iactive)}>{iactive?<IoInformationCircleSharp onClick={()=>setIsDrawerOpen(false)} size={30} className="mt-3.5 mr-9 "/>:<img src='/info.svg' className="mt-4 mr-10 " onClick={()=>setIsDrawerOpen(true)}/>}</div>
          </div> 
          </div>
          <div>
          <hr className='border border-x-gray-400 border-opacity-50 mt-3'/>
          </div>
          <div className="border border-x-gray-400 border-opacity-50 w-60 mt-5 p-2 rounded-xl ml-8 ">
          <div><img src="/chat.svg" className="rounded"/></div>
          <div className=" flex-wrap">
            <span className="mt-2  text-sm font-medium h-6">adam.godigital </span>
            <span className="mt-2  text-sm  ">These 5 useful websites are so amazing!</span>
            <span className="text-blue-700 text-sm font-medium"> #adamdigital</span>
          </div>
          </div>
          <div className="w-8 -mt-3"><img src="/ig.svg"/></div>
          <div className="flex ml-72 items-center -mt-60">
          <div className="cursor-pointer"><img src="/react.svg"/></div>
          <div className="ml-3 cursor-pointer" onClick={()=>setActive(true)}><img src="/Rearrow.svg"/></div>
          <div className="ml-3 cursor-pointer" onClick={()=>setMactive(!mactive)}><img src="/menu.png"/></div>
          </div>
          <div className=" mt-60 ml-90 text-gray-400 text-xs">5.00 AM</div>
          {active?<div>
          <div className="mt-10"><hr/></div>
          <div className="-mb-8 mt-2 mr-2 flex justify-end cursor-pointer "><RiCloseLargeFill onClick={()=>setActive(false)} /></div>
          <div className="mt-3 -mb-8 ml-2 text-sm">Replying to Chirag</div>
          <div className="mt-8 -mb-15 ml-2 text-sm text-gray-400">Attachment</div>
          </div>:<></>}
          <div className={`${isDrawerOpen? 'w-[480px]': 'w-[720px]'} h-10 border border-gray-400 border-opacity-50 rounded-full mt-18 mb-5 flex`}>
            <div className="mt-1.5 ml-5"><img src="/react.svg" className="w-8"/></div>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Message..." className="ml-5 w-full outline-none"/>
           
            {inputValue.trim().length >0?(<div className="mr-6 mt-2 text-blue-500 text-base font-semibold cursor-pointer">Send</div>):(<>
            <div className="mt-2 mr-3 cursor-pointer"><LuMic size={22} /></div>
            <div className="mt-2 ml-auto mr-3 cursor-pointer"><img src="/image.svg" className="w-8" onClick={handleImageClick}/><input ref={fileInputRef} onChange={handleFileChange}  hidden type="file" accept="image/*" multiple /></div>
            <div className="mt-1.5 cursor-pointer"><PiSticker size={25} /></div>
            <div className="mt-2 ml-3 mr-8 cursor-pointer"><img src="/like.svg" className="w-8"/></div>
            </>)}
          </div>
          </div>
        <div>
        {isDrawerOpen?
        <div className="w-[271px] h-screen border border-gray-300 -mt-1 flex-col fixed">
          <div className="mt-5 ml-3 text-xl font-semibold"> Details</div>
          <hr className="mt-4"/>
          <div className="flex">
            <div className="ml-5 mt-4"><FaRegBell size={25} /></div>
            <div className="ml-5 mt-4">Mute Messages</div>
          </div>
          <div className="flex">
            <div className="ml-5 mt-8">Move to General</div>
            <div className=" w-18 mt-7 h-9 items-center justify-center flex rounded-lg bg-gray-200 font-medium ml-10 cursor-pointer">Move</div>
          </div>
          <hr className="mt-7"/>
          <div className="mt-5 ml-3 text-lg font-semibold">Members</div>
          <div className="flex items-center">
            <div className="mt-5 ml-3"><img src="/ig.svg" className="w-13"/></div>
            <div className="flex-col">
              <div className="text-sm ml-3 mt-5 font-semibold">chirag_sighla_025</div>
              <div className="text-sm ml-3 text-gray-600 font-semibold">Chirag Sighla</div>
            </div>
          </div>
          <hr className="mt-25"/>
          <div className="ml-5 mt-5 text-lg text-red-500 cursor-pointer">Report</div>
          <div className="ml-5 mt-5 text-lg text-red-500 cursor-pointer">Block</div>
          <div className="ml-5 mt-5 text-lg text-red-500 cursor-pointer">Delete Chat</div>
          </div>:<></>}
        </div> 
      {mactive?<div> 
      <div className="absolute w-40 h-17 right-56 mt-40 shadow-lg rounded-lg cursor-pointer">
      <div className="flex-col">
      <div className="mt-2  ml-2 text-xs font-semibold text-gray-500">5.00 AM</div>
      <hr className="border border-x-gray-400 border-opacity-50 mt-2"/>
      <div className="flex">
      <div className=" mt-1.5 ml-2 text-sm font-semibold text-red-500">Unsend</div>
      <div className=" mt-2 ml-auto mr-2 text-red-500"><IoArrowUndoCircle /></div>
      </div>
      </div></div>
      </div>:<></>}  
          
        

          
        </div>
    )
}