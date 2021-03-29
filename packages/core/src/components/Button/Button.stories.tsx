import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Button from '.';
import { ButtonProps } from './Button.types'

import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
  },
  //Default args = props
  args:{
    foo:'Button default',
    onClick: () => alert('click')
  },
  argTypes:{
    control: {
      foo : 'text'
    }
  },
} as Meta;

//export const WithBar = () => <Button onClick={action('clicked bar')} foo='bar' />;
//export const WithBaz = () => <Button onClick={action('clicked baz')} foo='baz' />;

const Template: Story<ButtonProps> = args => (<Button {...args}/>)

export const DefaultBtn = Template.bind({});

export const WithBar = Template.bind({});
WithBar.args = {
  onClick: action('clicked bar'),
  foo: 'bar'
}

export const WithBaz = Template.bind({});
WithBaz.args = {
  onClick: action('clicked baz'),
  foo: 'baz'
}
