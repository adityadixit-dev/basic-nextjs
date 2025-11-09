export type FormStateType = {
  success: boolean;
  message: string;
};

export type ActionFunctionType = (
  prevState: FormStateType,
  formData: FormData,
) => Promise<FormStateType>;

export type DbQueryFunctionType<T> = (validatedData: T) => Promise<T | null>;
