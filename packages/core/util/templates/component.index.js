module.exports = (componentName) => ({
  filename: 'index',
  content: `export {default} from './${componentName}';`,
  extension: `.ts`
});
