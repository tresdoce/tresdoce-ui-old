/*
const coef = fontSize / sizes.px14;
const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`;
pxToRem(sizes.px42)
*/

export const pxToRem = (size: number, fontSize: number = 14, htmlFontSize: number = 16): string => {
  const coef = fontSize / 14;
  return `${(size / htmlFontSize) * coef}rem`;
}


export const hexToRgba = (hex: string, alpha: number): string => {
  if (!hex || typeof alpha !== 'number' || alpha > 1 || alpha < 0) {
    return '';
  }

  const replaced = hex.replace('#', '');

  if (replaced.length !== 6) {
    return '';
  }

  const parsed = parseInt(replaced, 16);
  const r = (parsed >> 16) & 255;
  const g = (parsed >> 8) & 255;
  const b = parsed & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
