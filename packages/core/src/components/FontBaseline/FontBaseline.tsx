import React from 'react';
import { withTheme } from '../Theme';

export interface FontBaselineProps {
  cdnBasepath: string;
}

export const FontBaseline: React.FC<FontBaselineProps> = ({ cdnBasepath }) => (
  <>
    <style jsx global>{`
      @font-face {
        font-family: 'FontAwesome';
        src: url('${cdnBasepath}/fonts/fontawesome-webfont.eot?v=4.7.0');
        src: url('${cdnBasepath}/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'),
        url('${cdnBasepath}/fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'),
        url('${cdnBasepath}/fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'),
        url('${cdnBasepath}/fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'),
        url('${cdnBasepath}/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "DINNextLTPro-BoldCondensed";
        src: url("${cdnBasepath}/fonts/DINNextLTPro-BoldCondensed.woff2") format("woff2"),
        url("${cdnBasepath}/fonts/DINNextLTPro-BoldCondensed.woff") format("woff"),
        url("${cdnBasepath}/fonts/DINNextLTPro-BoldCondensed.otf") format("opentype");
        font-style: normal;
        font-weight: 400;
      }
      
      @font-face {
        font-family: "DINNextLTPro-Condensed";
        src: url("${cdnBasepath}/fonts/DINNextLTPro-Condensed.woff2") format("woff2"),
        url("${cdnBasepath}/fonts/DINNextLTPro-Condensed.woff") format("woff"),
        url("${cdnBasepath}/fonts/DINNextLTPro-Condensed.otf") format("opentype");
        font-style: normal;
        font-weight: 400;
      }
      
      @font-face {
        font-family: "DINNextLTPro-LightCondensed";
        src: url("${cdnBasepath}/fonts/DINNextLTPro-LightCondensed.woff2") format("woff2"),
        url("${cdnBasepath}/fonts/DINNextLTPro-LightCondensed.woff") format("woff"),
        url("${cdnBasepath}/fonts/DINNextLTPro-LightCondensed.otf") format("opentype");
        font-style: normal;
        font-weight: 400;
      }
      
      @font-face {
        font-family: "DINNextLTPro-MediumCond";
        src: url("${cdnBasepath}/fonts/DINNextLTPro-MediumCond.woff2") format("woff2"),
        url("${cdnBasepath}/fonts/DINNextLTPro-MediumCond.woff") format("woff"),
        url("${cdnBasepath}/fonts/DINNextLTPro-MediumCond.otf") format("opentype");
        font-style: normal;
        font-weight: 400;
      }
      
      @font-face {
        font-family: "DINNextLTPro-UltraLightCond";
        src: url("${cdnBasepath}/fonts/DINNextLTPro-UltraLightCond.woff2") format("woff2"),
        url("${cdnBasepath}/fonts/DINNextLTPro-UltraLightCond.woff") format("woff"),
        url("${cdnBasepath}/fonts/DINNextLTPro-UltraLightCond.otf") format("opentype");
        font-style: normal;
        font-weight: 400;
      }
    `}</style>
  </>
);

FontBaseline.displayName = 'FontBaseline';

export default withTheme(FontBaseline);
