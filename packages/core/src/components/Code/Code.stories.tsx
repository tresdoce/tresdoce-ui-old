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
      }
    }
} as Meta;

const Template: Story<CodeProps> = args => <Code {...args}/>;

export const Default = Template.bind({});
Default.args = {
  'children': '<foo myprop={"prop"}/>'
}
