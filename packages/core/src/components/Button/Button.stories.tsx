import * as React from 'react';
import { Meta } from '@storybook/react';
import Button from './Button';

import { action } from '@storybook/addon-actions';


export default {
  title: 'Button',
  component: Button,
  parameters: {}
} as Meta;

export const WithBar = () => <Button onClick={action('clicked')} foo='bar' />;
export const WithBaz = () => <Button onClick={action('clicked')} foo='baz' />;
