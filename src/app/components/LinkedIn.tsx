"use client";

import { IconWrapper } from "@/app/components/icons/IconWrapper";
import LinkedInSvg from "@/assets/icons/LinkedIn.svg";

interface LinkedInProps extends React.ComponentPropsWithoutRef<"div"> {
  url: string;
}

export function LinkedIn({ url, ...props }: LinkedInProps) {
  return (
    <div {...props}>
      <IconWrapper key="LinkedIn" text="LinkedIn" url={url}>
        <LinkedInSvg fill="white" height="100%" width="100%" />
      </IconWrapper>
    </div>
  );
}
