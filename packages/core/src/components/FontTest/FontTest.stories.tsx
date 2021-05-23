import * as React from 'react';
import { Meta } from '@storybook/react';

import FontTest from "./FontTest";
// @ts-ignore
import FontTestMdx from "./FontTest.mdx";

export default {
    title: "Components/FontTest",
    component: FontTest,
    parameters: {
      docs: {
        page: FontTestMdx,
      },
      knobs: {
        disable: true
      },
      options: {
        showPanel: false,
      },
    }
} as Meta;

export const Default = () => {
  return <FontTest />;
}
