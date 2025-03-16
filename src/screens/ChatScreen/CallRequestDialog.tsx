import { RiCloseLargeFill } from "react-icons/ri";
import storypic from "../../../public/storypic.svg"
import sendbutton from '../../../public/sendbutton.svg'


export default function RequestDialog(){
    const items = [
        { id: 1, picture: storypic, icon: sendbutton, text1: 'Juan' , text2: 'Juals_drnk_oik' },
        { id: 2, picture: storypic, icon: sendbutton, text1: 'Juan' , text2: 'Juals_drnk_oik'  },
        { id: 3, picture: storypic, icon: sendbutton, text1: 'Juan' , text2: 'Juals_drnk_oik'  },
        { id: 4, picture: storypic, icon: sendbutton, text1: 'Juan' , text2: 'Juals_drnk_oik'  },
        { id: 5, picture: storypic, icon: sendbutton, text1: 'Juan' , text2: 'Juals_drnk_oik'  },
        { id: 6, picture: storypic, icon: sendbutton, text1: 'Juan' , text2: 'Juals_drnk_oik' },
        { id: 7, picture: storypic, icon: sendbutton, text1: 'Juan' , text2: 'Juals_drnk_oik' },
      ];

    return(
    <div>
<div className="flex justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
      <div className="absolute right-6 top-15 cursor-pointer ">
      <RiCloseLargeFill size={25} />
      </div>
    <div className="w-[360px]  h-[620px]  rounded-2xl bg-white mt-1.5 ml-20">
     <div className="font-semibold text-2xl flex justify-center mt-6">Send Call Request</div> 
     <div className="flex ml-2">
            <div className="w-80 h-8 border border-gray-200 bg-gray-50 m-3 rounded-xl flex ">
             <img src="/Icon.svg" className="m-2"/>
             <input type="text" placeholder="Search ..." className="bg-transparent outline-none"/>
            </div>
    </div>
    <div className="mt-2.5 ml-4">
    {items.map((item) => (
                    <div  key={item.id}  className="mb-2 flex">
                      <img src={item.picture}/>
                      <div className="flex-col ml-3 mt-1 ">
                        <div className="font-semibold text-base">{item.text1}</div>
                        <div className="text-sm">{item.text2}</div>
                      </div>
                       <img src={item.icon} className="ml-auto mr-6 cursor-pointer"  /> 
                      
                    </div>
                  ))}
    </div>




     </div>
</div>
    </div>)
}