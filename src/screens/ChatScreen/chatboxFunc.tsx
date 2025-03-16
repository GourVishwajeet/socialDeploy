import { useState} from "react";



export default function ChatboxFunc(){
    const [activeTab, setActiveTab] = useState('primary');
    return(
        <div>
            <div className="xl:w-72 h-full md:w-65 "> 
               <div className="flex items-center font-medium ml-4 mt-4">upvox_
                <div>
                <img src="/public/arrow.svg" className="w-4 ml-2"/>
                </div>
               </div>
               <div>
               <hr className='border border-x-gray-400 border-opacity-50 mt-4'/>
               </div>
               <div className="flex items-center mt-3">
               <div className={` ml-5 font-medium text-sm cursor-pointer  ${activeTab === 'primary' ? "text-black" : "text-gray-400"}`} onClick={() => setActiveTab('primary')}>PRIMARY</div><div className={`ml-8 font-medium text-sm cursor-pointer   ${activeTab === 'general' ? "text-black" : "text-gray-400"}`} onClick={() => setActiveTab('general')}>GENERAL</div><div className={`ml-8 font-medium text-sm cursor-pointer   ${activeTab === 'request' ? "text-black" : "text-gray-400"}`} onClick={() => setActiveTab('request')}>REQUEST</div>
               </div>

               <div className="flex mt-4">
               <div><hr className={`border  w-25 ${activeTab === 'primary' ? "border-black" : "border-x-gray-400"}`}/></div>
               <div><hr className={`border ${activeTab === 'general' ? "border-black" : "border-x-gray-400"} w-22`}/></div>
               <div><hr className={`border ${activeTab === 'request' ? "border-black" : "border-x-gray-400"} w-25`}/></div>
               </div>
               <div className="bg-gray-200 h-15 mt-1 items-center flex">
                <img src="/public/ig.svg"className="ml-5"/><div className="ml-5 font-medium text-sm">Chirag Singla</div>
               </div>

            
            </div>
        </div>
    )
}