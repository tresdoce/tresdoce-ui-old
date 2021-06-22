import * as React from "react";
import { render } from "@testing-library/react";
import { createTheme } from '@tresdoce-ui/brand';
import Layout from '../Layout';

import Grid from "./Grid";
import { GridProps } from "./Grid.types";
import Col from './Col';

describe("Component - Grid", () => {
  let props: GridProps;

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

  const renderComponent = () => render(<Layout theme={createTheme()} cdnBasepath={''}><Grid {...props} /></Layout>);
  const updateComponent = (renderer, props) => renderer(<Layout theme={createTheme()} cdnBasepath={''}><Grid {...props} /></Layout>);

  it('Should has a correct displayName', () =>{
    expect(Grid.displayName).toEqual('@tresdoce-ui/core/Grid');
  });

  it('Should be justify content', () => {
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

  it('Should be align content', () => {
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


});
