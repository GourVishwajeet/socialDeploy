import Sidemenu from "../Home/homecomponents/Sidemenu"
import Header from "../Home/homecomponents/Header"
import BlurRequest from "./BlurRequest"
import ChatDisplay from "./Chatdisplay"



export default function BlurRequestPage(){
    return(
        <div>
            <div className='flex'>
                    <Sidemenu/>
                 <div>
                  <div >
                    <Header/>
                  </div>
                  <div className='flex ml-24 mt-15'>
                   <div className="ml-40 border border-neutral-300">
                      <BlurRequest/>
                    </div>
                  <div className="w-full ml-5">
                  <ChatDisplay/>
                  </div>
                    
                  </div>
                 </div>
             </div>
        </div>
    )
}