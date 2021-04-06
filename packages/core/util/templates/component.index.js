module.exports = (componentName) => ({
  filename: 'index',
  extension: `.ts`,
  content: `export { default } from './${componentName}';`,
});
