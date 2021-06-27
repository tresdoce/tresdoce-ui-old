import * as React from "react";
import { render } from "@testing-library/react";
import { createTheme } from '../../../../brand/src';
import Layout from '../Layout';

import Container from "./Container";
import { ContainerProps } from "./Container.types";

describe("Component - Container", () => {
  let props: ContainerProps;

  beforeEach(() => {
    props = {
      className: '',
      children: "bar",
      row: false,
      fluid: false,
      size: "md",
    };
  });

  const renderComponent = () => render(<Layout theme={createTheme()} cdnBasepath={''}><Container {...props} /></Layout>);
  const updateComponent = (renderer, props) => renderer(<Layout theme={createTheme()} cdnBasepath={''}><Container {...props} /></Layout>);

  it('Should has a correct displayName', () =>{
    expect(Container.displayName).toEqual('@tresdoce-ui/core/Container');
  });

  /*it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    props['data-testId'] = "id-Container";
    const { getByTestId, rerender } = renderComponent();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveTextContent(props.foo);

    props.foo = 'harvey was here 2';
    updateComponent(rerender, props);
    expect(component).toHaveTextContent(props.foo);
  });*/
});
