import leftarrow from "../../assets/leftarrow.svg"
import Frama from "../../assets/Frama.svg"

export default function FilterPage() {
    return (


        <div className="  flex  justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
        <div className="absolute top-8 right-9 ">
             <img src={Frama}/>
            </div>
            <div className="  w-80 h-40  flex flex-col p-3   bg-slate-100  ">
            <h2 className="text-lg font-semibold text-gray-700 justify-center flex ">Filter</h2>
            <div className="mt-2">
                <div>
                    <div className="flex justify-between items-center text-gray-600 hover:text-gray-800 py-2">
                        All requests

                        <img src={leftarrow} />
                    </div>
                </div>


                <div>
                    <div className="flex justify-between items-center text-gray-600 hover:text-gray-800 py-2">
                        Top requests

                        <img src={leftarrow} />
                    </div>
                </div>
                </div>
            </div>
</div> )
}





