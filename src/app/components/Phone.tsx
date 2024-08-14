"use client";

import PhoneSvg from "@/assets/icons/Phone.svg";
import { IconWrapper } from "@/app/components/icons/IconWrapper";
import { useToast } from "@/components/ui/use-toast";

interface PhoneProps extends React.ComponentPropsWithoutRef<"div"> {
  phoneNumber: string;
}

export function Phone({ phoneNumber, ...rest }: PhoneProps) {
  const { toast } = useToast();
  function copyToClipboard(text: string) {
    console.log("copying to clipboard");
    navigator.clipboard.writeText(text);
    toast({
      title: "Phone Number Copied to Clipboard",
      description: phoneNumber,
    });
  }
  return (
    <div
      {...rest}
      onClick={() => {
        copyToClipboard(phoneNumber);
      }}
    >
      <IconWrapper key="Phone" text="Phone">
        <PhoneSvg fill="white" height="100%" width="100%" />
      </IconWrapper>
    </div>
  );
}
