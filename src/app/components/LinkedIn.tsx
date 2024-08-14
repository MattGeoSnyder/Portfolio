"use client";

import { IconWrapper } from "@/app/components/icons/IconWrapper";
import LinkedInSvg from "@/assets/icons/LinkedIn.svg";

interface LinkedInProps {
  url: string;
}

export function LinkedIn({ url }: LinkedInProps) {
  return (
    <IconWrapper key="LinkedIn" text="LinkedIn" url={url}>
      <LinkedInSvg fill="white" height="100%" width="100%" />
    </IconWrapper>
  );
}
