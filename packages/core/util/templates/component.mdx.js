module.exports = (componentName) => ({
  filename: componentName,
  extension: `.mdx`,
  content: `import { Meta, Canvas } from '@storybook/addon-docs/blocks';
//import { createTheme } from '@tresdoce-ui/brand';
import { createTheme } from '../../../../brand/src';
import Layout  from '../Layout';

import ${componentName} from './${componentName}';

<Meta title="${componentName}" component={${componentName}} />

# Title ${componentName}

Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

<Canvas >
  <Layout theme={createTheme()} cdnBasepath={''} containerFluid={true}>
    <${componentName} foo={'lorem ipsum'} />
  </Layout>
</Canvas>`,

});
