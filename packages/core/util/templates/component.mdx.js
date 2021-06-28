module.exports = (componentName) => ({
  filename: componentName,
  extension: `.mdx`,
  content: `import { Canvas, Meta, Source } from '@storybook/addon-docs';
import dedent from 'ts-dedent';
//import { createTheme } from '@tresdoce-ui/brand';
import { createTheme } from '../../../../brand/src';
import Layout from '../Layout';

import ${componentName} from './${componentName}';

<Meta title="${componentName}" component={${componentName}} />

# Title ${componentName}

Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

<Canvas >
  <Layout theme={createTheme()} cdnBasepath={''} containerFluid={true}>
    <${componentName} foo={'lorem ipsum'} />
  </Layout>
</Canvas>

<Source
  language='jsx'
  dark={false}
  code={dedent\`import { ${componentName} } from '@tresdoce-ui/core';
        <${componentName} foo={'lorem ipsum'}/>\`}
/>
`,
});
