import createPalette, { Palette, PaletteInput } from './create-palette';
import createTypography, { Typography, TypographyInput } from './create-typography';
import zIndex, { ZIndex } from './z-index';
import themeImages, {Image} from './images';
import spacing, { Spacing } from './spacing';

export interface Theme {
  palette: Palette,
  typography: Typography,
  spacing: Spacing,
  images: Image,
  zIndex: ZIndex
}

export interface ThemeInput {
  palette?: PaletteInput,
  typography?: TypographyInput
}

const createTheme = (options: ThemeInput): Theme => {
  const {
    palette: paletteInput = {},
    typography: typographyInput = {},
  } = options || {};

  const palette = createPalette(paletteInput);
  const typography = createTypography(typographyInput);
  const images = themeImages();

  return {
    palette,
    spacing,
    typography,
    images,
    zIndex,
  };
};

export default createTheme;
