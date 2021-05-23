import * as React from "react";
import { render } from "@testing-library/react";
import Title from "./Title";
import { TitleProps } from "./Title.types";

describe("Test Title", () => {
  let props: TitleProps;
  
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  
  const renderComponent = () => render(<Title {...props} />);
  
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("id-Title");
    expect(component).toHaveTextContent("harvey was here");
  });
});