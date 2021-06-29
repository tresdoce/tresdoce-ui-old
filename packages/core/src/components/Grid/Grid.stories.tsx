import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Grid from './Grid';
import Col from './Col';
import { GridProps } from './Grid.types';

// @ts-ignore
import GridMdx from './Grid.mdx';

const styleGrid = { background: '#999' };
const styleCol = { 'margin': '8px 0', 'textAlign': 'center' };

export default {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    docs: {
      page: GridMdx,
    },
  },
  argTypes: {
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
    'columns': {
      control: { type: 'number' },
      description: 'Cantidad de columnas',
      table: {
        type: {
          summary: '8 | 12 | 16 | 20',
        },
        defaultValue: { summary: 12 },
      },
    },
    'grow': {
      control: { type: 'boolean' },
      //defaultValue: false,
      description: 'Extiende la columna hasta el final',
      table: {
        type: {
          summary: 'true | false',
        },
        defaultValue: { summary: false },
      },
    },
    'gutter': {
      control: { type: 'text' },
      description: 'Espacio entre columnas',
      table: {
        type: {
          summary: 'xs | sm | md | lg | xl | xxl | number',
        },
        defaultValue: { summary: 'md' },
      },
    },
    'justify': {
      control: {
        type: 'select',
        labels: {
          'flex-start': 'Flex start',
          'flex-end': 'Flex end',
          'center': 'Center',
          'space-around': 'Space around',
          'space-between': 'Space between',
          'space-evenly': 'Space evenly',
          'initial': 'Initial',
        },
      },
      options: ['flex-start', 'flex-end', 'center', 'space-around', 'space-between', 'space-evenly', 'initial'],
      description: 'Alineación de de las columnas',
      table: {
        type: {
          summary: 'flex-start | flex-end | center | space-around | space-between | space-evenly | initial | string',
        },
        defaultValue: 'flex-start',
      },
    },
    'align': {
      control: {
        type: 'select',
        labels: {
          'baseline': 'Baseline',
          'center': 'Center',
          'flex-start': 'Flex start',
          'flex-end': 'Flex end',
          'stretch': 'Stretch',
          'initial': 'Initial',
        },
      },
      options: ['baseline', 'center', 'flex-start', 'flex-end', 'stretch', 'initial'],
      description: 'Alineación vertical de de las columnas',
      table: {
        type: {
          summary: 'baseline | center | flex-start | flex-end | stretch | initial | string',
        },
        defaultValue: 'stretch',
      },
    },
  },
} as Meta;

const Template: Story<GridProps> = args => (<Grid style={styleGrid} {...args}>
  <Col style={styleCol} span={2}>
    <div style={{ border: '1px solid #000' }}>2</div>
  </Col>
  <Col style={styleCol} span={2}>
    <div style={{ border: '1px solid #000' }}>2</div>
  </Col>
  <Col style={styleCol} span={2}>
    <div style={{ border: '1px solid #000' }}>2</div>
  </Col>
  <Col style={styleCol} span={2}>
    <div style={{ border: '1px solid #000' }}>2</div>
  </Col>
  <Col style={styleCol} span={2}>
    <div style={{ border: '1px solid #000' }}>2</div>
  </Col>
  <Col style={styleCol} span={2}>
    <div style={{ border: '1px solid #000' }}>2</div>
  </Col>
  <Col style={styleCol} span={2}>
    <div style={{ border: '1px solid #000' }}>2</div>
  </Col>
  <Col style={styleCol} span={2}>
    <div style={{ border: '1px solid #000' }}>2</div>
  </Col>
  <Col style={styleCol} span={2}>
    <div style={{ border: '1px solid #000' }}>2</div>
  </Col>
  <Col style={styleCol} span={2}>
    <div style={{ border: '1px solid #000' }}>2</div>
  </Col>
  <Col style={styleCol} span={2}>
    <div style={{ border: '1px solid #000' }}>2</div>
  </Col>
  <Col style={styleCol} span={2}>
    <div style={{ border: '1px solid #000' }}>2</div>
  </Col>
  <Col style={styleCol} span={3}>
    <div style={{ border: '1px solid #000' }}>3</div>
  </Col>
  <Col style={styleCol} span={3}>
    <div style={{ border: '1px solid #000' }}>3</div>
  </Col>
  <Col style={styleCol} span={3}>
    <div style={{ border: '1px solid #000' }}>3</div>
  </Col>
  <Col style={styleCol} span={3}>
    <div style={{ border: '1px solid #000' }}>3</div>
  </Col>
  <Col style={styleCol} span={4}>
    <div style={{ border: '1px solid #000' }}>4</div>
  </Col>
  <Col style={styleCol} span={4}>
    <div style={{ border: '1px solid #000' }}>4</div>
  </Col>
  <Col style={styleCol} span={4}>
    <div style={{ border: '1px solid #000' }}>4</div>
  </Col>
  <Col style={styleCol} span={6}>
    <div style={{ border: '1px solid #000' }}>6</div>
  </Col>
  <Col style={styleCol} span={6}>
    <div style={{ border: '1px solid #000' }}>6</div>
  </Col>
  <Col style={styleCol} span={12}>
    <div style={{ border: '1px solid #000' }}>12</div>
  </Col>
  <Col style={styleCol} span={3}>
    <div style={{ border: '1px solid #000' }}>3</div>
  </Col>
  <Col style={styleCol} span={3} offset={3}>
    <div style={{ border: '1px solid #000' }}>3</div>
  </Col>
  <Col style={styleCol} span={6} offset={3}>
    <div style={{ border: '1px solid #000' }}>6</div>
  </Col>
  <Col style={styleCol} span={8} offset={2}>
    <div style={{ border: '1px solid #000' }}>8</div>
  </Col>
</Grid>);

export const Default = Template.bind({});
Default.args = {
  'row': false,
  'columns': 12,
  'grow': false,
  'gutter': 'md',
  'justify': 'flex-start',
  'align': 'stretch',
};

