
import userprofile from "../../assets/userprofile.svg"
import tick from "../../assets/tick.svg"
import cross from "../../assets/cross.svg"


export default function Sidebar() {

    const items = [
        { id: 1, picture: userprofile, username: "ted", idname: "TED Talks" },
        { id: 1, picture: userprofile, username: "ted", idname: "TED Talks" },
        { id: 1, picture: userprofile, username: "ted", idname: "TED Talks" },
        { id: 1, picture: userprofile, username: "ted", idname: "TED Talks" },
        { id: 1, picture: userprofile, username: "ted", idname: "TED Talks" },


    ];


    return (
        <div className="flex flex-col h-screen max-w-[400px] border-2  ">


            <div className=" items-start m-5  text-left align-top flex justify-between">
                <div className="font-roboto  text-regular font-bold mr-50 ">Recent</div>
                <div className="text-sky -500 dark:text-sky-400 font-bold ">Clear all</div>
            </div>

            {items.map((item) => (
                <div className="ml-5 mt-3 mb-1  flex justify-between "  >
                    <div className="flex">
                        <img src={item.picture} />

                        <div className="flex flex-col ml-2  justify-start items-center ">
                            <div className="flex w-full justify-start  items-center">
                                <div>{item.username}</div>
                                <img src={tick} className="pl-1" />
                            </div>
                            <div>
                                <div className="text-gray-400 text-sm">{item.idname}</div>
                            </div>
                        </div></div>


                    <img src={cross} className="mr-4 5-2 w-5" />

                </div>

            ))}
























            {/* <div className="mt-4 m-5  flex "  >

                    <img src={Frame} />

                    <div className="flex flex-col ml-2  justify-start items-center ">
                        <div className="flex w-full justify-start  items-center">
                            <div>openaidalle</div>
                            <img src={tick} className="pl-1" />
                        </div>
                        <div>
                            <div className="text-gray-400 text-sm">DALL E by OpenAI.Following</div>
                        </div>
                    </div>
                    <img src={cross} className="ml-40" />

                </div>
             */}








        </div>


    )
}
