import * as React from 'react';
import { Meta } from '@storybook/react';
import Button from '.';

import { action } from '@storybook/addon-actions';


export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
  },
  //Default args = props
  args:{},
  argTypes:{
    control: {
      foo : 'text'
    }
  }
} as Meta;

//export const WithBar = () => <Button onClick={action('clicked bar')} foo='bar' />;
//export const WithBaz = () => <Button onClick={action('clicked baz')} foo='baz' />;

const Template = args => (<Button {...args}/>)

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
