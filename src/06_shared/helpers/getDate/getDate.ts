import { EMonth } from "./types";

export function getDate() {
  const date = new Date();

  return { year: date.getFullYear(), mounth: EMonth[date.getMonth()] };
}
