module.exports = (componentName) => ({
  filename: componentName,
  extension: `.test.tsx`,
  content: `import * as React from "react";
import { render } from "@testing-library/react";
import { createTheme } from '../../../../brand/src';
import Layout from '../Layout';

import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

describe("Test ${componentName}", () => {
  let props: ${componentName}Props;
  
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  
  const renderComponent = () => render(<Layout theme={createTheme()} cdnBasepath={''}><${componentName} {...props} /></Layout>);
  
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    props['data-testId'] = "id-${componentName}";
    const { getByTestId } = renderComponent();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveTextContent("harvey was here");
  });
});`
});
