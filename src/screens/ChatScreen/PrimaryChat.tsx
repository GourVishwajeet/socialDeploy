
import story from "../../../public/story.svg"
import camera from "../../../public/Camera.svg"



export default function Primary(){
    const items = [
        { id: 1, picture: story, pic:camera, text: 'Liked a message', time:'12 min',  name: "juan" },
        { id: 2, picture: story, pic:camera, text: '4+ new message' , time:'15 min', name: "juan" },
        { id: 3, picture: story, pic:camera, text: '4 new message'  , time:'22 min', name: "juan" },
        { id: 4, picture: story, pic:camera, text: '4 new message'  , time:'12d'   , name: "juan" },
        { id: 5, picture: story, pic:camera, text: '4 new message'  , time:'12d'   , name: "juan" },
        { id: 6, picture: story, pic:camera, text: '4 new message'  , time:'12d'   , name: "juan" },
        { id: 7, picture: story, pic:camera, text: '4 new message'  , time:'12d'   , name: "juan" },
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
               <div className="flex ml-8 font-medium text-sm mt-2 "><div className="">PRIMARY</div><div className="ml-9 text-gray-400">GENERAL</div><div className="ml-9 text-gray-400 ">REQUEST</div>
               </div>
               <div className="flex">
               <div><hr className='border border-black border-opacity-50 mt-3 w-28'/></div>
               <div><hr className='border border-x-gray-400 border-opacity-50 mt-3 w-50'/></div>
               </div>
               <div className="mt-2 ml-3 ">
                  {items.map((item) => (
                    <div  key={item.id}  className="mb-2 flex">
                      <img src={item.picture} className="w-14" />
                      <p className="ml-3">
                        <div className="font-semibold text-regular">{item.name}</div>
                        <div className="flex text-sm "><div className="font-medium">{item.text}</div><div className="ml-4 font-roboto">- {item.time}</div> <img src={item.pic} className="cursor-pointer absolute right-[790px] -mt-2 " /></div>
                        
                      </p>
                    </div>
                  ))}
                </div>
                
            
            </div>
        </div>
    )
}