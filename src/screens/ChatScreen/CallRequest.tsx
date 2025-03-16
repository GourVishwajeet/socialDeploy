import RequestDialog from "./CallRequestDialog";
import Sidemenu from "../Home/homecomponents/Sidemenu";
import Call from "./Call";




export default function CallRequest(){

    
    

return(
<div className="relative h-screen">
  
  
  {/* sidebarrrr */}

<div className="fixed">
  <div className=" bg-white fixed shadow-md top-0 left-0  grid-flow-col border-r-2 border-r-customGray max-w-64 h-screen place-content-center z-50 ">
  <Sidemenu/>
  </div>
    <div >
    <Call/>
    </div>
    </div>
    <RequestDialog/>
</div>

)
}