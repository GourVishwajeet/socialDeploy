import Sidemenu from "../Home/homecomponents/Sidemenu"
import Header from "../Home/homecomponents/Header"
import General from "./GerneralChat"
import ChatDisplay from "./Chatdisplay"



export default function GeneralPage(){
    return(
        <div>
            <div className='flex'>
                    <Sidemenu/>
                 <div>
                  <div >
                    <Header/>
                  </div>
                  <div className='flex ml-22 mt-15'>
                   <div className="ml-40 border border-neutral-300">
                      <General/>
                    </div>
                  <div className="w-full ml-8">
                  <ChatDisplay/>
                  </div>
                    
                  </div>
                 </div>
            </div>
        </div>
    )
}