import Sidemenu from "../Home/homecomponents/Sidemenu"
import Header from "../Home/homecomponents/Header"
import Primary from "./PrimaryChat"
import ChatDisplay from "./Chatdisplay"



export default function PrimaryPage(){
    return(
        <div>
            <div className='flex'>
                    <Sidemenu/>
                 <div>
                  <div >
                    <Header/>
                  </div>
                  <div className='flex -ml-40'>
                   <div className="ml-40 border border-neutral-300">
                      <Primary/>
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