import * as React from 'react';
import { Meta } from '@storybook/react';

import Title from './Title';
// @ts-ignore
import TitleMdx from './Title.mdx';

import { color, select, text } from '@storybook/addon-knobs';

export default {
    title: "Components/Title",
    component: Title,
    parameters: {
      docs: {
        page: TitleMdx,
      }
    },
} as Meta;

export const Default = () => {
  const levelsOpt = {
    '1 (h1)': 1,
    '2 (h2)': 2,
    '3 (h3)': 3,
    '4 (h4)': 4,
    '5 (h5)': 5,
    '6 (h6)': 6,
  };
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

  const level = select('level', levelsOpt, 1);
  const children = text('children', 'This is a heading');
  const align = select('align', alignOpt, 'left');
  const textColor = color('color', '#1B1C1D');
  const fontStyle = select('fontStyle', styleOpt, 'normal');
  const weight = select('weight', weightOpt, 'bold');
  const capitalize = select('capitalize', capitalizeOpt, 'initial');

  return <Title
    level={level}
    color={textColor}
    align={align}
    fontStyle={fontStyle}
    weight={weight}
    capitalize={capitalize}
    dangerouslySetInnerHTML={{__html: children}}
  />;
}
