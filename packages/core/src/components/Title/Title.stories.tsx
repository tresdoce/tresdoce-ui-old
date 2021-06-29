import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Title from './Title';
import { TitleProps } from './Title.types';

// @ts-ignore
import TitleMdx from './Title.mdx';

export default {
  title: 'Components/Title',
  component: Title,
  parameters: {
    docs: {
      page: TitleMdx,
    },
  },
  argTypes: {
    'level': {
      control: {
        type: 'select',
        labels: {
          1: '1 (h1)',
          2: '2 (h2)',
          3: '3 (h3)',
          4: '4 (h4)',
          5: '5 (h5)',
          6: '6 (h6)',
        },
      },
      options: [1, 2, 3, 4, 5, 6],
      description: 'Level heading',
      table: {
        table: {
          type: {
            summary: '1 | 2 | 3 | 4 | 5 | 6',
          },
          defaultValue: 1,
        },
      },
    },
    'children': {
      control: { type: 'text' },
      description: 'Contenido',
    },
    'color': {
      control: { type: 'color' },
      description: 'Color del texto',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: '#1B1C1D' },
      },
    },
    'align': {
      control: {
        type: 'select',
        labels: {
          'left': 'Left',
          'center': 'Center',
          'right': 'Right',
          'justify': 'Justify',
        },
      },
      options: ['left', 'center', 'right', 'justify'],
      description: 'Alineación del texto',
      table: {
        table: {
          type: {
            summary: 'left | center | right | justify | string',
          },
          defaultValue: 'left',
        },
      },
    },
    'fontStyle': {
      control: {
        type: 'select',
        labels: {
          'normal': 'Normal',
          'italic': 'Italic',
          'oblique': 'Oblique',
          'inherit': 'Inherit',
          'initial': 'Initial',
          'unset': 'Unset',
        },
      },
      options: ['normal', 'italic', 'oblique', 'inherit', 'initial', 'unset'],
      description: 'Estilo de la fuente',
      table: {
        table: {
          type: {
            summary: 'normal | italic | oblique | inherit | initial | unset | string',
          },
          defaultValue: 'normal',
        },
      },
    },
    'weight': {
      control: {
        type: 'select',
        labels: {
          'thin': 'Thin',
          'light': 'Light',
          'regular': 'Regular',
          'normal': 'Normal',
          'medium': 'Medium',
          'bold': 'Bold',
          'black': 'Black',
        },
      },
      options: ['thin', 'light', 'regular', 'normal', 'medium', 'bold', 'black'],
      description: 'Grosor de la fuente',
      table: {
        table: {
          type: {
            summary: 'thin | light | regular | normal | medium | bold | black | string',
          },
          defaultValue: 'normal',
        },
      },
    },
    'capitalize': {
      control: {
        type: 'select',
        labels: {
          'initial': 'Initial',
          'inherit': 'Inherit',
          'capitalize': 'Capitalize',
          'lowercase': 'Lowercase',
          'uppercase': 'Uppercase',
          'first-letter': 'First letter',
          'none': 'None',
        },
      },
      options: ['initial', 'inherit', 'capitalize', 'lowercase', 'uppercase', 'first-letter', 'none'],
      description: 'Capitalización de la fuente',
      table: {
        table: {
          type: {
            summary: 'initial | inherit | capitalize | lowercase | uppercase | first-letter | none | string',
          },
          defaultValue: 'initial',
        },
      },
    },
  },
} as Meta;

const Template: Story<TitleProps> = args => <Title {...args}>{args.children}</Title>;

export const Default = Template.bind({});
Default.args = {
  'level': 1,
  'children': `This is a heading`,
  'color': '#1B1C1D',
  'align': 'left',
  'fontStyle': 'normal',
  'weight': 'bold',
  'capitalize': 'initial',
};
