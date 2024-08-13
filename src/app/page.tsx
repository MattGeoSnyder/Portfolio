import { IconWrapper } from "@/app/components/icons/IconWrapper";
import Image from "next/image";
import Resume from "@/assets/icons/Resume.svg";
import Phone from "@/assets/icons/Phone.svg";
import Email from "@/assets/icons/Email.svg";
import Github from "@/assets/icons/Github.svg";
import LinkedIn from "@/assets/icons/LinkedIn.svg";

export default function Home() {
  return (
    <div
      id="home-page"
      className="w-full h-full p-40 grid md:grid-cols-3 md:grid-rows-2 md:gap-16 grid-cols-1"
    >
      <IconWrapper
        key="Resume"
        className="md:col-start-1 md:col-end-2 md:row-span-2"
      >
        <Resume fill="white" />
        <p>Resume</p>
      </IconWrapper>
      <IconWrapper key="Phone">
        <Phone fill="white" />
        <p>Phone</p>
      </IconWrapper>
      <IconWrapper key="Email">
        <Email fill="white" />
        <p>Email</p>
      </IconWrapper>
      <IconWrapper key="GitHub">
        <Github fill="white" />
        <p>GitHub</p>
      </IconWrapper>
      <IconWrapper key="LinkedIn">
        <LinkedIn fill="white" />
        <p>LinkedIn</p>
      </IconWrapper>
    </div>
  );
}
