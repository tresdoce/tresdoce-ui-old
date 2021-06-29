import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Container from './Container';
import { ContainerProps } from './Container.types';

// @ts-ignore
import ContainerMdx from './Container.mdx';

export default {
  title: 'Components/Container',
  component: Container,
  parameters: {
    docs: {
      page: ContainerMdx,
    },
  },
  argTypes: {
    'fluid': {
      control: { type: 'boolean' },
      //defaultValue: false,
      description: 'Container fluido',
      table: {
        type: {
          summary: 'true | false',
        },
        defaultValue: { summary: false },
      },
    },
    'row': {
      control: { type: 'boolean' },
      //defaultValue: false,
      description: 'Remueve los paddings',
      table: {
        type: {
          summary: 'true | false',
        },
        defaultValue: { summary: false },
      },
    },
    'size': {
      control: {
        type: 'select',
        labels: {
          'xs': 'xs < 576px',
          'sm': 'sm >= 576px',
          'md': 'md >= 768px',
          'lg': 'lg >= 992px',
          'xl': 'xl >= 1200px',
          'xxl': 'xxl >= 1400px',
        },
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      //defaultValue: 'md',
      description: 'Ancho maximo emblocado',
      table: {
        type: {
          //summary: 'Values',
          //detail: 'xs | sm | md | lg | xl | xxl'
          summary: 'xs | sm | md | lg | xl | xxl',
        },
        defaultValue: { summary: 'md' },
      },
    },
    'children': {
      control: { type: 'text' },
      //defaultValue: 'Lorem ipsum',
      description: 'Contenido',
    },
  },
} as Meta;

const Template: Story<ContainerProps> = args => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  'fluid': false,
  'row': false,
  'size': 'md',
  'children': 'Lorem ipsum',
};

