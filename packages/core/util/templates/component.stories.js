module.exports = (componentName) => ({
  filename: componentName,
  content: `import * as React from "react";
import { Meta } from '@storybook/react';
import ${componentName} from "./${componentName}";
export default {
    title: "${componentName}",
    component: ${componentName}
} as Meta;

export const WithBar = () => <${componentName} foo="bar" />;
export const WithBaz = () => <${componentName} foo="baz" />;`,
  extension: `.stories.tsx`
});
