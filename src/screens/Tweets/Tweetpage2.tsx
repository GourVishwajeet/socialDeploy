import Sidemenu from "../Home/homecomponents/Sidemenu"
import Header from "../Home/homecomponents/Header"
import Notifications from "./NotificationBox"
import Privatemessages from "./Messages"



export default function Messages(){
    return(
        <div>
            <div className='flex '>
                    <Sidemenu/>
                 <div>
                  <div >
                    <Header/>
                  </div>
                  <div className='flex ml-96'>
                    <div className="-ml-32">
                      <Notifications/>
                    </div>
                    <div className="mt-15 ml-80">
                      <Privatemessages/>
                    </div>
                    
                  </div>
                 </div>
                </div>
        </div>
    )
}