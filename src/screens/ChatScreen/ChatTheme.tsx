import ThemeDialog from "./ThemeDialog";
import Sidemenu from "../Home/homecomponents/Sidemenu";
import RequestwithoutcirclePage from "./Requestwithoutcirclepage";




export default function ChatTheme(){

    
    

return(
<div className="relative h-screen">
  
  
  {/* sidebarrrr */}


  <div className=" bg-white fixed shadow-md top-0 left-0  grid-flow-col border-r-2 border-r-customGray max-w-64 h-screen place-content-center z-50 ">
  <Sidemenu/>
  </div>
  {/* Home */}
    <div className="fixed">
        <RequestwithoutcirclePage/>
    </div>
    <ThemeDialog/>
</div>

)
}