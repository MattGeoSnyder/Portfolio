'use client';
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
      className={`flex justify-center items-center bg-accentBlue rounded-lg hover:ring-white hover:ring-1 hover:cursor-pointer w-full h-full drop-shadow ${className ?? ""}`}
      {...rest}
      onClick={() => {
	if (props.url) {
	  newTabOnClick(props.url);
	}
      }}
    >
      <div className="flex flex-col justify-center pt-4 pb-1 h-full">
        <div className="h-3/4">{children}</div>
        <p className="text-center text-xl font-bold">{text}</p>
      </div>
    </div>
  );
}
