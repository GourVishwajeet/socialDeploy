
import ai from "../../assets/ai.svg"
import gi from "../../assets/gi.svg"
import pi from "../../assets/pi.svg"
import Rectangle from "../../assets/Rectangle.svg"
import downarrow from "../../assets/downarrow.svg"
import Frama from "../../assets/Frama.svg"

export default function AIacces() {
  return (<div className="flex  justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
    <div className="absolute top-8 right-9 ">
      <img src={Frama} />
    </div>

    <div className="bg-white justify-center h-auto flex flex-col w-72  mx-auto border rounded-lg shadow">
      <div className="flex w-full justify-center space-x-2">
        <div className="text-gray-800 font-medium">Recents</div>
       
          <img src={downarrow} className="mt-1" />
        
      </div>

     <div className="flex items-center justify-center mb-4 ml-3">
        <p className="mt-2 text-gray-600 text-metatitle">
          You've given AI access to a select number of photos and videos.
        </p>

        <div className=" text-blue-400 text-sm font-medium hover:underline flex justify-end p-2">
          Manage
        </div></div>

        <div className="grid grid-cols-3  max-w-lg">


          <div className=" relative rounded-md flex items-center justify-center text-white">

            <img src={ai} className="w-full h-full object-cover " />
            <img src={Rectangle} className="absolute top-3 right-1  w-3 h-3  flex items-center justify-center" />
          </div>
          <div className="  relative rounded-md flex items-center justify-center">

            <img src={gi} className="w-full h-full object-cover " />
            <img src={Rectangle} className="absolute top-3 right-1  w-3 h-3  flex items-center justify-center" />
          </div>
          <div className="  relative rounded-md flex items-center justify-center text-white">
            <img src={pi} className="w-full h-full object-cover " />
            <img src={Rectangle} className="absolute top-3 right-1  w-3 h-3  flex items-center justify-center" />
          </div>


          <div className="  relative rounded-md flex items-center justify-center text-white">

            <img src={ai}  className="w-full h-full object-cover "/>
            <img src={Rectangle} className="absolute top-3 right-1  w-3 h-3  flex items-center justify-center" />
          </div>
          <div className=" relative rounded-md flex items-center justify-center">

            <img src={gi}  className="w-full h-full object-cover " />
            <img src={Rectangle} className="absolute top-3 right-1  w-3 h-3  flex items-center justify-center" />
          </div>
          <div className="  relative rounded-md flex items-center justify-center text-white">

            <img src={pi}  className="w-full h-full object-cover " />
            <img src={Rectangle} className="absolute top-3 right-1  w-3 h-3  flex items-center justify-center" />
          </div>
          <div className="  relative rounded-md flex items-center justify-center text-white">

            <img src={ai}  className="w-full h-full object-cover " />
            <img src={Rectangle} className="absolute top-3 right-1  w-3 h-3  flex items-center justify-center" />
          </div>
          <div className="  relative rounded-md flex items-center justify-center">

            <img src={gi} className="w-full h-full object-cover " />
            <img src={Rectangle} className="absolute top-3 right-1  w-3 h-3  flex items-center justify-center" />
          </div>
          <div className="  relative rounded-md flex items-center justify-center text-white">

            <img src={pi} className="w-full h-full object-cover " />
            <img src={Rectangle} className="absolute top-3 right-1  w-3 h-3  flex items-center justify-center" />
          </div>

        </div>
      


    </div>








  </div>)
}