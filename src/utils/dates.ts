import dayjs from "dayjs";

const DEFAULT_DATE_FORMAT = 'DD MMM YYYY HH:mm';

export function formatDate(date: string) {
  return dayjs(date).format(DEFAULT_DATE_FORMAT);
}