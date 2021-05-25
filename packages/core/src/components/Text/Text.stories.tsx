import * as React from 'react';
import { Meta } from '@storybook/react';

import Text from './Text';
// @ts-ignore
import TextMdx from './Text.mdx';

import { select, text } from '@storybook/addon-knobs';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    docs: {
      page: TextMdx,
    },
    knobs: {
      escapeHTML: false,
    },
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
    'Extra light': 'extraLight',
    'Light': 'light',
    'Normal': 'normal',
    'Regular': 'regular',
    'Semi bold': 'semiBold',
    'Bold':'bold',
    'Ultra bold': 'ultraBold'
  }
  const styleOpt = {
    normal: 'normal',
    italic: 'italic',
    oblique: 'oblique',
    inherit: 'inherit',
    initial: 'initial',
    unset: 'unset'
  }

  const align = select('align', alignOpt, 'left');
  const capitalize = select('capitalize', capitalizeOpt, 'initial');
  const weight = select('weight', weightOpt, 'normal');
  const fontStyle = select('fontStyle', styleOpt, 'normal');
  const children = text('children', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');

  return <Text
    align={align}
    capitalize={capitalize}
    weight={weight}
    fontStyle={fontStyle}
  >
    {children}
  </Text>;
};
