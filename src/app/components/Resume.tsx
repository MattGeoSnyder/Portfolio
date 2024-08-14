"use client";
import { IconWrapper } from "@/app/components/icons/IconWrapper";
import ResumeSvg from "@/assets/icons/Resume.svg";

export function Resume() {

  function downloadFile(fileUrl: string) {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = "Matthew_Snyder_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (
    <IconWrapper
      key="Resume"
      text="Resume"
      className="md:col-start-1 md:col-end-2 md:row-span-2"
      onClick={() => { downloadFile('/Matthew_Snyder_Resume.pdf') }}
    >
      <ResumeSvg fill="white" height="100%" width="100%" />
    </IconWrapper>
  );
}
