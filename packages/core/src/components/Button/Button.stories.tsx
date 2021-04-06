import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Button from './Button';
import mdx from './Button.mdx';

import { text } from '@storybook/addon-knobs';


export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  /*argTypes: {
    foo: {
      name: 'foo',
      description: 'Text of button description',
      defaultValue: 'text button',
      control: { type: 'text' },
    },
  },*/
} as Meta;

export const Primary = () => {
  const foo = text('foo', 'text button');
  const onClick = text('onClick', 'click');

  return <Button foo={foo} onClick={() => alert(onClick)} />;
};
