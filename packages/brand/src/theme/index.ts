import createPalette, { Palette, PaletteInput } from './create-palette';
import createTypography, { Typography, TypographyInput } from './create-typography';
import themeImages, {Image} from './images';
import createSizing, {Sizing, SizingInput} from './sizing';
import createRadiuses, {Radiuses, RadiusesInput} from './radiuses';
import spacing, { Spacing } from './spacing';
import zIndex, { ZIndex } from './z-index';

export interface Theme {
  palette: Palette,
  typography: Typography,
  images: Image,
  sizing: Sizing,
  spacing: Spacing,
  radiuses: Radiuses,
  zIndex: ZIndex
}

export interface ThemeInput {
  palette?: PaletteInput,
  typography?: TypographyInput,
  radiuses?: RadiusesInput,
  sizing?: SizingInput,
}

const createTheme = (options: ThemeInput): Theme => {
  const {
    palette: paletteInput = {},
    typography: typographyInput = {},
    radiuses: radiusesInput = {},
    sizing: sizingInput = {},
  } = options || {};

  const palette = createPalette(paletteInput);
  const typography = createTypography(typographyInput);
  const images = themeImages();
  const radiuses = createRadiuses(radiusesInput);
  const sizing = createSizing(sizingInput);

  return {
    palette,
    typography,
    images,
    sizing,
    spacing,
    radiuses,
    zIndex
  };
};

export default createTheme;
