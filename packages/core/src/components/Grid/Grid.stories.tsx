import * as React from 'react';
import { Meta } from '@storybook/react';

import Grid from "./Grid";
import Col from "./Col";
// @ts-ignore
import GridMdx from "./Grid.mdx";

import { text } from '@storybook/addon-knobs';

export default {
    title: "Components/Grid",
    component: Grid,
    parameters: {
      docs: {
        page: GridMdx,
      },
    }
} as Meta;

export const Default = () => {

  return <Grid style={{ background: "#999", 'textAlign': 'center' }} >
    <Col span={2}>2 </Col>
    <Col span={2}>2</Col>
    <Col span={2} >2</Col>
    <Col span={2} >2</Col>
    <Col span={2} >2</Col>
    <Col span={2}>2</Col>
    <Col span={3}>3</Col>
    <Col span={3}>3</Col>
    <Col span={3}>3</Col>
    <Col span={3}>3</Col>
    <Col span={4}>4</Col>
    <Col span={4}>4</Col>
    <Col span={4}>4</Col>
    <Col span={6}>6</Col>
    <Col span={6}>6</Col>
    <Col span={12}>12</Col>
    <Col span={3}>3</Col>
    <Col span={3} offset={3}>3</Col>
    <Col span={6} offset={3}>6</Col>
    <Col span={8} offset={2}>8</Col>
  </Grid>;
}
