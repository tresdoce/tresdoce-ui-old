module.exports = (componentName) => ({
  filename: componentName,
  extension: `.test.tsx`,
  content: `import * as React from "react";
import { render } from "@testing-library/react";
import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

describe("Test ${componentName}", () => {
  let props: ${componentName}Props;
  
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  
  const renderComponent = () => render(<${componentName} {...props} />);
  
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("id-${componentName}");
    expect(component).toHaveTextContent("harvey was here");
  });
});`
});
