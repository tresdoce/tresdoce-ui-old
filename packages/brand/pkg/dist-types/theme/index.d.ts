import { Palette, PaletteInput } from './create-palette';
import { Typography, TypographyInput } from './create-typography';
import { Image } from './images';
import { Sizing, SizingInput } from './sizing';
import { Radiuses, RadiusesInput } from './radiuses';
import { Spacing } from './spacing';
import { ZIndex } from './z-index';
export interface Theme {
    palette: Palette;
    typography: Typography;
    images: Image;
    sizing: Sizing;
    spacing: Spacing;
    radiuses: Radiuses;
    zIndex: ZIndex;
}
export interface ThemeInput {
    palette?: PaletteInput;
    typography?: TypographyInput;
    radiuses?: RadiusesInput;
    sizing?: SizingInput;
}
declare const createTheme: (options: ThemeInput) => Theme;
export default createTheme;
