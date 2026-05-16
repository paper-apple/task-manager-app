export function formatDateInput(value: string) {
  const cleaned = value.replace(/\D/g, "");

  let formatted = cleaned;

  if (cleaned.length > 2) {
    formatted = cleaned.slice(0, 2) + "." + cleaned.slice(2);
  }

  if (cleaned.length > 4) {
    formatted = formatted.slice(0, 5) + "." + formatted.slice(5);
  }

  if (cleaned.length > 8) {
    formatted = formatted.slice(0, 10) + " " + formatted.slice(10);
  }

  if (cleaned.length > 10) {
    formatted = formatted.slice(0, 13) + ":" + formatted.slice(13);
  }

  return formatted.slice(0, 16);
}