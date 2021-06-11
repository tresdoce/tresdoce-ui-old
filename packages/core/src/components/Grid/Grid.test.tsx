import * as React from "react";
import { render } from "@testing-library/react";
import { createTheme } from '../../../../brand/src';
import Layout from '../Layout';

import Grid from "./Grid";
import { GridProps } from "./Grid.types";

describe("Component - Grid", () => {
  let props: GridProps;

  /*beforeEach(() => {
    props = {

    };
  });*/

  const renderComponent = () => render(<Layout theme={createTheme()} cdnBasepath={''}><Grid {...props} /></Layout>);
  const updateComponent = (renderer, props) => renderer(<Layout theme={createTheme()} cdnBasepath={''}><Grid {...props} /></Layout>);

  it('Should has a correct displayName', () =>{
    expect(Grid.displayName).toEqual('@tresdoce-ui/core/Grid');
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
