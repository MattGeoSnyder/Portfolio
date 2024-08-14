'use client'

import { IconWrapper } from "@/app/components/icons/IconWrapper";
import EmailSvg from "@/assets/icons/Email.svg";

interface EmailProps {
	url: string;
}

export function Email({ url }: EmailProps) {
  return (
    <IconWrapper key="Email" text="Email" url={url}>
      <EmailSvg
	fill="white"
	style={{ fill: "white" }}
	height="100%"
	width="100%"
	viewBox="0 0 236 185"
      />
    </IconWrapper>
  );
}
