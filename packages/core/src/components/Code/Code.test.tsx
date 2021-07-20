import * as React from "react";
import { render } from "@testing-library/react";
import { createTheme } from '../../../../brand/src';
import Layout from '../Layout';

import Code from "./Code";
import { CodeProps } from "./Code.types";

describe("Component - Code", () => {
  let props: CodeProps;
  
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  
  const renderComponent = () => render(<Layout theme={createTheme()} cdnBasepath={''}><Code {...props} /></Layout>);
  const updateComponent = (renderer, props) => renderer(<Layout theme={createTheme()} cdnBasepath={''}><Code {...props} /></Layout>);
  
  it('Should has a correct displayName', () =>{
    expect(Code.displayName).toEqual('@tresdoce-ui/core/Code');
  });
  
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    props['data-testId'] = "id-test-Code-component";
    const { getByTestId, rerender } = renderComponent();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveTextContent(props.foo);
    
    props.foo = 'harvey was here 2';
    updateComponent(rerender, props);
    expect(component).toHaveTextContent(props.foo);
  });
});