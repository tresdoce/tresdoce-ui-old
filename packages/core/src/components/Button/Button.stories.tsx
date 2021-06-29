import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Button from './Button';
import { ButtonProps } from './Button.types';

// @ts-ignore
import ButtonMdx from './Button.mdx';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: ButtonMdx,
    },
  },
  argTypes: {
    'foo': {
      control: { type: 'text' },
      description: 'Texto del botón',
    },
    onClick: { action: 'clicked' }
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  'foo': 'I am button',
  'onClick': () => alert("click!"),
};
