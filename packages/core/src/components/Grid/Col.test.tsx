import * as React from "react";
import { render } from "@testing-library/react";
import { createTheme } from '@tresdoce-ui/brand';
import Layout from '../Layout';

import Col from "./Col";
import { ColProps } from "./Col.types";

describe("Component - Col", () => {
  let props: ColProps;

  beforeEach(() => {
    props = {
      children: '',
      span: 0,
      columns: 12,
      grow: false,
      offset: 0,
      gutter: 'md',
      spacing: 'md',
      style: {}
    };
  });

  const renderComponent = () => render(<Layout theme={createTheme()} cdnBasepath={''}><Col {...props} /></Layout>);
  const updateComponent = (renderer, props) => renderer(<Layout theme={createTheme()} cdnBasepath={''}><Col {...props} /></Layout>);

  it('Should has a correct displayName', () =>{
    expect(Col.displayName).toEqual('@tresdoce-ui/core/Col');
  });

  /*it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    props['data-testId'] = "id-Grid";
    const { getByTestId, rerender } = renderComponent();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveTextContent(props.foo);

    props.foo = 'harvey was here 2';
    updateComponent(rerender, props);
    expect(component).toHaveTextContent(props.foo);
  });*/
});
