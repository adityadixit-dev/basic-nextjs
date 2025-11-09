export function errorMsgToString(err: unknown): string {
  return err instanceof Error ? err.message : "Unknown Error Occurred";
}
