/**
 * Retruns empty string for strings that aren't valid numbers.
 */
export const getCurrencyFormat = (str: string): string => {
  const numberAsString = str.replace(/[^.\d]/g, "");
  if (!numberAsString.length) {
    return "";
  }
  const asNumber = parseFloat(parseFloat(numberAsString).toFixed(2));
  return asNumber.toLocaleString();
};

/**
 * Parses string to only allow floating point number representation.
 */
export const getFloatString = (str: string): string =>
  str.replace(/[^.\d]/g, "");
