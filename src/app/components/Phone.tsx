"use client";

import PhoneSvg from "@/assets/icons/Phone.svg";
import { IconWrapper } from "@/app/components/icons/IconWrapper";
import { useToast } from "@/components/ui/use-toast";

interface PhoneProps {
  phoneNumber: string;
}

export function Phone({ phoneNumber }: PhoneProps) {
  const { toast } = useToast();
  function copyToClipboard(text: string) {
    console.log("copying to clipboard");
    navigator.clipboard.writeText(text);
    toast({
      title: "Phone Number Copied",
      description: phoneNumber,
    });
  }
  return (
    <>
      <IconWrapper
        key="Phone"
        text="Phone"
        onClick={() => {
          copyToClipboard(phoneNumber);
        }}
      >
        <PhoneSvg fill="white" height="100%" width="100%" />
      </IconWrapper>
    </>
  );
}
