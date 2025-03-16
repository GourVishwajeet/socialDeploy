import Frame from "../../../assets/Frame.svg";
import cam from "../../../assets/cam.svg";
import songicon from "../../../assets/songicon.svg";
import musicicon from "../../../assets/musicicon.svg";
import saveicon from "../../../assets/saveicon.svg";
import mapicon from "../../../assets/mapicon.svg"
import location from "../../../assets/location.svg"
import arrowleft from "../../../assets/arrowleft.svg"
export default function Reelcreated() {
  return (
    <div className="flex justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
      <div className="absolute  right-9 mt-[-550px]">
        <img src={Frame} />
      </div>
      <div className="max-w-[320px] w-full justify-center flex flex-col h-auto border rounded-xl bg-white p-2">
        <div className="text-regular border-b-2 text-center p-1 w-full font-roboto flex justify-end pb-2">
          <div className="">In This Reel</div>
          <img src={cam} className="ml-[70px]" />
        </div>
        <div className="mt-4 flex items-center justify-center border-b-2 mb-3 ">
          <div className="flex items-center justify-center p-3 mx-5 border-b-2 border-b-black font-medium">
            Created with
          </div>
          <div className="flex items-center justify-center p-3 mx-5 ">
            Accounts
          </div>
        </div>
        <div className="h-auto flex items-center mt-5 ml-5 mr-3 justify-between">
          <div className="flex">
            <img src={songicon} className="w-10" />
            <div>
              <div className="flex items-center ml-3">
                <img src={musicicon} />
                <span className="ml-2 text-metatitle font-roboto">
                  song name-Orginal audio
                </span>
              </div>
              <div className="text-[13px] text-gray-400 ml-3 font-medium">
                VDJ Fly
              </div>
            </div>
          </div>

          <img src={saveicon} />
        </div>
        <div className="h-auto flex items-center mt-4 ml-5 mr-3 justify-between">
        <div className="flex">
            <img src={mapicon} className="w-10" />
          
              <div className="flex items-center ml-3">
                <img src={location} />
                <span className="ml-2 text-metatitle font-roboto">
                  explore.org
                </span>
              </div>
             
            
          </div>

          <img src={arrowleft} />

        </div>
      </div>
    </div>
  );
}
