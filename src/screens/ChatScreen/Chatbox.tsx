export default function Chatbox(){
    return(
        <div>
            <div className="w-72 h-screen "> 
               <div className="flex items-center font-medium ml-4 mt-4">upvox_
                <div>
                <img src="/public/arrow.svg" className="w-4 ml-2"/>
                </div>
               </div>
               <div>
               <hr className='border border-x-gray-400 border-opacity-50 mt-4'/>
               </div>
               <div className="flex ml-5 font-medium text-sm mt-3 mb-3">PRIMARY<div className="ml-5 text-gray-400">GENERAL</div><div className="ml-5 text-gray-400">REQUEST</div>
               </div>

               <div><hr className='border border-x-gray-400 border-opacity-50 mt-4'/></div>
               <div className="bg-gray-200 h-15 mt-1 items-center flex">
                <img src="/public/ig.svg"className="ml-5"/><div className="ml-5 font-medium text-sm">Chirag Singla</div>
               </div>

            
            </div>
        </div>
    )
}