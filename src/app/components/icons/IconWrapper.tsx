"use client";
import React from "react";

// This component is used to wrap the icon components
interface IconWrapperInterface extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  text: string;
  url?: string;
}

export function IconWrapper({
  children,
  text,
  ...props
}: IconWrapperInterface) {
  function newTabOnClick(url: string) {
    window.open(url, "_blank");
  }
  const { className, ...rest } = props;

  return (
    <div
      className={`flex md:justify-center justify-between items-center bg-accentBlue rounded-lg hover:ring-white hover:ring-1 hover:cursor-pointer md:w-full md:h-full drop-shadow h-3/4 px-8 py-4 ${className ?? ""}`}
      {...rest}
      onClick={() => {
        if (props.url) {
          newTabOnClick(props.url);
        }
      }}
    >
      <div className="flex md:flex-col md:justify-center md:pt-4 md:pb-1 h-full md:gap-x-0 gap-x-8">
        <div className="md:h-3/4 h-full">{children}</div>
        <p className="text-center text-xl font-bold self-center">{text}</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="md:hidden" height="50%" viewBox="0 0 320 512" fill="white"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
    </div>
  );
}
