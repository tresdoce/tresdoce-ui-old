import * as React from "react";
import { render } from "@testing-library/react";

import { createTheme } from '../../../../brand/src';
import Layout from '../Layout';

import Title from "./Title";
import { TitleProps } from "./Title.types";

describe("Test Title", () => {
  let props: TitleProps;

  beforeEach(() => {
    props = {
      'level': 1,
      'children': 'This is a heading',
    };
  });

  const renderComponent = () => render(<Layout theme={createTheme()} cdnBasepath={''}><Title {...props} /></Layout>);

  it("should render h1 heading", () => {
    props.level = 1;
    props['data-testId'] = 'id-Title';
    props.children = "This is a h1 heading";

    const { getByTestId } = renderComponent();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveTextContent(props.children);
    expect(component.tagName).toEqual('H1');
  });

  it("should render h2 heading", () => {
    props.level = 2;
    props['data-testId'] = 'id-Title';
    props.children = "This is a h2 heading";

    const { getByTestId } = renderComponent();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveTextContent(props.children);
    expect(component.tagName).toEqual('H2');
  });

  it("should render h3 heading", () => {
    props.level = 3;
    props['data-testId'] = 'id-Title';
    props.children = "This is a h3 heading";

    const { getByTestId } = renderComponent();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveTextContent(props.children);
    expect(component.tagName).toEqual('H3');
  });

  it("should render h4 heading", () => {
    props.level = 4;
    props['data-testId'] = 'id-Title';
    props.children = "This is a h4 heading";

    const { getByTestId } = renderComponent();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveTextContent(props.children);
    expect(component.tagName).toEqual('H4');
  });

  it("should render h5 heading", () => {
    props.level = 5;
    props['data-testId'] = 'id-Title';
    props.children = "This is a h5 heading";

    const { getByTestId } = renderComponent();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveTextContent(props.children);
    expect(component.tagName).toEqual('H5');
  });

  it("should render h6 heading", () => {
    props.level = 6;
    props['data-testId'] = 'id-Title';
    props.children = "This is a h6 heading";

    const { getByTestId } = renderComponent();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveTextContent(props.children);
    expect(component.tagName).toEqual('H6');
  });

});
