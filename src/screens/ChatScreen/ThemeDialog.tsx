import { RiCloseLargeFill } from "react-icons/ri";
import storypic from "../../../public/storypic.svg"
import radio from "../../../public/radio.svg"


export default function ThemeDialog(){
    const items = [
        { id: 1, picture: storypic, icon: radio, text1: 'Avatar :' , text2: 'Live action' },
        { id: 2, picture: storypic, icon: radio, text1: 'J. lo' , text2: 'This is me...Now'  },
        { id: 3, picture: storypic, icon: radio, text1: "Valentine's Day" , text2: 'Groove On with Love'  },
        { id: 4, picture: storypic, icon: radio, text1: 'Love' , text2: '..'  },
        { id: 5, picture: storypic, icon: radio, text1: 'Football' , text2: ''  }
      ];

    return(
    <div>
<div className="flex justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
      <div className="absolute right-6 top-15 cursor-pointer ">
      <RiCloseLargeFill size={25} />
      </div>
    <div className="w-[360px]  h-[500px]  rounded-2xl bg-white mt-12 ml-20">
     <div className="font-semibold text-2xl flex justify-center mt-6">Chat Theme</div> 
     <div className="font-semibold text-lg ml-5 mt-5">THEMES</div>
    <div className="mt-4 ml-4">
    {items.map((item) => (
                    <div  key={item.id}  className="mb-3 flex">
                      <img src={item.picture}/>
                      <div className="flex-col ml-3 mt-1 ">
                        <div className="font-semibold text-lg">{item.text1}</div>
                        <div>{item.text2}</div>
                      </div>
                       <img src={item.icon} className="ml-auto mr-6 cursor-pointer"  /> 
                      
                    </div>
                  ))}
    </div>




     </div>
</div>
    </div>)
}