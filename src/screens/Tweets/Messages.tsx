export default function Privatemessages(){
    return(
        <div className=" w-[708px] h-[790px] fixed">
            <div className="border border-gray-300 w-[680px] h-[500px] ml-15 mt-10 flex-col">
                <div><img src="/direct.svg" className="ml-72 mt-35"/></div>
                <div className="ml-67 mt-3 text-xl font-semibold">Your Messages</div>
                <div className="ml-40 text-sm text-gray-500">Send private photos and messages to a friend or group</div>
                <div className="cursor-pointer border border-blue-600 w-30 mt-6 ml-67.5 text-center p-1.5 rounded-lg bg-blue-500 text-white text-regular">Send Message</div>
            </div>
        </div>
    )
}