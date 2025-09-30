import React from "react";

const AboutCard = ({
  title = "About CODocket",
  headline = "Welcome to COD Form & Manager by CODRocket Help Center",
  content = "Get started with COD Form & Manager by CODRocket and learn how to create powerful forms and manage your data effectively.",
  subContent = "Our comprehensive help center provides guides, tutorials, and support resources.",
  isDark = false,
}) => {
  return (
    <div className="h-full">
      <div
        className={`rounded-lg p-6 transition-all duration-300 h-full flex flex-col ${
          isDark
            ? "bg-[#0f0b12] border border-gray-700 hover:shadow-xl hover:scale-105 hover:border-[#5e255d]"
            : "bg-white shadow-md hover:shadow-xl hover:scale-105 hover:border-[#B93B87] border-2 border-transparent"
        }`}
      >
        <div
          className={`flex justify-between items-center mb-4 pb-3 ${
            isDark ? "border-b border-gray-800" : "border-b border-[#B93B87]"
          }`}
        >
          <h3
            className={`font-semibold text-lg transition-colors ${
              isDark ? "text-[#b76be0]" : "text-[#B93B87] hover:text-[#8B2A5F]"
            }`}
          >
            {title}
          </h3>
          <svg
            className={`w-6 h-6 transition-colors ${
              isDark ? "text-[#b76be0]" : "text-[#B93B87] hover:text-[#8B2A5F]"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <div
          className={`font-normal text-base leading-relaxed flex-1 ${
            isDark ? "text-gray-300" : "text-gray-800"
          }`}
        >
          <p
            className={`font-medium mb-2 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {headline}
          </p>
          <p className="mb-3">{content}</p>
          <p>{subContent}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
