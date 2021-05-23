import * as React from 'react';
import { Meta } from '@storybook/react';

import Title from "./Title";
// @ts-ignore
import TitleMdx from "./Title.mdx";

import { text, select } from '@storybook/addon-knobs';

export default {
    title: "Components/Title",
    component: Title,
    parameters: {
      docs: {
        page: TitleMdx,
      },
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
  const level = select('level', levelsOptions, 1);
  const children = text('children', `This is a heading`)
  return <Title level={level} >{children}</Title>;
}
