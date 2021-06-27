import * as React from 'react';
import { Meta } from '@storybook/react';

import Container from "./Container";
// @ts-ignore
import ContainerMdx from "./Container.mdx";

import { text, select, boolean } from '@storybook/addon-knobs';

export default {
    title: "Components/Container",
    component: Container,
    parameters: {
      docs: {
        page: ContainerMdx,
      },
    }
} as Meta;

export const Default = () => {
  const sizesOpd = {
    "xs < 576px":"xs",
    "sm >= 576px":"sm",
    "md >= 768px":"md",
    "lg >= 992px":"lg",
    "xl >= 1200px":"xl",
    "xxl >= 1400px":"xxl"
  }
  const size = select('Size', sizesOpd, 'md');
  const fluid = boolean('Fluid', false);
  const row = boolean('Row', false);
  const children = text('Children', 'lorem ipsum');

  return <Container
    size={size}
    fluid={fluid}
    row={row}
  >
    {children}
  </Container>;
}
