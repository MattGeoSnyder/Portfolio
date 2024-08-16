"use client";

import { Phone } from "@/app/components/Phone";
import { Resume } from "@/app/components/Resume";
import { Email } from "@/app/components/Email";
import { GitHub } from "@/app/components/GitHub";
import { LinkedIn } from "@/app/components/LinkedIn";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <>
      <div
        id="home-page"
        className="w-full h-full md:p-28 grid md:grid-cols-3 md:grid-rows-2 md:gap-16 grid-cols-1 grid-flow-row auto-rows-fr max-sm:px-1 px-12"
      >
        <Resume
          className="md:row-span-2 md:px-0"
          key={"Resume"}
          resumeUrl="/MatthewSnyderResume.pdf"
        />
        <Phone phoneNumber="412-477-1776" key={"Phone"} />
        <Email url="mailto:mattgeosnyder@gmail.com" key={"Email"} />
        <GitHub url="https://github.com/MattGeoSnyder" key={"GitHub"} />
        <LinkedIn
          url="https://www.linkedin.com/in/mattgeosnyder"
          key={"LinkedIn"}
        />
      </div>
      <Toaster />
    </>
  );
}
