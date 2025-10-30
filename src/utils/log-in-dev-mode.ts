export function logToConsoleInDev(message: string): void {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  console.log(message);
}

export function logErrorToConsoleInDev(error: unknown): void {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  if (error instanceof Error) {
    console.error("Error:", error.message);
  } else {
    console.error("Not and instance of Error Object", error);
  }
}
