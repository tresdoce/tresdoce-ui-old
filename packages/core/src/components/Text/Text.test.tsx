import * as React from "react";
import { render } from "@testing-library/react";
import { createTheme } from '../../../../brand/src';
import Layout from '../Layout';

import Text from "./Text";
import { TextProps } from "./Text.types";

describe("Test Text", () => {
  let props: TextProps;

  beforeEach(() => {
    props = {
      align: 'left',
      children: ""
    };
  });

  const renderComponent = () => render(<Layout theme={createTheme()} cdnBasepath={''}><Text {...props} /></Layout>);

  it("should render text component correctly", () => {
    props.children = "harvey was here";
    props['data-testId'] = 'id-Text';
    const { getByTestId } = renderComponent();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveTextContent(props.children);
  });
});
