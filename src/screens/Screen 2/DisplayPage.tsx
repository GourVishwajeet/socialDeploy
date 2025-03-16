import Sidemenu from "../Home/homecomponents/Sidemenu"
import Header from "../Home/homecomponents/Header"
import Mainprofile from "../Screen 2/Mainprofile"


export default function Screen2(){
    return(
        <div>
    <div className='flex'>
        <Sidemenu/>
     <div>
      <div >
        <Header/>
      </div>
      <div className='flex ml-40 mt-15'>
       <div>
          <Mainprofile/>
        </div>
        <div>
      
        </div>
        
      </div>
     </div>
</div>
        </div>
    )
}