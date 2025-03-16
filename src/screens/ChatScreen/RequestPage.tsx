import Header from "../Home/homecomponents/Header";
import Request from "../ChatScreen/request";
import ChatDisplay from "./Chatdisplay";
import Sidemenu from "../Home/homecomponents/Sidemenu";

export default function RequestPage() {
  return (
    <div>
      <div className="flex">
        <Sidemenu/>
        <div>
          <div>
            <Header />
          </div>
          <div className="flex ml-22">
            <div className="ml-40 border border-neutral-300">
              <Request />
            </div>
            <div className="w-full ml-8">
              <ChatDisplay />
            </div>
          </div>
        </div>
           
      </div>
    </div>
  );
}
