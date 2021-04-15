import React from 'react';
import { withTheme } from '../Theme';

export interface FontBaselineProps {
  cdnBasepath: string;
}

export const FontBaseline: React.FC<FontBaselineProps> = ({ cdnBasepath }) => (
  <>
    <style jsx global>{`
      @import url('${cdnBasepath}/css/app.min.css');
      /*@font-face {
        font-family: 'FontAwesome';
        src: url('${cdnBasepath}/fonts/FontAwesome/fontawesome-webfont.eot?v=4.7.0');
        src: url('${cdnBasepath}/fonts/FontAwesome/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'),
        url('${cdnBasepath}/fonts/FontAwesome/fontawesome-webfont.woff2?v=4.7.0') format('woff2'),
        url('${cdnBasepath}/fonts/FontAwesome/fontawesome-webfont.woff?v=4.7.0') format('woff'),
        url('${cdnBasepath}/fonts/FontAwesome/fontawesome-webfont.ttf?v=4.7.0') format('truetype'),
        url('${cdnBasepath}/fonts/FontAwesome/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: 'Lato-Hairline';
        src: url('${cdnBasepath}/fonts/Lato/Lato-Hairline.eot');
        src: url('${cdnBasepath}/fonts/Lato/Lato-Hairline.eot?#iefix') format('embedded-opentype'),
        url('${cdnBasepath}/fonts/Lato/Lato-Hairline.woff2') format('woff2'),
        url('${cdnBasepath}/fonts/Lato/Lato-Hairline.woff') format('woff'),
        url('${cdnBasepath}/fonts/Lato/Lato-Hairline.ttf') format('truetype'),
        url('${cdnBasepath}/fonts/Lato/Lato-Hairline.svg#Lato-Hairline') format('svg');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Lato-Hairline-Italic';
        src: url('${cdnBasepath}/fonts/Lato/Lato-HairlineItalic.eot');
        src: url('${cdnBasepath}/fonts/Lato/Lato-HairlineItalic.eot?#iefix') format('embedded-opentype'),
        url('${cdnBasepath}/fonts/Lato/Lato-HairlineItalic.woff2') format('woff2'),
        url('${cdnBasepath}/fonts/Lato/Lato-HairlineItalic.woff') format('woff'),
        url('${cdnBasepath}/fonts/Lato/Lato-HairlineItalic.ttf') format('truetype'),
        url('${cdnBasepath}/fonts/Lato/Lato-HairlineItalic.svg#Lato-HairlineItalic') format('svg');
        font-weight: 300;
        font-style: italic;
        font-display: swap;
      }

      @font-face {
        font-family: 'Lato-Light';
        src: url('${cdnBasepath}/fonts/Lato/Lato-Light.eot');
        src: url('${cdnBasepath}/fonts/Lato/Lato-Light.eot?#iefix') format('embedded-opentype'),
        url('${cdnBasepath}/fonts/Lato/Lato-Light.woff2') format('woff2'),
        url('${cdnBasepath}/fonts/Lato/Lato-Light.woff') format('woff'),
        url('${cdnBasepath}/fonts/Lato/Lato-Light.ttf') format('truetype'),
        url('${cdnBasepath}/fonts/Lato/Lato-Light.svg#Lato-Light') format('svg');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Lato-LightItalic';
        src: url('${cdnBasepath}/fonts/Lato/Lato-LightItalic.eot');
        src: url('${cdnBasepath}/fonts/Lato/Lato-LightItalic.eot?#iefix') format('embedded-opentype'),
        url('${cdnBasepath}/fonts/Lato/Lato-LightItalic.woff2') format('woff2'),
        url('${cdnBasepath}/fonts/Lato/Lato-LightItalic.woff') format('woff'),
        url('${cdnBasepath}/fonts/Lato/Lato-LightItalic.ttf') format('truetype'),
        url('${cdnBasepath}/fonts/Lato/Lato-LightItalic.svg#Lato-LightItalic') format('svg');
        font-weight: 300;
        font-style: italic;
        font-display: swap;
      }

      @font-face {
        font-family: 'Lato';
        src: url('${cdnBasepath}/fonts/Lato/Lato-Regular.eot');
        src: url('${cdnBasepath}/fonts/Lato/Lato-Regular.eot?#iefix') format('embedded-opentype'),
        url('${cdnBasepath}/fonts/Lato/Lato-Regular.woff2') format('woff2'),
        url('${cdnBasepath}/fonts/Lato/Lato-Regular.woff') format('woff'),
        url('${cdnBasepath}/fonts/Lato/Lato-Regular.ttf') format('truetype'),
        url('${cdnBasepath}/fonts/Lato/Lato-Regular.svg#Lato-Regular') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Lato-Italic';
        src: url('${cdnBasepath}/fonts/Lato/Lato-Italic.eot');
        src: url('${cdnBasepath}/fonts/Lato/Lato-Italic.eot?#iefix') format('embedded-opentype'),
        url('${cdnBasepath}/fonts/Lato/Lato-Italic.woff2') format('woff2'),
        url('${cdnBasepath}/fonts/Lato/Lato-Italic.woff') format('woff'),
        url('${cdnBasepath}/fonts/Lato/Lato-Italic.ttf') format('truetype'),
        url('${cdnBasepath}/fonts/Lato/Lato-Italic.svg#Lato-Italic') format('svg');
        font-weight: normal;
        font-style: italic;
        font-display: swap;
      }

      @font-face {
        font-family: 'Lato-Bold';
        src: url('${cdnBasepath}/fonts/Lato/Lato-Bold.eot');
        src: url('${cdnBasepath}/fonts/Lato/Lato-Bold.eot?#iefix') format('embedded-opentype'),
        url('${cdnBasepath}/fonts/Lato/Lato-Bold.woff2') format('woff2'),
        url('${cdnBasepath}/fonts/Lato/Lato-Bold.woff') format('woff'),
        url('${cdnBasepath}/fonts/Lato/Lato-Bold.ttf') format('truetype'),
        url('${cdnBasepath}/fonts/Lato/Lato-Bold.svg#Lato-Bold') format('svg');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Lato-BoldItalic';
        src: url('${cdnBasepath}/fonts/Lato/Lato-BoldItalic.eot');
        src: url('${cdnBasepath}/fonts/Lato/Lato-BoldItalic.eot?#iefix') format('embedded-opentype'),
        url('${cdnBasepath}/fonts/Lato/Lato-BoldItalic.woff2') format('woff2'),
        url('${cdnBasepath}/fonts/Lato/Lato-BoldItalic.woff') format('woff'),
        url('${cdnBasepath}/fonts/Lato/Lato-BoldItalic.ttf') format('truetype'),
        url('${cdnBasepath}/fonts/Lato/Lato-BoldItalic.svg#Lato-BoldItalic') format('svg');
        font-weight: bold;
        font-style: italic;
        font-display: swap;
      }

      @font-face {
        font-family: 'Lato-Black';
        src: url('${cdnBasepath}/fonts/Lato/Lato-Black.eot');
        src: url('${cdnBasepath}/fonts/Lato/Lato-Black.eot?#iefix') format('embedded-opentype'),
        url('${cdnBasepath}/fonts/Lato/Lato-Black.woff2') format('woff2'),
        url('${cdnBasepath}/fonts/Lato/Lato-Black.woff') format('woff'),
        url('${cdnBasepath}/fonts/Lato/Lato-Black.ttf') format('truetype'),
        url('${cdnBasepath}/fonts/Lato/Lato-Black.svg#Lato-Black') format('svg');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Lato-BlackItalic';
        src: url('${cdnBasepath}/fonts/Lato/Lato-BlackItalic.eot');
        src: url('${cdnBasepath}/fonts/Lato/Lato-BlackItalic.eot?#iefix') format('embedded-opentype'),
        url('${cdnBasepath}/fonts/Lato/Lato-BlackItalic.woff2') format('woff2'),
        url('${cdnBasepath}/fonts/Lato/Lato-BlackItalic.woff') format('woff'),
        url('${cdnBasepath}/fonts/Lato/Lato-BlackItalic.ttf') format('truetype'),
        url('${cdnBasepath}/fonts/Lato/Lato-BlackItalic.svg#Lato-BlackItalic') format('svg');
        font-weight: 900;
        font-style: italic;
        font-display: swap;
      }*/
    `}</style>
  </>
);

FontBaseline.displayName = 'FontBaseline';

export default withTheme(FontBaseline);
