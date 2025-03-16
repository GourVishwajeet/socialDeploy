import hart from "../../assets/hart.svg";
import brokenhart from "../../assets/brokenhart.svg";
import puppy from "../../assets/puppy.svg";
import happyemoji from "../../assets/happyemoji.svg";
import jockemoji from "../../assets/jockemoji.svg";
import sademoji from "../../assets/sademoji.svg";
import man from "../../assets/man.svg";
import clude from "../../assets/claud.svg";
import plan from "../../assets/plan.svg";
import stopicon from "../../assets/stopicon.svg";
import emojiblack from "../../assets/emojiblack.svg";
import gif from "../../assets/gif.svg";
import Frama from "../../assets/Frama.svg";

export default function Stickers() {
  return (
    <div className="flex justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
      <div className="absolute top-4 right-4 md:top-8 md:right-9">
        <img src={Frama}  />
      </div>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 mx-4 md:mx-0">
      
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search GIPHY stickers"
            className="w-full h-10 p-2 border bg-slate-200 rounded-3xl focus:outline-none focus:ring-2 md:h-12"
          />
        </div>

        <div className="mb-2">
          <h2 className="text-sm font-bold text-gray-700 md:text-base">GIPHY</h2>
        </div>

       
        <div className="grid grid-cols-3 gap-4">
          <div className="flex justify-center items-center">
            <img src={hart} className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          <div className="flex justify-center items-center">
            <img src={brokenhart} className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          <div className="flex justify-center items-center">
            <img src={puppy} className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          <div className="flex justify-center items-center">
            <img src={happyemoji} className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          <div className="flex justify-center items-center">
            <img src={jockemoji} className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          <div className="flex justify-center items-center">
            <img src={sademoji} className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          <div className="flex justify-center items-center">
            <img src={man} className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          <div className="flex justify-center items-center">
            <img src={clude} className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          <div className="flex justify-center items-center">
            <img src={plan} className="w-10 h-10 md:w-12 md:h-12" />
          </div>
        </div>

       
        <div className="flex justify-between items-center mt-4">
          <div className="p-2 text-gray-500">
            <img src={stopicon} className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <div className="p-2 text-gray-500">
            <img src={emojiblack} className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <div className="p-2 text-gray-500">
            <img src={gif} className="w-6 h-6 md:w-8 md:h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
