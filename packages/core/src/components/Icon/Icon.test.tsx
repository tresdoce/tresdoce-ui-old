import * as React from "react";
import { render } from "@testing-library/react";
import { createTheme } from '@tresdoce-ui/brand';
import Layout from '../Layout';

import Icon from "./Icon";
import { IconProps } from "./Icon.types";

describe("Component - Icon", () => {
  let props: IconProps;
  const theme = createTheme();

  beforeEach(() => {
    props = {
      name: "activity",
      width: 24,
      height: 24,
      fill: 'none',
      strokeColor: '#000',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    };
  });

  const renderComponent = () => render(<Layout theme={theme} cdnBasepath={''}><Icon {...props} /></Layout>);
  const updateComponent = (renderer, props) => renderer(<Layout theme={theme} cdnBasepath={''}><Icon {...props} /></Layout>);

  it('Should has a correct displayName', () =>{
    expect(Icon.displayName).toEqual('@tresdoce-ui/core/Icon');
  });

  /*it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    props['data-testId'] = "id-test-Icon-component";
    const { getByTestId, rerender } = renderComponent();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveTextContent(props.foo);

    props.foo = 'harvey was here 2';
    updateComponent(rerender, props);
    expect(component).toHaveTextContent(props.foo);
  });*/
});
