export const pxToRem = (size: number, fontSize: number = 14, htmlFontSize: number = 16): string => {
  const coef = fontSize / 14;
  return `${(size / htmlFontSize) * coef}rem`;
}
