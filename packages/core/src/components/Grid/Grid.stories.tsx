import * as React from 'react';
import { Meta } from '@storybook/react';

import Grid from './Grid';
import Col from './Col';
// @ts-ignore
import GridMdx from './Grid.mdx';

import { boolean, number, object, select, text } from '@storybook/addon-knobs';

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
    'Baseline': 'baseline',
    'Center': 'center',
    'Flex start': 'flex-start',
    'Flex end': 'flex-end',
    'Stretch': 'stretch',
    'Initial': 'initial',
  };

  const grow = boolean('Grow', false);
  const row = boolean('Row', false);
  const columns = number('Columns', 12);
  const gutter = text('Gutter', 'md');
  const justify = select('Justify', justifyOpt, 'flex-start');
  const align = select('Align', alignOpt, 'stretch');
  const styleGrid = object('Style Grid', { background: '#999' });
  const styleCol = object('Style Col', { "margin":"8px 0",'textAlign': 'center' }); //border: '1px solid black',

  return <Grid
    style={styleGrid}
    grow={grow}
    row={row}
    columns={columns}
    gutter={gutter}
    justify={justify}
    align={align}
  >
    <Col style={styleCol} span={2}><div style={{border:"1px solid #000"}}>2</div></Col>
    <Col style={styleCol} span={2}><div style={{border:"1px solid #000"}}>2</div></Col>
    <Col style={styleCol} span={2}><div style={{border:"1px solid #000"}}>2</div></Col>
    <Col style={styleCol} span={2}><div style={{border:"1px solid #000"}}>2</div></Col>
    <Col style={styleCol} span={2}><div style={{border:"1px solid #000"}}>2</div></Col>
    <Col style={styleCol} span={2}><div style={{border:"1px solid #000"}}>2</div></Col>
    <Col style={styleCol} span={2}><div style={{border:"1px solid #000"}}>2</div></Col>
    <Col style={styleCol} span={2}><div style={{border:"1px solid #000"}}>2</div></Col>
    <Col style={styleCol} span={2}><div style={{border:"1px solid #000"}}>2</div></Col>
    <Col style={styleCol} span={2}><div style={{border:"1px solid #000"}}>2</div></Col>
    <Col style={styleCol} span={2}><div style={{border:"1px solid #000"}}>2</div></Col>
    <Col style={styleCol} span={2}><div style={{border:"1px solid #000"}}>2</div></Col>
    <Col style={styleCol} span={3}><div style={{border:"1px solid #000"}}>3</div></Col>
    <Col style={styleCol} span={3}><div style={{border:"1px solid #000"}}>3</div></Col>
    <Col style={styleCol} span={3}><div style={{border:"1px solid #000"}}>3</div></Col>
    <Col style={styleCol} span={3}><div style={{border:"1px solid #000"}}>3</div></Col>
    <Col style={styleCol} span={4}><div style={{border:"1px solid #000"}}>4</div></Col>
    <Col style={styleCol} span={4}><div style={{border:"1px solid #000"}}>4</div></Col>
    <Col style={styleCol} span={4}><div style={{border:"1px solid #000"}}>4</div></Col>
    <Col style={styleCol} span={6}><div style={{border:"1px solid #000"}}>6</div></Col>
    <Col style={styleCol} span={6}><div style={{border:"1px solid #000"}}>6</div></Col>
    <Col style={styleCol} span={12}><div style={{border:"1px solid #000"}}>12</div></Col>
    <Col style={styleCol} span={3}><div style={{border:"1px solid #000"}}>3</div></Col>
    <Col style={styleCol} span={3} offset={3}><div style={{border:"1px solid #000"}}>3</div></Col>
    <Col style={styleCol} span={6} offset={3}><div style={{border:"1px solid #000"}}>6</div></Col>
    <Col style={styleCol} span={8} offset={2}><div style={{border:"1px solid #000"}}>8</div></Col>
  </Grid>;
};
