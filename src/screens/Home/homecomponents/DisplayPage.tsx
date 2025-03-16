import Sidemenu from "../homecomponents/Sidemenu"
import Header from "../homecomponents/Header"
import Mainprofile from "../homecomponents/Mainprofile"


export default function Screen2(){
    return(
        <div>
    <div className='flex' >
        <Sidemenu/>
     <div>
      <div >
        <Header/>
      </div>
      <div className='flex -ml-40'>
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