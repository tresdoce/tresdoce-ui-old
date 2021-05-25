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
      'align': 'left',
      'children': ""
    };
  });

  const renderComponent = () => render(<Layout theme={createTheme()} cdnBasepath={''}><Text {...props} /></Layout>);

  const expectText = (getByTestId, props) => {
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveTextContent(props.children);
    expect(component.tagName).toEqual('P');
    expect(component).toHaveStyle(`text-align: ${props.align}`);
  }


  it("should render text component correctly", () => {
    props['data-testId'] = 'id-Text';
    props.children = "harvey was here";
    props.align = 'left';
    const { getByTestId } = renderComponent();
    expectText(getByTestId, props);
  });

  it("should render text component align center", () => {
    props['data-testId'] = 'id-Text';
    props.children = "harvey was here";
    props.align = 'center';

    const { getByTestId } = renderComponent();
    expectText(getByTestId, props);
  });

  it("should render text component align right", () => {
    props['data-testId'] = 'id-Text';
    props.children = "harvey was here";
    props.align = 'right';

    const { getByTestId } = renderComponent();
    expectText(getByTestId, props);
  });

  it("should render text component align justify", () => {
    props['data-testId'] = 'id-Text';
    props.children = "harvey was here";
    props.align = 'justify';

    const { getByTestId } = renderComponent();
    expectText(getByTestId, props);
  });
});
