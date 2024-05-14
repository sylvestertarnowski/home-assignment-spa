export const getCurrencyFormat = (str: string): string => {
  const stripExtraCharacters = str.replace(/[^.\d]/g, "");
  const asNumber = parseFloat(stripExtraCharacters);
  return asNumber.toLocaleString();
};

export const stripCurrencyCharacters = (str: string): string =>
  str.replace(/[^.\d]/g, "");
