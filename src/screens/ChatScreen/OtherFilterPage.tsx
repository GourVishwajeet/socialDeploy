import leftarrow from "../../assets/leftarrow.svg"
import Frama from "../../assets/Frama.svg"
export default function OtherFilerPage(){
    return(<div>
        <div className="flex  justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
        <div className="absolute top-8 right-9 ">
             <img src={Frama}/>
            </div>
  <div className="space-y-2 w-80 h-50  flex flex-col p-3   bg-slate-100">
    <div>
      <div  className="flex justify-between items-center text-gray-600 hover:text-gray-800 py-2">
        Saved Replies
        
        <img src={leftarrow} />
      </div>
    </div>
    <div>
      <div className="flex justify-between items-center text-gray-600 hover:text-gray-800 py-2">
        Stickers
        <img src={leftarrow} />
      </div>
    </div>
    <div>
      <div className="flex justify-between items-center text-gray-600 hover:text-gray-800 py-2">
        Avatars
        <img src={leftarrow} />
       
      </div>
    </div>
    <div>
      <div className="flex justify-between items-center text-gray-600 hover:text-gray-800 py-2">
        Chat Translator
        <img src={leftarrow} />
       
      </div>
    </div>
  </div>
</div>







    </div>)
}