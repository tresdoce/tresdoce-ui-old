import * as React from 'react';
import { Meta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button
} as Meta;

export const WithBar = () => <Button foo='bar' />;
export const WithBaz = () => <Button foo='baz' />;
