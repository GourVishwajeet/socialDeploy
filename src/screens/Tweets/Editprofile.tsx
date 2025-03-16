import React, { useState } from "react";
import Sidemenu from "../Home/homecomponents/Sidemenu";
import Header from "../Home/homecomponents/Header";
import Settings from "./Settings";
import Edit from "./Edit";


export default function Editprofile() {
  const [selectedOption, setSelectedOption] = useState("Edit profile");

  // Function to render the content based on the selected option
  const renderContent = () => {
    switch (selectedOption) {
      case "Edit profile":
        return <Edit />;
      case "Privacy and security":
        return ;
      case "Help":
        return ;
      // Add more cases for other options
      default:
        return <div>Select an option to view its content.</div>;
    }
  };

  return (
    <div className="flex w-full">
      <Sidemenu />
      <div className="flex flex-col w-full xl:ml-64 flex-grow">
        <div className="flex mt-7 mx-7 border mb-10 h-auto">
          {/* Pass the selectedOption and setSelectedOption to Settings */}
          <Settings
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          {/* Render the content dynamically */}
          <div className="flex-1">{renderContent()}</div>
        </div>
        <footer className="text-gray-500 text-sm text-center mt-6 w-full mb-5">
          <div className="flex flex-wrap justify-center space-x-4 max-w-full">
            <span>Meta</span>
            <span>About</span>
            <span>Blog</span>
            <span>Jobs</span>
            <span>Help</span>
            <span>API</span>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Top Accounts</span>
            <span>Locations</span>
            <span>Instagram Lite</span>
            <span>Contact Uploading & Non-Users</span>
            <span>Meta Verified</span>
          </div>
          <div className="mt-2">
            <span>English ⌄</span> <span>© 2023 Instagram from Meta</span>
          </div>
        </footer>
      </div>
    </div>
  );
}