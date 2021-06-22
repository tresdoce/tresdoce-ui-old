import * as React from 'react';
import { Meta } from '@storybook/react';

import Grid from './Grid';
import Col from './Col';
// @ts-ignore
import GridMdx from './Grid.mdx';

import { boolean, number, select, text, object } from '@storybook/addon-knobs';

export default {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    docs: {
      page: GridMdx,
    },
  },
} as Meta;

export const Default = () => {
  const justifyOpt = {
    'Flex start': 'flex-start',
    'Flex end': 'flex-end',
    'Center': 'center',
    'Space around': 'space-around',
    'Space between': 'space-between',
    'Space evenly': 'space-evenly',
    'Initial': 'initial',
  };

  const alignOpt = {
    'Baseline':'baseline',
    'Center':'center',
    'Flex start':'flex-start',
    'Flex end':'flex-end',
    'Stretch':'stretch',
    'Initial':'initial'
};

  const grow = boolean('Grow', false);
  const row = boolean('Row', false);
  const columns = number('Columns', 12);
  const gutter = text('Gutter', 'md');
  const justify = select('Justify', justifyOpt, 'flex-start');
  const align = select('Align', alignOpt, 'stretch');
  const styleGrid = object('Style Grid', { background: '#999' } )
  const styleCol = object('Style Col', { border: "1px solid black", 'textAlign': 'center' } )

  return <Grid
    style={styleGrid}
    grow={grow}
    row={row}
    columns={columns}
    gutter={gutter}
    justify={justify}
    align={align}
  >
    <Col style={styleCol} span={2}>2 </Col>
    <Col style={styleCol} span={2}>2</Col>
    <Col style={styleCol} span={2}>2</Col>
    <Col style={styleCol} span={2}>2</Col>
    <Col style={styleCol} span={2}>2</Col>
    <Col style={styleCol} span={2}>2</Col>
    <Col style={styleCol} span={3}>3</Col>
    <Col style={styleCol} span={3}>3</Col>
    <Col style={styleCol} span={3}>3</Col>
    <Col style={styleCol} span={3}>3</Col>
    <Col style={styleCol} span={4}>4</Col>
    <Col style={styleCol} span={4}>4</Col>
    <Col style={styleCol} span={4}>4</Col>
    <Col style={styleCol} span={6}>6</Col>
    <Col style={styleCol} span={6}>6</Col>
    <Col style={styleCol} span={12}>12</Col>
    <Col style={styleCol} span={3}>3</Col>
    <Col style={styleCol} span={3} offset={3}>3</Col>
    <Col style={styleCol} span={6} offset={3}>6</Col>
    <Col style={styleCol} span={8} offset={2}>8</Col>
  </Grid>;
};
