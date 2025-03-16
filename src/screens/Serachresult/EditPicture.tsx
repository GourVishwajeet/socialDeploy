import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import copylogo from "../../assets/copylogo.svg";
import screenbiglogo from "../../assets/screenbiglogo.svg";
import searchlogo from "../../assets/searchlogo.svg";
import arrow from "../../assets/arrow.svg";
import Frame from "../../assets/Frame.svg";
import DiscardDialog from "./DialogBoxes/DiscardDialog";
import { RxCrossCircled } from "react-icons/rx";
import { GoPlusCircle } from "react-icons/go";
// type LocationState = {
//   image?: string;
// };

export default function EditPicture() {
  const navigate = useNavigate();
  const location = useLocation();
  const image = location.state?.image;

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isDiscardOpen, setIsDiscardOpen] = useState(false);
  const [selectedRatio, setSelectedRatio] = useState("original");
  const [zoom, setZoom] = useState<number>(1);
  const [showZoomSlider, setShowZoomSlider] = useState<boolean>(false);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleZoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZoom(parseFloat(event.target.value));
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleRatioChange = (ratio: string): void => {
    setSelectedRatio(ratio);
  };

  // Copy Image to Preview List
  const handleCopyClick = () => {
    if (image && previewImages.length < 5 && !previewImages.includes(image)) {
      setPreviewImages([...previewImages, image]);
    }
  };

  // Upload New Image
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      if (previewImages.length < 5) {
        setPreviewImages([...previewImages, imageUrl]);
      }
    }
  };

  // Remove Image from Preview List
  const handleRemoveImage = (index: number) => {
    setPreviewImages(previewImages.filter((_, i) => i !== index));
  };

  return (
    <div className="flex justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
      <div className="absolute right-9 mt-[-550px] z-40">
        <img src={Frame} alt="Frame" onClick={() => setIsDiscardOpen(true)} />
      </div>
      <div className="w-[400px] h-[400px] flex flex-col justify-between bg-slate-100 rounded-lg z-40">
        <div className="flex justify-between p-[10px]">
          <img
            src={arrow}
            className="w-6 h-6 cursor-pointer"
            alt="Back"
            onClick={() => setIsDiscardOpen(true)}
          />
          <div className="font-bold">Crop</div>
          <div
            className="text-blue-400 font-bold cursor-pointer"
            onClick={() => navigate("/filterimage", { state: { image } })}
          >
            Next
          </div>
        </div>

        <div className="relative h-full flex justify-center items-center">
          {image ? (
            <img
              src={image}
              style={{ transform: `scale(${zoom})` }}
              alt="Selected"
              className={`w-full h-full object-cover ${selectedRatio === "1:1"
                  ? "aspect-square"
                  : selectedRatio === "4:5"
                    ? "aspect-[4/5]"
                    : selectedRatio === "16:9"
                      ? "aspect-[16/9]"
                      : ""
                }`}
            />
          ) : (
            <p className="text-center text-gray-500">No image selected.</p>
          )}

          <div className="flex absolute bottom-5 items-center gap-64 justify-center">
            <div className="flex space-x-6 ">
               <img src={screenbiglogo}
                alt="Expand"
                className="cursor-pointer"
                onClick={toggleMenu}
              />


              <img
                src={searchlogo}
                alt="Search"
                className="cursor-pointer"
                onClick={() => setShowZoomSlider(!showZoomSlider)}
              />
            </div>
            <img
              src={copylogo}
              className="cursor-pointer"
              alt="Copy"
              onClick={handleCopyClick}
            />
          </div>

          {/* Zoom Slider */}
          {showZoomSlider && (
            <div className="absolute bottom-16 left-5 bg-gray-700 p-2 rounded-lg">
              <input
                type="range"
                min="1"
                max="3"
                step="0.1"
                value={zoom}
                onChange={handleZoomChange}
                className="w-35 cursor-pointer"
              />
            </div>
          )}

          {/* Crop Options Menu */}
          {isMenuVisible && (
            <div className="absolute bottom-[80px] bg-gray-800 text-white space-y-2 shadow-lg rounded-lg p-2 w-32">
              {["original", "1:1", "4:5", "16:9"].map((ratio) => (
                <div
                  key={ratio}
                  className="flex justify-between items-center px-2 py-1 cursor-pointer"
                >
                  <span className="text-sm">{ratio}</span>
                  <input
                    type="radio"
                    name="aspect-ratio"
                    className="form-radio cursor-pointer"
                    checked={selectedRatio === ratio}
                    onChange={() => handleRatioChange(ratio)}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Preview Image Section */}
          {previewImages.length > 0 && (
            <div className="absolute bottom-10 right-10 bg-black bg-opacity-60 p-2 rounded-lg flex items-center space-x-2">
              {previewImages.map((img, index) => (
                <div key={index} className="relative w-14 h-14">
                  {/* Cross Button to Remove Image */}
                  <button
                    className="absolute -top-1 -right-1  text-white bg-gray-800 rounded-full w-5 h-5 flex items-center justify-center  cursor-pointer"
                    onClick={() => handleRemoveImage(index)}
                  >
                  <RxCrossCircled className="w-5 h-5 " />
                  </button>
                  <img
                    src={img}
                    className="w-full h-full object-cover rounded border border-white"
                  />
                </div>
              ))}

              {/* Empty Slot for New Image */}
              {previewImages.length < 5 && (
                <div className="w-14 h-14 flex items-center justify-center rounded cursor-pointer">
                  <label htmlFor="imageUpload">
                    {/* <img src={tick} alt="Add" className="w-6 h-6 cursor-pointer" /> */}
                    <GoPlusCircle className="w-10 h-10 cursor-pointer"/>
                  </label>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Discard Dialog */}
      {isDiscardOpen && <DiscardDialog onClose={() => setIsDiscardOpen(false)} />}
    </div>
  );
}


