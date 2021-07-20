import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Code from './Code';
import { CodeProps } from './Code.types';

// @ts-ignore
import CodeMdx from './Code.mdx';

export default {
    title: 'Components/Code',
    component: Code,
    parameters: {
      docs: {
        page: CodeMdx,
      },
    },
    argTypes:{
      'children':{
        control: { type: 'text' },
        description: '<foo myprop={"prop"}/>'
      },
      'block': {
        control: { type: 'boolean' },
        //defaultValue: false,
        description: 'Block',
        table: {
          type: {
            summary: 'true | false',
          },
          defaultValue: { summary: false },
        },
      },
    }
} as Meta;

const codeForPreviousDemo = `import React from 'react';
import { Code } from '@tresdoce-ui/core';
function Demo() {
  return <Code>React.createElement()</Code>;
}`;

const Template: Story<CodeProps> = args => <Code {...args}/>;

export const Default = Template.bind({});
Default.args = {
  'children': codeForPreviousDemo,
  'block': false
}
