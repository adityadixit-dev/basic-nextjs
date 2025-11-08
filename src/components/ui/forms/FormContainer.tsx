"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import SubmitButton from "./SubmitButton";
import { ActionFunctionType, FormStateType } from "@/types/form-types";

type FormContainerProps = {
  children: React.ReactNode;
  actionFn: ActionFunctionType;
  submitBtnText?: string;
  className?: string;
};

const initialFormState: FormStateType = { success: true, message: "" };

const FormContainer = ({
  children,
  actionFn,
  submitBtnText = "Submit",
  className = "",
}: FormContainerProps) => {
  const [state, formAction] = useActionState(actionFn, initialFormState);

  useEffect(() => {
    if (state.success) {
      if (state.message) {
        toast.success(state.message);
      }
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form
      className={cn(
        "flex flex-col gap-y-2 mt-4 p-4 border rounded-xl bg-secondary/50",
        className,
      )}
      action={formAction}
    >
      {children}
      <SubmitButton btnText={submitBtnText} />
    </form>
  );
};

export default FormContainer;
