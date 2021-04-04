import * as React from 'react';
import { Meta } from '@storybook/react';
import TestComponent from './TestComponent';

import { select } from '@storybook/addon-knobs';

export default {
  title: 'Components/TestComponent',
  component: TestComponent,
} as Meta;

export const Default = () => {
  const themeOptions = {
    'primary': 'primary',
    'secondary': 'secondary',
  };
  const theme = select('Theme', themeOptions, 'primary', 'GROUP-THEME');

  return <TestComponent theme={theme} />;
};
