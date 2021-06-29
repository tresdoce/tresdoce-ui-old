module.exports = (componentName) => ({
  filename: componentName,
  extension: `.stories.tsx`,
  content: `import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import ${componentName} from './${componentName}';
import { ${componentName}Props } from './${componentName}.types';

// @ts-ignore
import ${componentName}Mdx from './${componentName}.mdx';

export default {
    title: '${componentName}',
    component: ${componentName},
    parameters: {
      docs: {
        page: ${componentName}Mdx,
      },
    },
    argTypes:{
      'foo':{
        control: { type: 'text' },
        description: 'foo content'
      }
    }
} as Meta;

const Template: Story<${componentName}Props> = args => <${componentName} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  'foo': 'lorem ipsum'
}`,
});
