module.exports = (componentName) => ({
  filename: componentName,
  extension: `.tsx`,
  content: `import * as React from 'react';
import filterProps from '../../utils/filter-props';
import clsx from 'clsx';
import { withTheme } from '../Theme';
import { ${componentName}Props } from "./${componentName}.types";
import { ${componentName}Style } from "./styles.jsx";

const ${componentName}: React.FC<${componentName}Props> = ({ 
  className,
  foo,
  ...rest
}) => (
  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class':true,
    [className]: !!className
  });
  <${componentName}Style className={classes} data-testid='id-${componentName}' {...filteredProps}>{foo}</${componentName}Style>
);

export default withTheme(${componentName});`,
});
