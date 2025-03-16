import Createpostpic from "../../assets/Createpostpic.svg";
import Frame from "../../assets/Frame.svg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export default function Createpost() {
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; 
    if (file) {
      const reader = new FileReader();
      
      reader.onload = () => {
        setSelectedImage(reader.result as string); // Ensuring correct type casting
        navigate("/storypage", { state: { image: reader.result } }); // Corrected path to /story
      };

      reader.onerror = () => {
        console.error("Error reading file");
        alert("Error reading file. Please try again.");
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    document.getElementById("fileInput")?.click(); // Safely triggering the file input
  };

  return (
    <div className="flex justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
      <div className="absolute right-9 mt-[-550px]">
        <img src={Frame} alt="Frame" />
      </div>
      <div className="w-[360px] h-[350px] border rounded-xl bg-white">
        <div className="w-full flex justify-center items-center font-medium border-b-customGray border-b-2 p-1 pb-2">
          Create new post
        </div>
        <div className="flex flex-col justify-center w-full h-[250px] items-center">
          <img src={Createpostpic} alt="Create Post" />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="fileInput"
          />
          <h3>Drag photos and Videos here</h3>
          <div className="mt-3">
            <label
              className="text-white text-metatitle font-inter bg-peterriver p-2 rounded-md font-medium"
              onClick={handleClick} // Triggering the file input click
            >
              Select from computer
            </label>
          </div>
          {selectedImage && (
            <div>
              <img
                src={selectedImage}
                alt="Selected"
                className="mt-3 rounded-lg w-[200px] h-[200px] object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
