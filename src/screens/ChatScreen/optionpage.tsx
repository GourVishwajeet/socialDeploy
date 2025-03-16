import chatop1 from "../../../public/chatop1.svg"
import chatop2 from "../../../public/chatop2.svg"
import chatop3 from "../../../public/chatop3.svg"


const data=[{id:1 , image:chatop1 },{ id:2 , image:chatop2 },{ id:3 ,image:chatop3 }]



export default function OptionChat(){
    return(
        <div>
            <div className="flex mt-3">
                <div><img src="/arrow-right.svg"/></div>
                <div className="flex ml-72 font-semibold items-center">broklyn_s_07 <img src="/verified.png" className="ml-1 w-4 h-4"/></div>
                <div className="ml-67"><img src="/more-vertical.svg"/></div>
            </div>
            <div className=" flex justify-center mt-8"><img src="/Ellipse 3087.svg"/></div>
            <div className="flex justify-center mt-6">
                <div className="flex-col">
                <div className="ml-1"><img src="/user.svg"/></div>
                <div className="text-sm font-semibold">Profile</div>
                </div>
                <div className="flex-col ml-10">
                <div className="ml-1"><img src="/search.svg"/></div>
                <div className="text-sm font-semibold">Search</div>
                </div>
                <div className="flex-col ml-10">
                <div><img src="/bell.svg"/></div>
                <div className="text-sm font-semibold">Mute</div>
                </div>
                <div className="flex-col ml-10">
                <div className="ml-2"><img src="/more-horizontal.svg"/></div>
                <div className="text-sm font-semibold">Options</div>
                </div>
            </div>
            <div className="flex-col ml-55 mt-10">
                    <div className="flex items-center">
                        <div><img src="/Ellipse 515.svg"/></div>
                        <div className="ml-3 flex-col"><div className="font-semibold text-sm">Theme</div><div className="text-xs ml-0.5 -mt-0.5">Default</div></div>
                    </div>
                    <div className="flex items-center mt-5 ml-1">
                        <div><img src="/Vector.svg"/></div>
                        <div className="font-semibold text-sm ml-3">Chat Controls</div>
                    </div>
                    <div className="flex items-center mt-5 ml-1">
                        <div><img src="/lock.svg"/></div>
                        <div className="font-semibold text-sm ml-3">Privacy & safety</div>
                    </div>
            </div>
            <div className="flex mt-10 ml-67">
                    <div><img src="/repeat.svg"/></div>
                    <div className="ml-28"><img src="/stack.svg"/></div>
            </div>
            <div className="flex mt-3 flex-wrap w-max ml-15">
            {data.map((item)=>(
            <div>
            <img src={item.image} />
            </div>
             ))}
            </div>
        </div>
    )
}