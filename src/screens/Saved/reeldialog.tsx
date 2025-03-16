import Frame from "../../assets/Frame.svg"



export default function ReelDialog(){
return(
    <div>
        <div className="flex justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
      <div className="absolute top-8 right-9 ">
      <img src={Frame}/>
      </div>
    <div className="w-[400px]  h-[300px]  rounded-2xl bg-white">
      <div className="flex items-center">
     <div className="mt-8 ml-10">
      <img src="/public/man.svg" />
     </div>
     <div className="ml-5 mt-9">
     <div className="font-roboto text-2xl  tracking-tighter">
      Saved
     </div>
     <div className="text-gray-400 -mt-1.5">
      Private
     </div>
  </div>
  </div>
  <div>
    <hr className='border border-x-gray-300 border-opacity-50 mt-4'/>
    </div>
    <div className="text-xl tracking-tighter ml-10 mt-5 flex">
      Collection
      <div className="ml-35 text-lg">
      New Collection
    </div>
    </div>
    <div className="flex items-center">
     <div className="mt-5 ml-10">
      <img src="/public/man.svg" />
     </div>
     <div className="ml-5 mt-9">
     <div className="font-roboto text-2xl  tracking-tighter">
      First Collection
     </div>
     <div className="text-gray-400 -mt-1.5">
      Private
     </div>
  </div>
  </div>





     </div>
</div>
    </div>
)
}