import arrow from "../../assets/arrow.svg";
import emoji from "../../assets/emoji.svg";
import vector from "../../assets/Vector.svg";
import loc from "../../assets/loc.svg";
import copy from "../../assets/copy.svg";
import Frame from "../../assets/Frame.svg";
import DiscardDialog from "./DialogBoxes/DiscardDialog";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function NewPost() {
    const navigate = useNavigate();
    const location = useLocation();
    const { image, activeFilter } = location.state || {};
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [showAccessibility, setShowAccessibility] = useState(false);
    const [isDiscardOpen, setIsDiscardOpen] = useState(false);

    // Toggle states for advanced settings
    const [hideLikes, setHideLikes] = useState(false);
    const [turnOffComments, setTurnOffComments] = useState(false);
    const [autoShare, setAutoShare] = useState(false);

    return (
        <div className="flex justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
            <div className="absolute right-9 mt-[-550px]">
                <img src={Frame} alt="Frame" onClick={() => setIsDiscardOpen(true)} />
                {isDiscardOpen && <DiscardDialog onClose={() => setIsDiscardOpen(false)} />}
            </div>
            <div className="w-[700px] h-85 flex flex-col bg-slate-100">
                <div className="flex justify-between p-2 border-b-2">
                    <div className="inline text-4xl">
                        <img src={arrow} onClick={() => navigate("/filterimage", { state: { image } })} />
                    </div>
                    <div className="inline font-bold">Create new post</div>
                    <div className="inline text-blue-400 font-bold" onClick={() => navigate("/")}>Share</div>
                </div>

                <div className="flex w-full h-auto">
                    <div className="w-full rounded-xl flex">
                        <img src={image} className="w-full h-full object-cover" style={{ filter: activeFilter }} />
                    </div>

                    <div className="flex w-full flex-col overflow-y-scroll lg:h-[350px] p-2">
                        <div className="flex space-x-2 mt-1">
                            <img src={copy} className="w-8 h-8" />
                            <div className="text-metatitle">mr.jen_122</div>
                        </div>

                        <div className="w-full flex justify-between p-2 border-b-2 mt-10">
                            <img src={emoji} />
                            <span className="flex justify-end">2/2,200</span>
                        </div>

                        <div className="flex flex-col">
                            <div className="w-full flex items-center justify-between">
                                <span className="text-sectiontitle">Add Location</span>
                                <img src={loc} />
                            </div>

                            <div className="w-full flex items-center justify-between mt-4 text-sm font-semibold text-gray-600 mb-2"  onClick={() => setShowAccessibility(!showAccessibility)}>
                                <span className="font-bold black">Accessibility</span>
                                <img src={vector}className={`transform transition-transform duration-300 ${showAccessibility ? 'rotate-180' : ''}`} />
                            </div>
                            
                            {showAccessibility && (
    <div className="text-metatitle">
        <p>Alt text describes your photos for people with visual impairments. Alt text will be automatically created for your photos or you can choose to write your own.</p>
        <div className="flex space-x-6">
            <img src={image} className="w-10 h-10" style={{ filter: activeFilter }} />
            <input placeholder="Write alt text..." className="w-auto p-2 border rounded-md text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-end" />
        </div>
    </div>
)}

                           
                           
                           
                            <div className="w-full flex items-center justify-between border-b-2 mt-4 text-sm font-semibold text-gray-600 mb-2" onClick={() => setShowAdvanced(!showAdvanced)}>
                                <span>Advanced Settings</span>
                                <img src={vector} className={`transform transition-transform duration-300 ${showAdvanced ? 'rotate-180' : ''}`} />
                            </div>

                            {showAdvanced && (
                                <div className="flex flex-col text-sm text-gray-600 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span>Hide like and view counts on this post</span>
                                        <button 
                                            className={`w-12 h-6 flex items-center rounded-full p-1 transition-all ${hideLikes ? 'bg-slate-200' : 'bg-gray-500'}`}
                                            onClick={() => setHideLikes(!hideLikes)}
                                        >
                                            <div className={`w-5 h-5 bg-white rounded-full transition-all ${hideLikes ? 'translate-x-6' : ''}`}></div>
                                        </button>
                                    </div>
                                    <p>Only you will see the total number of likes and views on this post. You can change this later by going to the ... menu at the top of the post.</p>

                                    <div className="flex items-center justify-between">
                                        <span>Turn off commenting</span>
                                        <button 
                                            className={`w-12 h-6 flex items-center rounded-full  p-1 transition-all ${turnOffComments ? 'bg-slate-200' : 'bg-gray-500'}`}
                                            onClick={() => setTurnOffComments(!turnOffComments)}
                                        >
                                            <div className={`w-5 h-5 bg-white rounded-full transition-all ${turnOffComments ? 'translate-x-6' : ''}`}></div>
                                        </button>
                                    </div>
                                    <p>You can change this later by going to the ... menu at the top of your post.</p>

                                    <div className="flex items-center justify-between">
                                        <span>Automatically share to Threads</span>
                                        <button 
                                            className={`w-12 h-6 flex items-center rounded-full p-1 transition-all ${autoShare ? 'bg-slate-200' : 'bg-gray-500'}`}
                                            onClick={() => setAutoShare(!autoShare)}
                                        >
                                            <div className={`w-5 h-5 bg-white rounded-full transition-all ${autoShare ? 'translate-x-6' : ''}`}></div>
                                        </button>
                                    </div>
                                    <p>Always share your posts to Threads. You can change your audience on Threads settings.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
