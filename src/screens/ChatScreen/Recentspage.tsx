import Frame from "../../assets/Frame.svg";
import arrowdown from "../../assets/arrowdown.svg";
import camera from "../../assets/Camera.svg";
import recents from "../../assets/recents.svg";
import photos from "../../assets/photos.svg";
import videos from "../../assets/videos.svg";
import Rectangle from "../../assets/Rectangle 25.svg";
export default function Recentspage() {
  return (
    <div className="flex justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
      <div className="absolute top-8 right-9 ">
        <img src={Frame} />
      </div>
      <div className="w-[320px]  h-[430px] border  rounded-xl bg-white p-3">
        <div className="text-[17px]  text-center pt-3 w-full font-roboto flex justify-center pb-3 ">
          Recents
          <img src={arrowdown} className="ml-2" />
        </div>

        <div className="flex items-center mb-12">
          <p className="text-metatitle text-gray-600 w-[210px]">
            You have given AI access to a select number of photos and videos.
          </p>
          <div className="text-peterriver font-medium">Manage</div>
        </div>
        <div className="mx-6 flex justify-between ">
          <div>
            <img src={camera} />
            <p className="text-[13px] text-center mt-4">Camera</p>
          </div>
          <div>
            <img src={recents} />
            <p className="text-[13px] text-center mt-4">Recents</p>
          </div>
          <div>
            <img src={photos} />
            <p className="text-[13px] text-center mt-4">Photos</p>
          </div>
          <div>
            <img src={videos} />
            <p className="text-[13px] text-center mt-4">Video</p>
          </div>
        </div>
        <div className="flex mt-6 justify-between mx-2">
          <p className="font-medium text-sectiontitle">Albums</p>
          <span className="font-medium text-peterriver">See All</span>
        </div>
        <div className="flex mt-4 justify-between">
          <div>
            <img src={Rectangle} className="w-[95px]" />
            <p className="text-[13px] text-center mt-4">Camera</p>
          </div>
          <div>
            <img src={Rectangle} className="w-[95px]" />
            <p className="text-[13px] text-center mt-4">Instagram</p>
          </div>
          <div>
            <img src={Rectangle} className="w-[95px]" />
            <p className="text-[13px] text-center mt-4">Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
