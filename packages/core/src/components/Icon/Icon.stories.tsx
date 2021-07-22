import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Icon from './Icon';
import { IconProps } from './Icon.types';

// @ts-ignore
import IconMdx from './Icon.mdx';

export default {
    title: 'Components/Icon',
    component: Icon,
    parameters: {
      docs: {
        page: IconMdx,
      },
    },
    argTypes:{
      'name':{
        control: { type: 'text' },
        description: 'foo content'
      }
    }
} as Meta;

const Template: Story<IconProps> = args => <Icon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  'name': 'activity'
}
