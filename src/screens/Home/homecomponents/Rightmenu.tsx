
import icc from "../../../assets/icc.svg";
import Ellipse5 from "../../../assets/Ellipse5.svg";
import numbernoti from "../../../assets/numbernoti.svg";
import Cake from "../../../assets/Cake.svg";
import camerab from "../../../assets/Camerab.svg";
import Search from "../../../assets/Saerch.svg";
import Setting from "../../../assets/settings.svg";
import Profileonline from "../../../assets/Profileonline.svg";
import { useNavigate } from "react-router-dom";

export default function Rightmenu(){
    const navigate=useNavigate()
    const items = [
    { id: 1, picture: Profileonline, name: "Anushka Sharma" },
    { id: 2, picture: Profileonline, name: "Anushka Sharma" },
    { id: 2, picture: Profileonline, name: "Anushka Sharma" },
    { id: 2, picture: Profileonline, name: "Anushka Sharma" },
    { id: 2, picture: Profileonline, name: "Anushka Sharma" },
  ];
return(
    <>
     <div className="flex flex-col  pr-8 h-auto xxsm:hidden lg:block xl:block ">
              <div className="flex flex-col w-auto h-auto bg-customGray rounded-md p-5">
                <div className="text-sectiontitle text-gray-600 font-medium">
                  Your Pages and Profiles
                </div>
                <div className="flex mt-3 justify-between w-full">
                  <div className="flex ">
                    <div className="relative mr-2">
                      <img src={icc} />
                      <div className="absolute bottom-0 right-0 top-7">
                        <img src={numbernoti} />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-regular">ICC Officials</p>
                      <p className="text-gray-600 font-medium text-metatitle">
                        <i>@icc_officials</i>
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src={Ellipse5} className="" />
                  </div>
                </div>
              </div>

              <div className="flex max-w-[260px] xl:h-auto bg-customGray rounded-md mt-6">
                <div className="p-5">
                  <div className="text-sectiontitle text-gray-600 font-medium">
                    Birthdays
                  </div>
                  <div className="flex mt-3">
                    <img src={Cake} className="mr-2" />
                    <div>
                      <span className="text-sectiontitle">
                        Anushka
                        <i>
                          <b> and </b>
                        </i>
                        2 others
                        <i>
                          <b> have birthdays today. </b>
                        </i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex max-w-[260px] h-auto bg-customGray rounded-md mt-6 justify-center relative">
                <div className="p-5">
                  <div className="text-sectiontitle text-gray-600 font-medium justify-between flex">
                    Contacts
                    <div className="flex cursor-pointer">
                      <img src={camerab} className="mr-3 w-5" onClick={()=>navigate("/uploading")} />
                      <img src={Search} className="mr-3 w-5" />
                      <img src={Setting} className="w-5" />
                    </div>
                  </div>
                  <div className="mt-8">
                    {items.map((item) => (
                      <div key={item.id} className="mb-2 flex">
                        <img src={item.picture} />
                        <p className="ml-3 text-gray-600 text-sectiontitle font-medium">
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
    </>
)

}