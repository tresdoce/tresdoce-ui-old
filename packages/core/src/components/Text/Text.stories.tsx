import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Text from './Text';
import { TextProps } from './Text.types';

// @ts-ignore
import TextMdx from './Text.mdx';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    docs: {
      page: TextMdx,
    },
  },
  argTypes: {
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
    'size': {
      control: { type: 'text' },
      description: 'Font size',
      table: {
        type: {
          summary: 'string | px | rem | %',
        },
        defaultValue: '0.875rem',
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
    'children': {
      control: { type: 'text' },
      description: 'Contenido',
    },
  },
} as Meta;

const Template: Story<TextProps> = args => <Text {...args}>{args.children}</Text>;

export const Default = Template.bind({});
Default.args = {
  'color': '#1B1C1D',
  'size': '0.875rem',
  'align': 'left',
  'fontStyle': 'normal',
  'weight': 'normal',
  'capitalize' : 'initial',
  'children': `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
};
