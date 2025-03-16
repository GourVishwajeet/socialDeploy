import Frame from "../../../assets/Frame.svg";
import giftimf from "../../../assets/giftimg.svg";
import ribbonimg from "../../../assets/ribbonimg.svg";

export default function Starsbalance() {
  return (
    <div className="flex justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
      <div className="absolute  right-9 mt-[-550px] ">
        <img src={Frame} />
      </div>
      <div className="max-w-[320px] w-full justify-center flex flex-col h-[430px] border rounded-xl bg-white">
        <div className="text-regular border-b-2 text-center p-3 w-full font-roboto">
          Add 10 <s>15</s> stars to the balance
        </div>
        <div className="items-center flex justify-center">
          <img src={giftimf} className="w-[120px]" />
        </div>
        <div className="flex text-center justify-center font-medium fonr-roboto">
          Current balance : 0
        </div>
        <div className="flex text-center justify-center text-metatitle ml-2 text-gray-600 w-[300px] mt-3 mb-3">
          1 star will automatically be spent on this gift to coffee.com
        </div>
        <div className="flex max-w-[320px] w-full justify-center">
          <img src={ribbonimg} className="mr-7 mb-8" />
          <div className="flex mb-3 flex-col">
            <p className="text-[11px] font-roboto w-[210px] text-gray-500">
              Free Stars on us. Get 5 extra stars on Your first purchase.
            </p>
          </div>
        </div>
        
        <div className="w-auto ml-5 mr-5 mb-2 h-[35px] bg-peterriver rounded-md text-white font-medium font-inter justify-center flex items-center text-sectiontitle">
           Buy 15 Stars($30.00)
        </div>
        <div className="flex text-center justify-center text-[11px] ml-2 text-gray-600 w-[300px] mt-3 mb-3">
        By placing this order, you agree to ai's stars terms and Payment Terms.
        </div>

      </div>
    </div>
  );
}
