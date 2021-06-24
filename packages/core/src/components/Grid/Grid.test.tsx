import * as React from "react";
import { render } from "@testing-library/react";
import { createTheme, getSizeValue } from '@tresdoce-ui/brand';
import Layout from '../Layout';

import Grid from "./Grid";
import { GridProps } from "./Grid.types";
import Col from './Col';

describe("Component - Grid", () => {
  let props: GridProps;
  const theme = createTheme();

  const getSpacing = (theme,gutter = 'md') => getSizeValue({ size: gutter, sizes: theme.grid.spacing.gutter });

  beforeEach(() => {
    props = {
      children: '',
      gutter: 'md',
      grow: false,
      row: false,
      columns: 12,
      justify: 'flex-start',
      align:'stretch',
      style: {}
    };
  });

  const renderComponent = () => render(<Layout theme={theme} cdnBasepath={''}><Grid {...props} /></Layout>);
  const updateComponent = (renderer, props) => renderer(<Layout theme={theme} cdnBasepath={''}><Grid {...props} /></Layout>);

  it('Should has a correct displayName', () =>{
    expect(Grid.displayName).toEqual('@tresdoce-ui/core/Grid');
  });

  it('Should be render justify content', () => {
    props['justify'] = 'flex-start';
    props['data-testId'] = 'id-test-grid';
    props['children'] = <Col span={6}>Test content</Col>

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`justify-content: ${props['justify']}`);

    props['justify'] = 'flex-end';
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`justify-content: ${props['justify']}`);

    props['justify'] = 'center';
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`justify-content: ${props['justify']}`);

    props['justify'] = 'space-around';
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`justify-content: ${props['justify']}`);

    props['justify'] = 'space-between';
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`justify-content: ${props['justify']}`);

    props['justify'] = 'space-evenly';
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`justify-content: ${props['justify']}`);

    props['justify'] = 'initial';
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`justify-content: ${props['justify']}`);
  });

  it('Should be render align content', () => {
    props['align'] = 'stretch';
    props['data-testId'] = 'id-test-grid';
    props['children'] = <Col span={6}>Test content</Col>

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`align-items: ${props['align']}`);

    props['align'] = 'baseline';
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`align-items: ${props['align']}`);

    props['align'] = 'center';
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`align-items: ${props['align']}`);

    props['align'] = 'flex-start';
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`align-items: ${props['align']}`);

    props['align'] = 'flex-end';
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`align-items: ${props['align']}`);

    props['align'] = 'initial';
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`align-items: ${props['align']}`);
  });

  it("Should be render grid with different gutters prop", () => {
    let spacing;
    props['gutter'] = "md";
    props['data-testId'] = 'id-test-grid';
    props['children'] = <Col span={6}>Test content</Col>
    spacing =  getSpacing(theme,props['gutter']);

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component.firstChild).toHaveStyle(`padding: 0 ${spacing}px`);

    props['gutter'] = "xs";
    spacing =  getSpacing(theme,props['gutter']);
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component.firstChild).toHaveStyle(`padding: 0 ${spacing}px`);

    props['gutter'] = "sm";
    spacing =  getSpacing(theme,props['gutter']);
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component.firstChild).toHaveStyle(`padding: 0 ${spacing}px`);

    props['gutter'] = "lg";
    spacing =  getSpacing(theme,props['gutter']);
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component.firstChild).toHaveStyle(`padding: 0 ${spacing}px`);

    props['gutter'] = "xl";
    spacing =  getSpacing(theme,props['gutter']);
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component.firstChild).toHaveStyle(`padding: 0 ${spacing}px`);

    props['gutter'] = "xxl";
    spacing =  getSpacing(theme,props['gutter']);
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component.firstChild).toHaveStyle(`padding: 0 ${spacing}px`);
  });

  it('Should be render grid with row prop true and false', () => {
    props['row'] = true;
    props['data-testId'] = 'id-test-grid';
    props['children'] = <Col span={6}>Test content</Col>
    let spacing =  getSpacing(theme,'md');

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`margin: 0 -${spacing}px`);

    props['row'] = false;
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`margin: 0 0`);
  });
});
