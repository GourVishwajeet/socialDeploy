import Frame from "../../assets/Frame.svg";
import arrowdown from "../../assets/arrowdown.svg";
import exchangearrow from "../../assets/exchangeicon.svg";
import SearchIcon from "../../assets/Search Icon.svg";
import gujrat from "../../assets/gujrat.svg"
import india from "../../assets/india.svg"
import tamilnadu from "../../assets/tamilnadu.svg"
import bengal from "../../assets/bengal.svg"
import maharashtra from "../../assets/maharashtra.svg"
import { useState } from "react";


export default function Languagedialog() {
  const [input, setinput] = useState("");
  
  const items = [
    { id: 1, picture: gujrat, languagename: "Gujarati", traditionalname:"ગુજરાતી" },
    { id: 1, picture: india, languagename: "Hindi", traditionalname:"ગુજરાતી" },
    { id: 1, picture: tamilnadu, languagename: "Tamil", traditionalname:"ગુજરાતી" },
    { id: 1, picture: bengal, languagename: "Bengali", traditionalname:"ગુજરાતી" },
    { id: 1, picture: maharashtra, languagename: "Marathi", traditionalname:"ગુજરાતી" }
  ];


  return (
    <div className="flex justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
      <div className="absolute top-8 right-9 ">
        <img src={Frame} />
      </div>
      <div className="max-w-[350px] w-full justify-center items-center flex flex-col h-auto border rounded-xl bg-white">
        <div className="text-[15px]  text-center p-2 pt-4 w-full font-roboto flex justify-center pb-3 font-semibold">
          Select Language
        </div>
        <div className="flex items-center text-center justify-between mb-3 w-[330px] border-b-2 p-5 pb-3 ">
          <div>
            <div className="text-metatitle font-roboto">Other person</div>
            <div className="flex">
              <div className="font-semibold text-sectiontitle font-roboto">
                English
              </div>
              <img
                src={arrowdown}
                className="ml-1 transform transition-transform duration-300 hover:rotate-180"
              />
            </div>
          </div>
          <img src={exchangearrow} />
          <div>
            <div className="text-metatitle font-roboto">Me</div>
            <div className="flex">
              <div className="font-semibold text-sectiontitle font-roboto">
              ગુજરાતી
              </div>
              <img
                src={arrowdown}
                className="ml-1 transform transition-transform duration-300 hover:rotate-180"
              />
            </div>
          </div>
        </div>
        <div className="w-[300px] h-9 rounded-2xl bg-customGray flex items-center opacity-80 justify-between mb-3">
          <input
            placeholder="Search..."
            type="text"
            value={input}
            onChange={(e) => setinput(e.target.value)}
            className="w-full border-0 ml-4 h-6 text-gray-600  text-sectiontitle bg-transparent outline-none placeholder-gray-700"
          />
          <img src={SearchIcon} className="mr-4" />
        
        </div>
        {items.map((item)=>(
         <div  className="bg-white hover:bg-peterriver hover:text-white w-[300px] border m-1 rounded-xl h-auto p-4 flex justify-between">
          <img src={item.picture}/>
          <div>
            <span className="text-regular font-roboto text-black">{item.languagename}</span>
            <span> - </span>
            <span className="text-regular font-roboto   text-black">{item.traditionalname}</span>
          </div>
         </div> ))}
      </div>
    </div>
  );
}
