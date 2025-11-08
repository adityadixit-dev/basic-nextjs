export type FormStateType = {
  success: boolean;
  message: string;
};

export type ActionFunctionType = (
  prevState: FormStateType,
  formData: FormData,
) => Promise<FormStateType>;
