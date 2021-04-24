module.exports = (componentName) => ({
  filename: componentName,
  extension: `.tsx`,
  content: `import * as React from 'react';
import { withTheme } from '../Theme';
import { ${componentName}Props } from "./${componentName}.types";
import { ${componentName}Style } from "./styles.jsx";

const ${componentName}: React.FC<${componentName}Props> = ({ 
  theme,
  foo,
  ...rest
}) => (
    <${componentName}Style data-testid='id-${componentName}'>{foo}</${componentName}Style>
);

export default withTheme(${componentName});`,
});
