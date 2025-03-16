import Sidemenu from "../Home/homecomponents/Sidemenu"
import Header from "../Home/homecomponents/Header"
import Requestwithoutcircle from "./Requestwithoutcircle"
import CallDisplay from "./CallDisplay"




export default function Call(){
    return(
        <div>
            <div className='flex'>
                    <Sidemenu/>
                 <div>
                  <div >
                    <Header/>
                  </div>
                  <div className='flex ml-22 mt-15'>
                   <div className="ml-40 border border-neutral-300 fixed">
                      <Requestwithoutcircle/>
                    </div>
                  <div className="w-full ml-[480px]">
                  <CallDisplay/>
                  </div>
                    
                  </div>
                 </div>
                </div>
        </div>
    )
}