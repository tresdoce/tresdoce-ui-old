module.exports = (componentName) => ({
  filename: 'styles',
  extension: `.jsx`,
  content: `import styled from 'styled-components';
  
export const ${componentName}Style = styled.div\`
  border: 2px solid black;
  \$\{({ theme }) => \`padding: \$\{theme.spacing.default.space12} \`\};
\`
`
});
