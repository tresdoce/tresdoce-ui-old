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
  const alignOptions = {
    left: 'left',
    center: 'center',
    right: 'right',
    justify: 'justify',
  };
  const align = select('align', alignOptions, 'left');
  const children = text('children', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');
  return <Text align={align}>{children}</Text>;
};
