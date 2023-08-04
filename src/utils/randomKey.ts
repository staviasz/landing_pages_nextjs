export const randomKey = (word: string): string => {
  const key = word + Math.random() * 10000;
  return key;
};
