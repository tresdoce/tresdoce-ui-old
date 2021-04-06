module.exports = (componentName) => ({
  filename: componentName,
  extension: `.types.ts`,
  content: `export interface ${componentName}Props {
    foo: string;
}`
});
