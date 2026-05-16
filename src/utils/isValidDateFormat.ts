export function isValidDateFormat(value: string) {
  const regex =
    /^(\d{2})\.(\d{2})\.(\d{4}) (\d{2}):(\d{2})$/;

  if (!regex.test(value)) return false;

  const [, day, month, year, hour, minute] =
    value.match(regex)!;

  const date = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute)
  );

  return (
    date.getDate() === Number(day) &&
    date.getMonth() === Number(month) - 1 &&
    date.getFullYear() === Number(year) &&
    date.getHours() === Number(hour) &&
    date.getMinutes() === Number(minute)
  );
}