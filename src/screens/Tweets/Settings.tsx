
interface SettingsProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

export default function Settings({ selectedOption, setSelectedOption }: SettingsProps) {
  const handleItemClick = (item: string) => {
    setSelectedOption(item);
  };

  return (
    <div className="w-72 bg-white border-r p-4 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {/* Meta Header */}
      <div className="mb-4">
        <h2 className="text-blue-600 font-semibold flex items-center">
          <span className="mr-2">🌐</span> Meta
        </h2>
        <p className="text-[17px] font-roboto">
          <strong className="text-xl">Some account settings are moving</strong>
          <br />
          Soon, Accounts Center will be the primary place to manage your account info and settings.
        </p>
        <a href="#" className="text-blue-500 text-sm font-medium">
          Learn more
        </a>
      </div>

      {/* Settings List */}
      <ul className="text-[15px] space-y-2 font-roboto border-t">
        {[
          "Edit profile",
          "Professional account",
          "Language preferences",
          "Apps and websites",
          "Email notifications",
          "Push notifications",
          "Manage contacts",
          "Privacy and security",
          "Ads",
          "Supervision",
          "Login activity",
          "Emails from Instagram",
          "Help",
        ].map((item) => (
          <li
            key={item}
            className={`cursor-pointer p-1 mt-3 ${
              selectedOption === item ? "border-l-2 text-blue-500 border-black pl-2" : ""
            }`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Switch Account */}
      <a href="#" className="block text-blue-500 text-sm font-medium mt-4">
        Switch to personal account
      </a>

      {/* Accounts Center */}
      <div className="mt-6 border-t pt-4 font-roboto">
        <h2 className="text-blue-600 font-semibold flex items-center">
          <span className="mr-2">🌐</span> Meta
        </h2>
        <a href="#" className="text-blue-500 text-lg font-bold">
          Accounts center!
        </a>
        <p className="text-sm text-gray-600 mt-2">
          Control settings for connected experiences across Instagram, the Facebook app, and Messenger, including story and post sharing and logging in.
        </p>
      </div>
    </div>
  );
}