"use client";
import { IconWrapper } from "@/app/components/icons/IconWrapper";
import ResumeSvg from "@/assets/icons/Resume.svg";

interface ResumeProps extends React.ComponentPropsWithoutRef<"div"> {
}

export function Resume({ ...props }: ResumeProps) {
  function downloadFile(fileUrl: string) {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Matthew_Snyder_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div {...props}>
      <IconWrapper
        text="Resume"
        onClick={() => {
          downloadFile("/Matthew_Snyder_Resume.pdf");
        }}
      >
        <ResumeSvg className="max-w-full" fill="white" height="100%" width="100%" />
      </IconWrapper>
    </div>
  );
}
