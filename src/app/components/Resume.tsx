"use client";
import { IconWrapper } from "@/app/components/icons/IconWrapper";
import ResumeSvg from "@/assets/icons/Resume.svg";

interface ResumeProps extends React.ComponentPropsWithoutRef<"div"> {
	resumeUrl: string;
}

export function Resume({ resumeUrl, ...props }: ResumeProps) {
  function downloadFile(fileUrl: string) {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "MatthewSnyderResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div
      {...props}
      onClick={() => {
        downloadFile(resumeUrl);
      }}
    >
      <IconWrapper text="Resume">
        <ResumeSvg
          className="max-w-full"
          fill="white"
          height="100%"
          width="100%"
        />
      </IconWrapper>
    </div>
  );
}
