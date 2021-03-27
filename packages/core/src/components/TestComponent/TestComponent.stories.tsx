import * as React from 'react';
import { Meta } from '@storybook/react';
import TestComponent from './TestComponent';

export default {
  title: 'TestComponent',
  component: TestComponent
} as Meta;

export const Primary = () => <TestComponent theme='primary' />;
export const Secondary = () => <TestComponent theme='secondary' />;

