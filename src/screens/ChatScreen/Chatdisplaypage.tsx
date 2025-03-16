import Sidemenu from "../Home/homecomponents/Sidemenu"
import Header from "../Home/homecomponents/Header"
import General from "./GerneralChat"
import ChatDisplay from "./Chatdisplay"



export default function ChatDisplayPage(){
    return(
        <div>
            <div className='flex'>
                    <Sidemenu/>
                 <div>
                  <div >
                    <Header/>
                  </div>
                  <div className='flex ml-24 mt-15'>
                   <div className="xl:ml-40 md:-ml-6 xsm:-ml-24 border border-neutral-300">
                      <General/>
                    </div>
                  <div className="w-full xl:ml-8 md:ml-2 ">
                  <ChatDisplay/>
                  </div>
                    
                  </div>
                 </div>
            </div>
        </div>
    )
}