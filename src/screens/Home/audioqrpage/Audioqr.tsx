import Frame from "../../../assets/Frame.svg"
import qr from "../../../assets/qr.svg"

export default function Audioqr() {
  return (
    <div className="flex justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
      <div className="absolute right-9 mt-[-550px] ">
        <img src={Frame} />
      </div>
      <div className="max-w-[300px] w-full justify-center items-center flex flex-col h-[420px] border rounded-xl bg-white">
        
              <div className="flex flex-col w-[250px] mb-6  border-b-2 items-center border-b-customGray">
            <img src={qr} className="w-[210px]"/>
            <p className="text-metatitle3 font-medium text-peterriver mt-2 mb-6">by@official_jassi_kirarkot</p>
              </div>
              <div className="flex justify-center items-center text-[11px] mb-4 mx-4 text-gray-500 text-center">
             People can scan this QR code with their smartphone’s camera to listen to this audio </div>
             <div className="flex m-2">
               <div className="w-[120px]  font-roboto h-auto p-1 border border-gray-400 rounded-md text-center items-center justify-center text-sectiontitle ml-2 hover:bg-peterriver hover:text-white">Save draft</div>
               <div className="w-[120px]  font-roboto h-auto p-1 border border-gray-400 rounded-md text-center items-center justify-center text-sectiontitle ml-2 hover:bg-peterriver hover:text-white">Share</div>
             </div>
        </div>
    </div>
  );
}
