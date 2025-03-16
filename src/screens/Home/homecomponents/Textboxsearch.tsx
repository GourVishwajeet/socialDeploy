import Union from "../../../assets/Union.svg";
import { useState } from "react";
import cross from "../../../assets/cross.svg";

interface SearchItem {
  id: number;
  picture: string;
  username: string;
  idname: string;
}

interface TextboxSearchProps {
  width?: string;
  data: SearchItem[];
}

export default function Textboxsearch({
  width = "w-40",
  data,
}: TextboxSearchProps) {
  const [input, setInput] = useState("");
  const [filteredResults, setFilteredResults] = useState<SearchItem[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    if (value.trim() === "") {
      setFilteredResults([]);
      setShowResults(false);
    } else {
      const results = data.filter(
        (item) =>
          item.username.toLowerCase().includes(value.toLowerCase()) ||
          item.idname.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(results);
      setShowResults(true);
    }
  };

  return (
    <div className="relative">
      {/* Search Box */}
      <div
        className={`${width} h-10 rounded-xl bg-customGray flex items-center opacity-75`}
      >
        <img
          src={Union}
          className="text-sm ml-2 text-gray-500 mr-2"
          alt="Search Icon"
        />
        <input
          placeholder="Search Here"
          type="text"
          value={input}
          onChange={handleSearch}
          className="w-full border-0 h-6 text-gray-500 text-sm bg-transparent outline-none placeholder-gray-400"
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
        />
      </div>

      {showResults && filteredResults.length > 0 && (
        <div className="absolute left-0 top-12 w-72 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
          <div className=" items-start text-left align-top flex p-2 justify-between cursor-pointer">
            <div className="font-roboto  text-regular font-bold ">Recent</div>
            <div className="text-sky-500 font-bold ">Clear all</div>
          </div>
          {filteredResults.map((item) => (
            <div className="flex justify-between hover:bg-gray-100 ">
              <div
                key={item.id}
                className="flex items-center p-2  cursor-pointer "
              >
                <img
                  src={item.picture}
                  className="w-8 h-8 rounded-full"
                  alt={item.username}
                />
                <div className="ml-2">
                  <div className="font-bold text-sm">{item.username}</div>
                  <div className="text-gray-400 text-xs">{item.idname}</div>
                </div>
              </div>
              <img src={cross} className="mr-2" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
