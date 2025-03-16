import { useState } from "react"



export default function CallDisplay(){
    const[active,setActive]=useState(false)
    return(<div>
        <div>
            <img src="/call.svg" className="w-[800px]" onClick={()=>setActive(!active)}/>
            <img src="/call1.svg" className="absolute top-20 right-8 cursor-pointer"/>
            <img src="/Back.svg" className="absolute top-20 ml-5 cursor-pointer" onClick={()=>setActive(!active)}/>
            <div className="flex">
            <img src="/Mute.svg" className="absolute top-[950px] ml-72 cursor-pointer"/>
            <img src="/Volume.svg" className="absolute top-[950px] ml-[350px] cursor-pointer"/>
            <img src="/Videocall.svg" className="absolute top-[950px] ml-[410px] cursor-pointer" />
            <img src="/End call.svg" className="absolute top-[950px] ml-[480px] cursor-pointer"/>
            </div>
            {active?
            <div className="bg-black w-[190px] h-[190px] absolute top-35 ml-6 opacity-65 p-3 rounded-lg ">
                <div className="flex">
                    <div><img src="visionpro.svg" className="mt-2 "/></div>
                    <div className="font-semibold text-xs text-white mt-2 ml-3">Connect vision pro</div>
                </div>
                <hr className=" mt-3  border-white"/>
                <div className="flex items-center">
                    <div><img src="smartphone.svg" className="mt-2 "/></div>
                    <div className="font-semibold text-xs text-white mt-2 ml-3">Connect Other Device</div>
                </div>
                <hr className=" mt-3 border-white"/>
                <div className="flex items-center">
                    <div><img src="language.svg" className="mt-2 "/></div>
                    <div className="font-semibold text-xs text-white mt-2 ml-3">language translator</div>
                </div>
                <hr className=" mt-3  border-white"/>
                <div className="flex items-center">
                    <div><img src="plus.svg" className="mt-2 "/></div>
                    <div className="font-semibold text-xs text-white mt-2 ml-3">language translator</div>
                </div>
            </div>:<></>}
        </div>
    </div>)
}