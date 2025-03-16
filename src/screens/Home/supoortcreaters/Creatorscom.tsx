import Frame from "../../../assets/Frame.svg";
import giftimf from "../../../assets/giftimg.svg";
import Heart from "../../../assets/Heart.svg";
import moneyimg from "../../../assets/moneyimg.svg"
import ribbonimg from "../../../assets/ribbonimg.svg"
export default function Creatorscom() {
  return (
    <div className="flex justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
      <div className="absolute  right-9 mt-[-550px]">
        <img src={Frame} />
      </div>
      <div className="max-w-[350px] w-full justify-center flex flex-col h-[500px] border rounded-xl bg-white">
        <div className="text-regular border-b-2 text-center p-3 w-full font-roboto">
          Support the creators you love
        </div>
        <div className="items-center flex justify-center">
          <img src={giftimf} className="w-[193px]" />
        </div>

        <div className="ml-6 mr-9 mt-4 flex flex-col">
          <div className="flex max-w-[320px] w-full">
            <img src={Heart} className="mr-8 mb-8" />
            <div className="flex mb-3  flex-col">
              <p className="text-[13px] font-roboto">
                Support the creators you like
              </p>
              <p className="text-metatitle font-roboto w-[214px] text-gray-600">
                Show your appreciation by sending gifts on reels.
              </p>
            </div>
          </div>

          <div className="flex max-w-[320px] w-full">
            <img src={moneyimg} className="mr-7 mb-8" />
            <div className="flex mb-3  flex-col">
              <p className="text-[13px] font-roboto">
                Creators can earn money
              </p>
              <p className="text-metatitle font-roboto w-[214px] text-gray-600">
                Show your appreciation by sending gifts on reels.
              </p>
            </div>
          </div>

          <div className="flex max-w-[320px] w-full">
            <img src={ribbonimg} className="mr-7 mb-8" />
            <div className="flex mb-3 flex-col">
              <p className="text-[13px] font-roboto">
                You can get recognized
              </p>
              <p className="text-metatitle font-roboto w-[214px] text-gray-600">
                Show your appreciation by sending gifts on reels.
              </p>
            </div>
          </div>
        </div>

        <div className="w-auto ml-5 mr-5 mb-2 h-[40px] bg-peterriver rounded-md text-white font-medium font-roboto justify-center flex items-center">
           Send first gift
        </div>


      </div>
    </div>
  );
}
