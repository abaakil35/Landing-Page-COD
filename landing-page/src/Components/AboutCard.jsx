import React from "react";

const AboutCard = ({
  title = "About CODocket",
  headline = "Welcome to COD Form & Manager by CODRocket Help Center",
  content = "Get started with COD Form & Manager by CODRocket and learn how to create powerful forms and manage your data effectively.",
  subContent = "Our comprehensive help center provides guides, tutorials, and support resources.",
}) => {
  return (
    <div className="h-full">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 hover:border-[#B93B87] border-2 border-transparent transition-all duration-300 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4 border-b border-[#B93B87] pb-3">
          <h3 className="font-semibold text-[#B93B87] text-lg hover:text-[#8B2A5F] transition-colors">
            {title}
          </h3>
          <svg
            className="w-6 h-6 text-[#B93B87] hover:text-[#8B2A5F] transition-colors"
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
        <div className="text-gray-800 font-normal text-base leading-relaxed flex-1">
          <p className="font-medium text-gray-900 mb-2">{headline}</p>
          <p className="mb-3">{content}</p>
          <p>{subContent}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
