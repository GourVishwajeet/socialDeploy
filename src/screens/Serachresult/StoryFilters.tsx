import { useState } from "react";
import arrow from "../../assets/arrow.svg";
import Frame from "../../assets/Frame.svg";
// import DiscardDialog from "./DialogBoxes/DiscardDialog";
import { useNavigate, useLocation } from "react-router-dom";

export default function StoryFilters() {
   const navigate = useNavigate();
    const location = useLocation();
  const image = location.state?.image;

 
  const [selectedTab, setSelectedTab] = useState("filters");
  //  const [isDiscardOpen, setIsDiscardOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const [adjustments, setAdjustments] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    fade: 0,
  });



  
  const combinedStyles = {
    filter: `
      ${activeFilter}
      brightness(${adjustments.brightness}%)
      contrast(${adjustments.contrast}%)
      saturate(${adjustments.saturation}%)
      opacity(${100 - adjustments.fade}%)
    `,
  };

  return (
    <div className="flex justify-center h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
      <div className="absolute right-9 mt-[-550px]">
        <img src={Frame} alt="Frame" onClick={() => navigate("/discard")} />
        {/* {isDiscardOpen&& <DiscardDialog onClose={() => setIsDiscardOpen(false)} />} */}
      </div>
      <div className="bg-slate-100 w-[90%] lg:w-[680px] h-auto flex flex-col">
        {/* Header */}
        <div className="flex justify-between p-2 border-b-2">
          <div className="text-4xl">
            <img
              src={arrow}
              alt="Back"
              onClick={() => navigate("/storypage", { state: { image } })}
            />
          </div>
          <div className="font-bold">Edit</div>
          <div
            className="text-blue-400 font-bold"
            onClick={() => navigate("/creatnewpost", { state: { image , activeFilter  } })}
          >
            Next
          </div>
        </div>

       
        <div className="flex flex-col lg:flex-row w-full h-[360px]">
         
          <div className="rounded-xl flex justify-center">
            <img
              src={image}
              style={combinedStyles}
              className="w-full lg:w-[390px] max-h-[300px] lg:max-h-full object-cover"
              alt="Editable"
            />
          </div>

         
          <div className="flex flex-col w-full lg:w-[310px] overflow-y-scroll lg:h-[320px]">
          
            <div className="border-b-2 w-full p-2 flex justify-center space-x-4">
              <div
                className={`inline text-xs px-7 py-2 cursor-pointer ${
                  selectedTab === "filters"
                    ? "text-blue-700 font-bold border-b-2 border-blue-700"
                    : "text-gray-400"
                }`}
                onClick={() => setSelectedTab("filters")}
              >
                Filters
              </div>
              <div
                className={`inline text-xs px-4 py-2 cursor-pointer ${
                  selectedTab === "adjustment"
                    ? "text-blue-700 font-bold border-b-2 border-blue-700"
                    : "text-gray-400"
                }`}
                onClick={() => setSelectedTab("adjustment")}
              >
                Adjustment
              </div>
            </div>

           
            {selectedTab === "filters" && (
              <div className=" grid grid-cols-3 sm:grid-cols-3 gap-3">
                {[
                  { name: "Aden", filter: "brightness(110%)" },
                  { name: "Clarendon", filter: "contrast(120%) saturate(120%)" },
                  { name: "Crema", filter: "sepia(20%)" },
                  { name: "Gingham", filter: "grayscale(50%)" },
                  { name: "Juno", filter: "saturate(200%)" },
                  { name: "Lark", filter: "brightness(120%) contrast(110%)" },
                  { name: "Moon", filter: "grayscale(100%)" },
                  { name: "Willow", filter: "sepia(50%)" },
                  { name: "Willow", filter: "sepia(50%)" },
                ].map(({ name, filter }, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setActiveFilter(filter)}
                  >
                    <div className="w-16 h-16 overflow-hidden border border-gray-300">
                      <img
                        src={image}
                        className={`w-full h-full object-cover`}
                        style={{ filter }}
                        alt={name}
                      />
                    </div>
                    {name && (
                      <p className="text-sm mt-1 text-gray-600">{name}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Adjustment Section */}
            {selectedTab === "adjustment" && (
              <div className="p-4 text-gray-600">
                {[
                  { label: "Brightness", key: "brightness" },
                  { label: "Contrast", key: "contrast" },
                  { label: "Saturation", key: "saturation" },
                  { label: "Fade", key: "fade" },
                ].map(({ label, key }) => (
                  <div className="flex flex-col mt-4" key={key}>
                    <label className="text-sm font-medium text-gray-700">
                      {label}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      // value={adjustments[key]}
                      onChange={(e) =>
                        setAdjustments({
                          ...adjustments,
                          [key]: e.target.value,
                        })
                      }
                      className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

