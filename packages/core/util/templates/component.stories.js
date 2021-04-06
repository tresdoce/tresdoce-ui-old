module.exports = (componentName) => ({
  filename: componentName,
  extension: `.stories.tsx`,
  content: `import * as React from "react";
import { Meta } from '@storybook/react';
import ${componentName} from "./${componentName}";
// @ts-ignore
import ${componentName}Mdx from "./${componentName}.mdx";

import { text } from '@storybook/addon-knobs';

export default {
    title: "${componentName}",
    component: ${componentName},
    parameters: {
      docs: {
        page: ${componentName}Mdx,
      },
    }
} as Meta;

export const Default = () => {
  const foo = text('foo', 'lorem ipsum');
  return <${componentName} foo={foo} />;
}`,
});
