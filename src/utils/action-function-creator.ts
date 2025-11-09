import { ActionFunctionType, DbQueryFunctionType } from "@/types/form-types";
import { logToConsoleInDev } from "./log-in-dev-mode";
import { validateFormDataWithZodSchema } from "./validate-formdata-with-zodtype";
import { ZodType } from "zod";
import { revalidatePath } from "next/cache";
import { errorMsgToString } from "./formstate-error-to-string";

// the zodSchema mentioned below generally comes from the lib/db/schema folders
// it will correspond to the insert schema, but could also be used for updating schemas

// FIX: You can add custom elemets for error messages while creating the function

export function actionFunctionCreator<T>(
  zodSchema: ZodType<T>,
  dbQueryFunction: DbQueryFunctionType<T>,
  pathToRevalidate: string,
): ActionFunctionType {
  return async (prevState, formData) => {
    "use server";
    if (prevState.success && prevState.message === "") {
      logToConsoleInDev("First Call to Action Function");
    }

    try {
      const rawData = Object.fromEntries(formData);
      const validatedData = validateFormDataWithZodSchema(zodSchema, rawData);
      const createdDataInDb = await dbQueryFunction(validatedData);
      // I am using createdDataInDb here, but it need not be only a creation operation
      if (!createdDataInDb) {
        throw new Error("Unable to perform DB Action");
      }
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "Database Action Success",
      };
    } catch (err) {
      return {
        success: false,
        message: errorMsgToString(err),
      };
    }
  };
}
