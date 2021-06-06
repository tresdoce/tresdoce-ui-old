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

  return <Grid>
    <Col span={3}>1</Col>
    <Col span={3}>2</Col>
    <Col span={3} >3</Col>
    <Col span={3} >4</Col>
    <Col span={3} >5</Col>
    <Col span={3} >6</Col>
  </Grid>;
}
