module.exports = (componentName) => ({
  filename: 'styles',
  extension: `.tsx`,
  content: `import styled from 'styled-components';
import { ${componentName}Props } from './${componentName}.types';
  
export const ${componentName}Style = styled.div<${componentName}Props>\`
  border: 2px solid black;
  \$\{({ theme }) => \`padding: \$\{theme.spacing.default.space12} \`\};
\`
`
});
