export default function Edit() {
  return (
    <div className=" flex justify-center items-center w-full ">
      <div className="bg-white p-6 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <div className="flex items-center space-x-4 w-[600px] justify-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile Picture"
            className="w-14 h-14 rounded-full"
          />
          <div className="text-left">
            <h2 className="text-xl font-semibold">upvox_</h2>
            <a href="#" className="text-blue-500 text-[16px] font-bold ">
              Change profile photo
            </a>
          </div>
        </div>

        <form className="mt-6 space-y-4">
          <div className="flex items-start space-x-4">
            <label className="w-1/4 font-bold text-gray-700 text-right pt-2">
              Name
            </label>
            <div className=" flex flex-col">
              <input
                type="text"
                placeholder="Upvox"
                className="w-[400px] border border-gray-300 p-2 rounded-md"
              />
              <p className="text-sm text-gray-500 mt-1 w-[300px]">
                Help people discover your account by using the name you’re known
                by: either your full name, nickname, or business name.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <label className="w-1/4 font-bold text-gray-700 text-right pt-2">
              Username
            </label>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="upvox_"
                className="w-[400px] border border-gray-300 p-2 rounded-md"
              />
              <p className="w-[300px] text-sm text-gray-500 mt-1">
                In most cases, you’ll be able to change your username back to
                upvox_ for another 14 days.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <label className="w-1/4 font-bold text-gray-700 text-right pt-2">
              Website
            </label>
            <div className=" flex flex-col">
              <input
                type="text"
                placeholder="Website"
                className="w-[400px] border border-gray-300 p-2 rounded-md bg-gray-100"
                disabled
              />
              <p className="w-[400px] text-sm text-gray-500 mt-1">
                Editing your links is only available on mobile.Visit the
                Instagram app and edit your profile to change the websites in
                your bio.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <label className="w-1/4 font-bold text-gray-700 text-right pt-2">
              Bio
            </label>
            <div className="w-[400px] flex flex-col">
              <textarea
                placeholder="Write something..."
                className="w-[400px] border border-gray-300 p-2 rounded-md"
              ></textarea>
              <p className="text-sm text-gray-500 mt-1">0 / 150</p>
              <h3 className="text-gray-600 font-bold mt-5">
                Personal Information
              </h3>
              <p className="text-gray-500 text-sm">
                Provide your personal information, even if the account is used
                for a business, a pet or something else. This won’t be a part of
                your public profile.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <label className="w-1/4 font-bold text-gray-700 text-right pt-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-[400px] border border-gray-300 p-2 rounded-md"
            />
          </div>

          <div className="flex items-start space-x-4">
            <label className="w-1/4 font-bold text-gray-700 text-right pt-2">
              Phone number
            </label>
            <input
              type="text"
              placeholder="+91 971"
              className="w-[400px] border border-gray-300 p-2 rounded-md"
            />
          </div>

          <div className="flex items-start space-x-4">
            <label className="w-1/4 font-bold text-gray-700 text-right pt-2">
              Gender
            </label>
            <select className="w-[400px] border border-gray-300 p-2 rounded-md">
              <option>Prefer not to say</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex items-start space-x-4">
            <label className="w-1/4 font-bold text-gray-700 text-right pt-2">
              Show account suggestions on profiles
            </label>
            <div className="w-[400px] flex flex-col items-center space-x-2">
              <div className="flex items-center">
               <input
                type="checkbox"
                id="show_suggestions"
                className="w-4 h-4 mr-2"
              />
              
              <label
                htmlFor="show_suggestions"
                className="text-gray-700 text-sm"
              >
                Choose whether people can see similar account suggestions on
                your profile, and whether your account can be suggested on other
                profiles.{" "}
                <a href="#" className="text-blue-500">
                  [?]
                </a>
              </label></div>

              <div className="flex justify-between items-center mt-4 w-full">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
                <button type="button" className="text-blue-500 hover:underline">
                  Temporarily deactivate my account
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
