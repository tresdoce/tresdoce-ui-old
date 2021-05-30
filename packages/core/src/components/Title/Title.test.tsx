import * as React from "react";
import { render } from "@testing-library/react";

import { createTheme } from '../../../../brand/src';
import Layout from '../Layout';

import Title from "./Title";
import { TitleProps } from "./Title.types";

describe("Component - Title", () => {
  let props: TitleProps;

  beforeEach(() => {
    props = {
      'className':'',
      'level': 1,
      'color':'',
      'size':'',
      'align': '',
      'fontStyle':'',
      'weight':'',
      'capitalize':'',
      'children': 'This is a heading'
    };
  });

  const renderComponent = () => render(<Layout theme={createTheme()} cdnBasepath={''}><Title {...props} /></Layout>);

  const expectHeading = (getByTestId, props) => {
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveTextContent(props.children);
    expect(component.tagName).toEqual(`H${props.level}`);
    expect(component).toHaveStyle(`text-align: ${props.align}`);
  }

  it("should render h1 heading", () => {
    props.level = 1;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'left';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h1 heading with align center", () => {
    props.level = 1;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'center';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h1 heading with align right", () => {
    props.level = 1;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'right';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h1 heading with align justify", () => {
    props.level = 1;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'justify';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h2 heading", () => {
    props.level = 2;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'left';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h2 heading with align center", () => {
    props.level = 2;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'center';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h2 heading with align right", () => {
    props.level = 2;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'right';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h2 heading with align justify", () => {
    props.level = 2;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'justify';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h3 heading", () => {
    props.level = 3;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'left';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h3 heading with align center", () => {
    props.level = 3;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'center';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h3 heading with align right", () => {
    props.level = 3;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'right';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h3 heading with align justify", () => {
    props.level = 3;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'justify';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h4 heading", () => {
    props.level = 4;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'left';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h4 heading with align center", () => {
    props.level = 4;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'center';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h4 heading with align right", () => {
    props.level = 4;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'right';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h4 heading with align justify", () => {
    props.level = 4;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'justify';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h5 heading", () => {
    props.level = 5;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'left';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h5 heading with align center", () => {
    props.level = 5;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'center';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h5 heading with align right", () => {
    props.level = 5;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'right';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h5 heading with align justify", () => {
    props.level = 5;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'justify';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h6 heading", () => {
    props.level = 6;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'left';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h6 heading with align center", () => {
    props.level = 6;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'center';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h6 heading with align right", () => {
    props.level = 6;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'right';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

  it("should render h6 heading with align justify", () => {
    props.level = 6;
    props['data-testId'] = 'id-Title';
    props.children = `This is a h${props.level} heading`;
    props.align = 'justify';

    const { getByTestId } = renderComponent();
    expectHeading(getByTestId, props);
  });

});
