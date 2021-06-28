import * as React from 'react';
import { Meta } from '@storybook/react';
import TestComponent from './TestComponent';
// @ts-ignore
import TestComponentMdx from './TestComponent.mdx';

//import { select } from '@storybook/addon-knobs';

export default {
  title: 'Components/TestComponent',
  component: TestComponent,
  parameters: {
    docs: {
      page: TestComponentMdx,
    },
  },
} as Meta;

export const Default = () => {
  const typeOptions = {
    'primary': 'primary',
    'secondary': 'secondary',
  };
  //const mode = select('mode', typeOptions, 'primary', 'GROUP-THEME');
  const mode = 'primary';
  return <TestComponent mode={mode} />;
};
