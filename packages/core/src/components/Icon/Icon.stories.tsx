import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Icon from './Icon';
import { IconProps } from './Icon.types';
// @ts-ignore
import icons from './icons.json';

// @ts-ignore
import IconMdx from './Icon.mdx';

export default {
    title: 'Components/Icon',
    component: Icon,
    parameters: {
      docs: {
        page: IconMdx,
      },
    },
    argTypes:{
      'name':{
        control: {
          type: 'select',
          labels: Object.keys(icons)
        },
        options:Object.keys(icons),
        description: 'Nombre del icono',
      },
      'width': {
        control: { type: 'number' },
        description: 'Ancho del icono',
        table: {
          defaultValue: { summary: 24 },
        },
      },
      'height': {
        control: { type: 'number' },
        description: 'Alto del icono',
        table: {
          defaultValue: { summary: 24 },
        },
      },
      'strokeColor': {
        control: { type: 'color' },
        description: 'Color del icono',
        table: {
          type: {
            summary: 'string',
          },
          defaultValue: { summary: '#1B1C1D' },
        },
      },
      'strokeWidth': {
        control: { type: 'number' },
        description: 'Grosor del icono',
        table: {
          defaultValue: { summary: 2 },
        },
      },
      'strokeLinecap': {
        control: {
          type: 'select',
          labels: {
            'round': 'Round',
            'square': 'Square',
            'butt': 'Butt',
          },
        },
        options: ['round', 'square', 'butt'],
        description: 'Extremos de las lineas',
        table: {
          table: {
            type: {
              summary: 'round | square | butt',
            },
            defaultValue: 'round',
          },
        },
      },
      'strokeLinejoin': {
        control: {
          type: 'select',
          labels: {
            'round': 'Round',
            'bevel': 'Bevel',
            'miter': 'Miter',
          },
        },
        options: ['round', 'bevel', 'miter'],
        description: 'Articulación de las lineas',
        table: {
          table: {
            type: {
              summary: 'round | square | butt',
            },
            defaultValue: 'round',
          },
        },
      },
    }
} as Meta;

const Template: Story<IconProps> = args => <Icon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  'name': 'activity',
  'width': 24,
  'height': 24,
  'strokeColor': '#1B1C1D',
  'strokeWidth': 2,
  'strokeLinecap': 'round',
  'strokeLinejoin': 'round',
}
