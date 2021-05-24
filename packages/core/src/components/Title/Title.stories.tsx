import * as React from 'react';
import { Meta } from '@storybook/react';

import Title from './Title';
// @ts-ignore
import TitleMdx from './Title.mdx';

import { select, text } from '@storybook/addon-knobs';

export default {
    title: "Components/Title",
    component: Title,
    parameters: {
      docs: {
        page: TitleMdx,
      },
      knobs: {
        escapeHTML: false
      }
    }
} as Meta;

export const Default = () => {
  const levelsOptions = {
    h1: 1,
    h2: 2,
    h3: 3,
    h4: 4,
    h5: 5,
    h6: 6,
  };
  const alignOptions = {
    left:'left',
    center: 'center',
    right:'right',
    justify:'justify'
  };

  const level = select('level', levelsOptions, 1);
  const align = select('align', alignOptions, 'left');
  const children = text('children', 'This is a heading');

  return (<Title level={level} align={align}>{children}</Title>);
}