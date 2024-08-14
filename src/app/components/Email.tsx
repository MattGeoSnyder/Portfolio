"use client";

import { IconWrapper } from "@/app/components/icons/IconWrapper";
import EmailSvg from "@/assets/icons/Email.svg";

interface EmailProps extends React.ComponentPropsWithoutRef<"div">{
  url: string;
}

export function Email({ url, ...props }: EmailProps) {

  return (
    <div {...props} >
      <IconWrapper key="Email" text="Email" url={url}>
        <EmailSvg
          fill="white"
          style={{ fill: "white" }}
          height="100%"
          width="100%"
          viewBox="0 0 236 185"
        />
      </IconWrapper>
    </div>
  );
}
