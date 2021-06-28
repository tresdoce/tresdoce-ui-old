import * as React from 'react';
import { Meta } from '@storybook/react';

import Text from './Text';
// @ts-ignore
import TextMdx from './Text.mdx';

//import { select, text, color } from '@storybook/addon-knobs';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    docs: {
      page: TextMdx,
    }
  },
} as Meta;

export const Default = () => {
  const alignOpt = {
    left: 'left',
    center: 'center',
    right: 'right',
    justify: 'justify',
  };
  const capitalizeOpt = {
    initial: 'initial',
    inherit: 'inherit',
    capitalize: 'capitalize',
    lowercase: 'lowercase',
    uppercase: 'uppercase',
    'first-letter':'first-letter',
    none: 'none',
  };
  const weightOpt = {
    thin: 'thin',
    light: 'light',
    regular: 'regular',
    normal: 'normal',
    medium: 'medium',
    bold: 'bold',
    black: 'black',
  };
  const styleOpt = {
    normal: 'normal',
    italic: 'italic',
    oblique: 'oblique',
    inherit: 'inherit',
    initial: 'initial',
    unset: 'unset'
  };

  /*const textColor = color('Color', '#1B1C1D');
  const size = text('Size', '0.875rem');
  const align = select('Align', alignOpt, 'left');
  const fontStyle = select('Font-style', styleOpt, 'normal');
  const weight = select('Weight', weightOpt, 'normal');
  const capitalize = select('Capitalize', capitalizeOpt, 'initial');
  const children = text('Children', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');*/

  const textColor = '#1B1C1D';
  const size = '0.875rem';
  const align = 'left';
  const fontStyle = 'normal';
  const weight = 'normal';
  const capitalize = 'initial';
  const children = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

  return <Text
    color={textColor}
    size={size}
    align={align}
    fontStyle={fontStyle}
    weight={weight}
    capitalize={capitalize}
    dangerouslySetInnerHTML={{__html: children}}
  />;
};
