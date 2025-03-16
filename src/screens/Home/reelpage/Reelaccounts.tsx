import Frame from "../../../assets/Frame.svg";
import cam from "../../../assets/cam.svg";
import Profileee from "../../../assets/Profileee.svg";

export default function Reelaccounts() {
  const items = [
    { id: 1, picture: Profileee, name: "juan", username: " Juals_drnk_oik" },
    { id: 1, picture: Profileee, name: "juan", username: " Juals_drnk_oik" },
    { id: 1, picture: Profileee, name: "juan", username: " Juals_drnk_oik" },
    { id: 1, picture: Profileee, name: "juan", username: " Juals_drnk_oik" },
    { id: 1, picture: Profileee, name: "juan", username: " Juals_drnk_oik" },
  ];

  return (
    <div className="flex justify-center w-full h-screen items-center fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 bg-gray-900">
      <div className="absolute right-9 mt-[-550px] ">
        <img src={Frame} />
      </div>
      <div className="max-w-[320px] w-full justify-center flex flex-col h-auto border rounded-xl bg-white p-2">
        <div className="text-regular border-b-2 text-center p-1 w-full font-roboto flex justify-end pb-2">
          <div className="">In This Reel</div>
          <img src={cam} className="ml-[70px]" />
        </div>
        <div className="mt-4 flex items-center justify-center border-b-2 mb-3">
          <div className="flex items-center justify-center p-3 mx-5">
            Created with
          </div>
          <div className="flex items-center justify-center p-3 mx-5 border-b-2 border-b-black font-medium">
            Accounts
          </div>
        </div>
        {items.map((item) => (
          <div
            key={item.id}
            className="ml-3 mr-5 mt-2 flex items-center justify-between"
          >
            <div className="flex">
              <img src={item.picture} />
              <div className="flex flex-col ml-1 ">
                <div className="font-medium text-sectiontitle">{item.name}</div>
                <div className="text-gray-700 text-sectiontitle ">
                  {item.username}
                </div>
              </div>
            </div>
            <div className="bg-peterriver py-1 px-4 text-white text-metatitle font-roboto font-medium rounded-md">
              Follow
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
