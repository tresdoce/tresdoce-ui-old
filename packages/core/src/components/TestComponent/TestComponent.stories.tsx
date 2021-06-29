import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import TestComponent from './TestComponent';
import { TestComponentProps } from './TestComponent.types';
// @ts-ignore
import TestComponentMdx from './TestComponent.mdx';

export default {
  title: 'Components/TestComponent',
  component: TestComponent,
  parameters: {
    docs: {
      page: TestComponentMdx,
    },
  },
  argTypes: {
    'mode': {
      options:['primary', 'secondary'],
      control: { type: 'radio' },
      description: 'Modo',
      table:{
        type:{
          summary: 'primary | secondary'
        },
        defaultValue:'primary'
      }
    },
  },
} as Meta;

const Template: Story<TestComponentProps> = args => <TestComponent {...args} />;

export const Default = Template.bind({});
Default.args={
  'mode':'primary'
}
