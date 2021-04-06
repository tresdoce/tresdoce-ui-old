module.exports = (componentName) => ({
  filename: 'styles',
  extension: `.jsx`,
  content: `import styled from 'styled-components';
export const ${componentName}Styles = styled.div\`
  border: 2px solid black;
\`
  `
});
