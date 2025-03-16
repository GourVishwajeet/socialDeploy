import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function ShareModal({ onClose }: { onClose: () => void }) {
  const users = [

    { name: "name", img: "/user1.jpg" },
    { name: "name ", img: "/user2.jpg" },
    { name: "name ", img: "/user3.jpg" },
    { name: "name", img: "/user4.jpg" },
    { name: "name", img: "/user5.jpg" },
    { name: "name", img: null },
    { name: "name ", img: "/user6.jpg" },
    { name: "name", img: "/user1.jpg" },
    { name: "name", img: "/user1.jpg" },
    { name: "name", img: "/user1.jpg" },
    { name: "name", img: "/user1.jpg" },
    { name: "name", img: null },
    { name: "name", img: null },
    { name: "name", img: null },

  ];

  const shareOptions = [
    { name: "Copy link", icon: "🔗" },
    { name: "Facebook", icon: "📘" },
    { name: "Messenger", icon: "💬" },
    { name: "WhatsApp", icon: "🟢" },
    { name: "Email", icon: "✉️" },
    { name: "Threads", icon: "🧵" },
    { name: "X", icon: "❌" },
    { name: "See all", icon: "->" },
  ];
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  

  

  return (
    <div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-gray-900 p-5 rounded-lg  w-[500px] h-[500px] ">
      <div className="flex items-center text-white relative">
  <h2 className="text-lg font-semibold absolute left-1/2 transform -translate-x-1/2">
    Share
  </h2>
      <button className="text-lg font-semibold ml-auto cursor-pointer text-cyan-50"  onClick={onClose}>
      ✖

      </button>
</div>
        
        <input
          type="text"
          placeholder="Search"
          className="w-full mt-3 p-2 rounded-md bg-gray-800 text-white outline-none"
        />

       
        <div className="  grid grid-cols-4 gap-3 relative top-4 h-[300px] overflow-y-scroll">
          {users.map((user, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-14 h-14 bg-gray-700 rounded-full relative overflow-hidden">
                {user.img ? (
                  <img src={user.img} className="rounded-full w-full h-full" />
                ) : (
                  <span className="text-gray-400 text-xl">👤</span>
                )}
              </div>
              <p className="text-white text-xs relative top-1 text-center">{user.name}</p>
            </div>
          ))}
        </div>
        <div className="relative flex items-center w-full">
      {/* Left Scroll Button */}
      <button
        className="absolute left-0 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md"
        onClick={scrollLeft}
      >
        <FaChevronLeft />
      </button>

      {/* Scrollable Footer */}
      <footer 
  ref={scrollRef} 
  className="overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar w-full px-10"
>
        <div className="flex justify-between pt-7 w-full h-[100px] min-w-max space-x-4">
          {shareOptions.map((option, index) => (
            <button key={index} className="flex flex-col items-center text-white">
              <span className="text-xl">{option.icon}</span>
              <span className="text-xs">{option.name}</span>
            </button>
          ))}
        </div>
      </footer>

      {/* Right Scroll Button */}
      <button
        className="absolute right-0 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md"
        onClick={scrollRight}
      >
        <FaChevronRight />
      </button>
    </div>
      </div>
    </div>
  );
}
