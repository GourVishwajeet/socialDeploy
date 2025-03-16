
import storypic from "../../../public/storypic.svg"




export default function Requestwithoutcircle(){
    const items = [
        { id: 1, picture: storypic,name: "juan" },
        { id: 2, picture: storypic,name: "juan" },
        { id: 3, picture: storypic, name: "juan" }
      ];
    return(
        <div>
            <div className="w-80 h-screen "> 
               <div className="flex items-center font-medium ml-4 mt-4">upvox_
                <div>
                <img src="/public/arrow.svg" className="w-4 ml-2"/>
                </div>
               </div>
               <div>
               <hr className='border border-x-gray-400 border-opacity-50 mt-2'/>
               </div>
            {/* searchbar */}
            <div className="flex">
            <div className="w-64 h-10 border border-gray-200 bg-gray-50 m-3 rounded-xl flex ">
             <img src="/public/icon.svg" className="m-2"/>
             <input type="text" placeholder="Top Requests" className="bg-transparent outline-none"/>
            </div>
            <div className="mt-4.5 text-cyan-500 font-medium cursor-pointer">Filter</div>
            </div>
            {/***************/}
               <div className="flex ml-8 font-medium text-sm mt-2 mb-2"><div className="text-gray-400">PRIMARY</div><div className="ml-9 text-gray-400">GENERAL</div><div className="ml-9 ">REQUEST</div>
               </div>
               <div className="flex">
               <div><hr className='border border-x-gray-400 border-opacity-50 mt-1 w-52'/></div>
               <div><hr className='border border-black border-opacity-50 mt-1 w-28'/></div>
               </div>
               <div className="mt-3 ml-3 ">
                  {items.map((item) => (
                    <div  key={item.id}  className="mb-2 flex">
                      <img src={item.picture} className="relative" />
                      <img src="/public/three.svg" className="absolute mt-9 ml-10" /> 
                      <p className="ml-3">
                        <div className="font-semibold text-regular">{item.name}</div>
                        <div className="flex text-sm "><div className="font-medium">4+ New Messages</div><div className="ml-2 font-roboto">- 12 min</div></div>
                        <div className="text-xs font-medium">14 Followers</div>
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex mt-36">
                <div>
                   <div className="border bg-slate-200 rounded-md w-20 h-9 ml-5"><div className="ml-4 mt-1 text-red-600 font-semibold cursor-pointer">Block</div></div> 
                </div>
                <div>
                   <div className="border bg-slate-200 rounded-md w-20 h-9 ml-5"><div className="ml-4 mt-1 text-red-600 font-semibold cursor-pointer">Delete</div></div> 
                </div>
                <div>
                   <div className="border bg-slate-200 rounded-md w-20 h-9 ml-5"><div className="ml-4 mt-1 font-semibold cursor-pointer">Accept</div></div> 
                </div>
                </div>

            
            </div>
        </div>
    )
}