import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Button from './Button';
// @ts-ignore
import ButtonMdx from './Button.mdx';

import { text } from '@storybook/addon-knobs';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: ButtonMdx,
    },
  },
} as Meta;

export const Primary = () => {
  const foo = text('foo', 'text button');
  const onClick = text('onClick', 'click');

  return <Button foo={foo} onClick={() => alert(onClick)} />;
};
