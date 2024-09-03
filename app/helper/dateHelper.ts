/**
 * @param date date object
 * @returns date in string format, currently using default date format of javascript example: Wed Jul 28 1993
 */
export const convertDateToString = (date: Date) => {
  return date.toDateString();
};