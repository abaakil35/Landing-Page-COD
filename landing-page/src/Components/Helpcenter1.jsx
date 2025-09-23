import React from "react";

const Helpcenter1 = () => {
  return (
    <header className="w-full">
      <div className="relative bg-gradient-to-br from-[#5e255dff] via-[#4a1d49] to-[#2d1129] text-white">
        <div className="max-w-7xl mx-auto py-6 flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <img
              src="/src/assets/logo_white.png"
              alt="COD Logo"
              className="h-10 w-auto mr-1"
            />
            <h1 className="text-2xl font-semibold tracking-tight mt-2">
              Help Center
            </h1>
          </div>
        </div>

        <div className="text-center pb-3">
          <p className="text-lg opacity-90">
            Find answers, guides, and support for all your questions
          </p>
        </div>

        <div className="py-8">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-white rounded-lg p-3 shadow-md flex items-center">
              <svg
                className="w-6 h-6 text-gray-400 mr-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
              <input
                className="flex-1 text-gray-700 placeholder-gray-400 bg-transparent outline-none px-2 py-3"
                placeholder="Search our help center..."
                aria-label="Search help"
              />
              <button className="ml-3 bg-[#5e255dff] text-white px-4 py-2 rounded-lg">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Helpcenter1;
