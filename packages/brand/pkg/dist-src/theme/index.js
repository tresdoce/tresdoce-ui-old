import createPalette from "./create-palette.js";
import createTypography from "./create-typography.js";
import themeImages from "./images.js";
import createSizing from "./sizing.js";
import createRadiuses from "./radiuses.js";
import spacing from "./spacing.js";
import zIndex from "./z-index.js";

const createTheme = options => {
  const {
    palette: paletteInput = {},
    typography: typographyInput = {},
    radiuses: radiusesInput = {},
    sizing: sizingInput = {}
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