import pik from "../../assets/pik.svg"
import clock from "../../assets/clock.svg"
import smile from "../../assets/smile.svg"
import hartemoji from "../../assets/hartemoji.svg"
import message from "../../assets/message.svg"
import star from "../../assets/star.svg"
import gif from "../../assets/gif.svg"
import stopicon from "../../assets/stopicon.svg"
import emojiblack from "../../assets/emojiblack.svg"
export default function MoreSticker() {
  return (
    <div className="flex justify-center items-center w-full h-screen fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm">

      <div className="w-96 bg-white rounded-lg shadow-lg p-4">

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search GIPHY stickers"
            className="w-full h-10 p-2 pl-10 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400" />

        </div>



        <div className="flex justify-around mb-4 text-gray-500">
          <img src={clock} alt="Heart" className="w-6 h-6" />
          <img src={smile} alt="Broken Heart" className="w-6 h-6" />
          <img src={star} alt="Puppy" className="w-6 h-6" />
          <img src={message} alt="Happy Emoji" className="w-6 h-6" />
          <img src={hartemoji} alt="Jock Emoji" className="w-6 h-6" />
        </div>



        <div className="grid grid-cols-2 gap-4">
          <div>
            <img src={pik} className="w-full h-[150px] rounded-md object-cover" />
          </div>
          <div>
            <img src={pik} className="w-full h-[150px] rounded-md object-cover" />
          </div>
          <div>
            <img src={pik} className="w-full h-[150px] rounded-md object-cover" />
          </div>
          <div>
            <img src={pik} className="w-full h-[150px] rounded-md object-cover" />
          </div>
        </div>



        {/* <div className="flex justify-between items-center mt-4">
          <button>
            <img src={stopicon} alt="Stop" className="w-6 h-6" />
          </button>
          <button>
            <img src={emojiblack} alt="Emoji" className="w-6 h-6" />
          </button>
          <button>
            <img src={gif} alt="GIF" className="w-6 h-6" />
          </button>
             </div> */}
        <div className="flex justify-between items-center mt-4">
          {[stopicon, emojiblack, gif].map((icon, index) => (
            <div key={index} className="p-2 text-gray-500">
              <img src={icon} alt={`Icon ${index + 1}`} className="w-6 sm:w-8" />
            </div>
          ))}
        </div>
      </div>




    </div>
  );
}