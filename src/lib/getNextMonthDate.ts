export default function getNextMonthDate(): Date {
  return new Date(new Date().getFullYear(), new Date().getMonth() + 1, 2);
}
