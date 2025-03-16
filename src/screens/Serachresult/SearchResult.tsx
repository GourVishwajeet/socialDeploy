import Sidebar from "./Sidebar"
import Header from "../Home/homecomponents/Header"
// import Mainprofile from "../Home/Profile/Mainprofile"
export default function SearchResult(){
    return(<div>
           <div>
            <Header/>
            </div> 
        <div className="flex ">
         <div className=" w-96" >
         <Sidebar/>
         </div>
         <div className="-ml-60">
         {/* <Mainprofile/> */}
         </div>
        </div>

        

    </div>)
    
}