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

  it("should render text correctly", () => {
    props.level = 1;
    props['data-testid'] = 'id-Title';
    props.children = "This is a heading";
    const { getByTestId } = renderComponent();
    const component = getByTestId("id-Title");
    expect(component).toHaveTextContent("This is a heading");
  });
});
