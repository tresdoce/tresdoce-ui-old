import * as React from "react";
import { render } from "@testing-library/react";
import FontTest from "./FontTest";
import { FontTestProps } from "./FontTest.types";

describe("Test FontTest", () => {
  let props: FontTestProps;
  
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  
  const renderComponent = () => render(<FontTest {...props} />);
  
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("id-FontTest");
    expect(component).toHaveTextContent("harvey was here");
  });
});