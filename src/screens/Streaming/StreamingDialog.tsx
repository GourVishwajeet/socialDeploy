import Frame from "../../assets/Frame.svg"



export default function StreamingDialog(){
return(
    <div>
        <div className="flex justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900 ml-20">
      <div className="absolute top-8 right-9 ">
      <img src={Frame}/>
      </div>
    <div className="w-[750px]   border border-black rounded-xl bg-white">
      <div className="flex  items-center font-medium justify-between ml-80 mt-2">Live Video<div className="text-blue-500 font-medium mr-3">Go Live</div></div>
      <div><hr className="mt-2 border border-10"/></div>
      <div className="flex ">
      <div className="bg-black w-65  h-[428px]  ">
      <div><img src='/public/preview.svg' className="mt-60 ml-30" /></div>
      <div className="justify-self-center  text-white font-medium mt-2">Preview</div>
      <div className="text-white font-medium text-xs ml-12 mt-1">Connect streaming software to<br></br><div className="ml-17">go live</div></div>
      </div>
      <div className=" max-w-md">
     <div className="ml-7 mt-3">
        <div className="text-xl font-bold">
            Go live with streaming software
        </div>
        <div className=" text-xs text-gray-500 mt-2 mr-5">
            Copy and paste the streaming key into streaming software.The unique stream key tells your streaming software where to send your video feed and lets instagram accept it. 
        </div>
        <div className="font-bold mt-3  text-sm">Stream URL</div>
        <div className="border border-gray-400 h-8 w-[450px] mt-1 bg-gray-300 rounded-lg flex">
        <div><input type="text" className="bg-gray-300 h-7 w-[405px] outline-none px-2"/></div>
        <div className="text-blue-500 font-medium text-sm mt-1 cursor-pointer">COPY</div>
        </div>
         <div className="font-bold mt-3  text-sm">Stream Key</div>
        <div className="border border-gray-400 h-8 w-[450px] mt-1 bg-gray-300 rounded-lg  flex">
        <div><input type="text" className="bg-gray-300 h-7 w-[405px] outline-none px-2"/></div>
        <div className="text-blue-500 font-medium text-sm mt-1 cursor-pointer">COPY</div>
        </div>
        <div className="text-xs text-gray-500 mt-5">Once you start to preview the podcast,you have 5 hours to go live.</div>
        <div className="text-xl font-bold mt-3">
            How To Stream
        </div>
        <div className="flex items-center mt-3">
          <div><img src="/public/copy.svg" className="w-4"  /></div>
          <div className="text-xs text-gray-500 ml-4 ">Copy the stream key and enter it into your streaming software</div>
        
        </div>
        <div className="flex items-center mt-3">
          <div><img src="/public/select.svg" className="w-5" /></div>
          <div className="text-xs text-gray-500 ml-3 ">Copy the stream key and enter it into your streaming software</div>
        </div>
        <div className="text-xs text-gray-500 mt-5">The streaming software that's best for you depends on the type of content you plan to stream.</div>
        
    </div>
      </div>
      </div>
    </div>
    </div>
    </div>
)
}