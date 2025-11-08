"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../button";
import { RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";

type BtnSizeType = "default" | "lg" | "sm";
type SubmitButtonProps = {
  btnText: string;
  btnSize?: BtnSizeType;
  className?: string;
};

const SubmitButton = ({
  btnText = "Submit",
  btnSize = "lg",
  className = "",
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      size={btnSize}
      className={cn("w-full capitalize cursor-pointer", className)}
    >
      {pending ? (
        <>
          <RotateCw className="mr-2 h-4 w-4 animate-spin" /> Please wait...
        </>
      ) : (
        btnText
      )}
    </Button>
  );
};

export default SubmitButton;
