/**
 * Transforms '2024-09-21 12:00:00.000Z' to '2024-09-21'
 * @param pbDateTimeStr
 */
export function pbDateTimeStrToDate(pbDateTimeStr: string): string {
  return new Date(pbDateTimeStr).toISOString().slice(0, 10);
}
