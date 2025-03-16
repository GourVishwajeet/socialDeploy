import Frame from "../../assets/Frame.svg"



export default function LivePage(){
return(
    <div>
        <div className="flex justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
      <div className="absolute top-8 right-9 ">
      <img src={Frame}/>
      </div>
    <div className="w-[600px]  h-[500px] border border-black rounded-xl bg-white">
      <div className="w-full flex justify-center items-center font-medium border-b-customGray border-b-2 p-1 pb-2">Live Video</div>
      <div className="flex flex-col justify-center w-full h-[250px] items-center mt-20">
        <img src="/public/live.svg" className="w-25 mt-12"/>
        <div className="mt-10 font-bold text-2xl">Add Live Video Details</div>
        <div className=" mt-2 text-sm font-semibold text-gray-400">Go live by connecting to your choice of streaming software. To get started,<div className=" ml-15">add a title and select the audience for your live video. </div>  </div>
        <div><input type="text" placeholder="  Add a title..." className="outline-none px-2 border border-gray-400 h-10 mt-3 bg-slate-300 rounded-lg"/></div>
        <div className="flex justify-center items-center"> 
        <div className="font-medium text-xl mt-8">Audience</div>
        <div><img src="/public/arrow.svg"  className="ml-2 mt-8" /></div> 
        </div>
        <div className="font-semibold text-white p-1 w-15 flex justify-center bg-sky-500 rounded-lg mt-10">Next</div>
      </div>
    </div>
</div>
    </div>
)
}