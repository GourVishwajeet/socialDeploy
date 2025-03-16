import image1 from "../../assets/Image1.svg"
import image2 from "../../assets/Image2.svg"
import image3 from "../../assets/Image3.svg"
import image4 from "../../assets/Image4.svg"
import image5 from "../../assets/Image 5.svg"
import image6 from "../../assets/Image6.svg"
import image7 from "../../assets/Image7.svg"
import image8 from "../../assets/Image8.svg"
import image9 from "../../assets/image9.svg"
import Frama from "../../assets/Frama.svg"


import stopicon from "../../assets/stopicon.svg"
import emojiblack from "../../assets/emojiblack.svg"
import gif from "../../assets/gif.svg"


const avatarImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9];


export default function GiphyStickers() {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900 p-4">
      
      <div className="absolute top-4 right-4 sm:top-8 sm:right-9">
        <img src={Frama}  />
      </div>

     
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg bg-white rounded-lg shadow-lg p-4 sm:p-6">
       
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search GIPHY stickers"
            className="w-full h-8 p-2 border bg-slate-200 rounded-3xl focus:outline-none focus:ring-2"
          />
        </div>

       
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm sm:text-lg font-semibold">YOUR AVATAR</h2>
          <div className="text-blue-500 hover:underline cursor-pointer text-xs sm:text-sm">Edit</div>
        </div>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {avatarImages.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img src={image} alt={`Avatar ${index + 1}`} className="w-12 sm:w-16 md:w-20" />
            </div>
          ))}
        </div>
 
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


