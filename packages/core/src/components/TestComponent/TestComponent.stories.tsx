import * as React from 'react';
import { Meta } from '@storybook/react';
import TestComponent from './TestComponent';
import { select, withKnobs } from '@storybook/addon-knobs';

//import mdx from './TestComponent.mdx';

export default {
  title: 'Components/TestComponent',
  component: TestComponent,
  decorators: [withKnobs],
  /*docs: {
    page: mdx,
  },*/
} as Meta;

export const Default = () => {
  const theme = select('theme',{
    'primary': 'primary',
    'secondary': 'secondary'
  }, 'primary', 'GROUP-THEME');

  return <TestComponent theme={theme} />
}
