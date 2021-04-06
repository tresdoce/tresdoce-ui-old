module.exports = (componentName) => ({
  filename: componentName,
  extension: `.mdx`,
  content: `import { Meta, Preview } from '@storybook/addon-docs/blocks';
import ${componentName} from './${componentName}';

<Meta title="${componentName}" component={${componentName}} />

# ${componentName}

<Preview >
  <div>
    <${componentName} foo={'lorem ipsum'} />
  </div>
</Preview>`,
});
