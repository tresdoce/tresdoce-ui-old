import * as React from 'react';
import { render } from '@testing-library/react';
import { createTheme, getSizeValue } from '@tresdoce-ui/brand';
import Layout from '../Layout';

import Col, { isValidSpan } from './Col';
import { ColProps } from './Col.types';

describe('Component - Col', () => {
  let props: ColProps;
  const theme = createTheme();
  const getSpacing = (theme, gutter: string | number = 'md') =>
    getSizeValue({ size: gutter, sizes: theme.grid.spacing.gutter });

  beforeEach(() => {
    props = {
      children: 'Test content',
      span: 0,
      columns: 12,
      grow: false,
      offset: 0,
      gutter: 'md',
      style: {},
    };
    props['data-testId'] = 'id-test-Col-component';
  });

  const renderComponent = () =>
    render(
      <Layout theme={theme} cdnBasepath={''}>
        <Col {...props} />
      </Layout>
    );
  const updateComponent = (renderer, props) =>
    renderer(
      <Layout theme={theme} cdnBasepath={''}>
        <Col {...props} />
      </Layout>
    );

  it('Should has a correct displayName', () => {
    expect(Col.displayName).toEqual('@tresdoce-ui/core/Col');
  });

  it('Should be correctly detects invalid spans', () => {
    expect(isValidSpan(2)).toBe(true);
    expect(isValidSpan(1.2)).toBe(false);
    expect(isValidSpan(-1.2)).toBe(false);
    expect(isValidSpan(-4)).toBe(false);
    expect(isValidSpan(0)).toBe(false);
  });

  it('Should be does not render column component if span prop set incorrectly', () => {
    props['children'] = 'Test content';
    props['span'] = 1.2;

    const { queryByTestId, rerender } = renderComponent();
    expect(queryByTestId).not.toBeNull();
    let component = queryByTestId(props['data-testId']);
    expect(component).toBe(null);

    props['span'] = 0;
    updateComponent(rerender, props);
    expect(queryByTestId).not.toBeNull();
    component = queryByTestId(props['data-testId']);
    expect(component).toBe(null);

    props['span'] = -4;
    updateComponent(rerender, props);
    expect(queryByTestId).not.toBeNull();
    component = queryByTestId(props['data-testId']);
    expect(component).toBe(null);

    props['span'] = 500;
    updateComponent(rerender, props);
    expect(queryByTestId).not.toBeNull();
    component = queryByTestId(props['data-testId']);
    expect(component).toBe(null);

    props['span'] = 2;
    updateComponent(rerender, props);
    expect(queryByTestId).not.toBeNull();
    component = queryByTestId(props['data-testId']);
    expect(component).not.toBe(null);
    expect(component.tagName).toBe('DIV');
  });

  it('Should be sets correct flex-grow based on grow prop', () => {
    props['grow'] = false;
    props['columns'] = 12;
    props['span'] = 2;
    props['children'] = 'Test content';
    const width = `${100 / (props.columns / props.span)}%`;

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`flex:0 0 auto`);
    expect(component).toHaveStyle(`width: ${width}`);

    props['grow'] = true;
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`flex:1 0 auto`);
    expect(component).toHaveStyle(`width: ${width}`);
  });

  it('Should be sets correct flex-basis based on columns, span and gutter props', () => {
    props['columns'] = 10;
    props['gutter'] = 40;
    props['span'] = 2;
    props['grow'] = false;
    props['children'] = 'Test content';
    const width = `${100 / (props.columns / props.span)}%`;

    const { getByTestId } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`flex:0 0 auto`);
    expect(component).toHaveStyle(`width: ${width}`);
  });

  it('Should be sets correct margin based on gutter', () => {
    props['gutter'] = 40;
    props['span'] = 2;
    props['children'] = 'Test content';
    const spacing = getSpacing(theme, props['gutter']);

    const { getByTestId } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`padding: 0 ${spacing}px`);
  });

  it('Should be sets margin-left based on offset prop', () => {
    props['gutter'] = 40;
    props['columns'] = 10;
    props['span'] = 2;
    props['offset'] = 2;
    props['children'] = 'Test content';
    const marginLeft = `${100 / (props.columns / props.offset)}%`;

    const { getByTestId } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`margin-left: ${marginLeft}`);
  });
});
