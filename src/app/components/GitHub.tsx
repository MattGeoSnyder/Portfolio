'use client'

import GithubSvg from "@/assets/icons/Github.svg";
import { IconWrapper } from "@/app/components/icons/IconWrapper";

interface GitHubProps {
	url: string;
}

export function GitHub({ url }: GitHubProps) {
  return (
    <IconWrapper key="GitHub" text="GitHub" url={url}>
      <GithubSvg fill="white" height="100%" width="100%" />
    </IconWrapper>
  );
}
