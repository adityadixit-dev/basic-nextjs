import { ZodType } from "zod";

export function validateFormDataWithZodSchema<T>(
  schema: ZodType<T>,
  data: unknown,
) {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errorsList = result.error.issues.map((issue) => issue.message);
    throw new Error(errorsList.join(","));
  }
  return result.data;
}
