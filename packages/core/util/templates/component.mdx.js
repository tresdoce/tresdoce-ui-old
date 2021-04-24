module.exports = (componentName) => ({
  filename: componentName,
  extension: `.mdx`,
  content: `import { Meta, Preview } from '@storybook/addon-docs/blocks';
//import { createTheme } from '@tresdoce-ui/brand';
import { createTheme} from '../../../../brand';
import Layout  from '../Layout';

import ${componentName} from './${componentName}';

<Meta title="${componentName}" component={${componentName}} />

# Title ${componentName}

Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

<Preview >
  <Layout theme={createTheme()} cdnBasepath={''} containerFluid={true}>
    <${componentName} foo={'lorem ipsum'} />
  </Layout>
</Preview>`,

});
