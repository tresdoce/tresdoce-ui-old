import * as React from 'react';
import { render } from '@testing-library/react';
import { createTheme, getSizeValue } from '@tresdoce-ui/brand';
import Layout from '../Layout';

import Container from './Container';
import { ContainerProps } from './Container.types';

describe('Component - Container', () => {
  let props: ContainerProps;
  const theme = createTheme();

  const getSpacing = (theme, gutter = 'md') =>
    getSizeValue({ size: gutter, sizes: theme.grid.spacing.gutter });

  beforeEach(() => {
    props = {
      className: '',
      children: 'This is a content',
      row: false,
      fluid: false,
      size: 'md',
    };
    props['data-testId'] = 'id-test-container-component';
  });

  const renderComponent = () =>
    render(
      <Layout theme={theme} cdnBasepath={''}>
        <Container {...props} />
      </Layout>
    );
  const updateComponent = (renderer, props) =>
    renderer(
      <Layout theme={theme} cdnBasepath={''}>
        <Container {...props} />
      </Layout>
    );

  it('Should has a correct displayName', () => {
    expect(Container.displayName).toEqual('@tresdoce-ui/core/Container');
  });

  it('Should be render Container component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId).not.toBeNull();
    const component = getByTestId(props['data-testId']);
    expect(component.tagName).toEqual(`DIV`);
    expect(component.firstChild.textContent).toEqual(props.children);
  });

  it('Should be render Container component fluid and not fluid', () => {
    props['fluid'] = false;

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`width: 100%`);
    expect(component).toHaveStyle(`max-width: ${theme.sizing.mqSizes[props.size].maxWidth}`);

    props['fluid'] = true;
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`width: auto`);
    expect(component).toHaveStyle(`max-width: 100%`);
  });

  it('Should be render Container component with different max width', () => {
    props['fluid'] = false;
    props['size'] = 'md';

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`width: 100%`);
    expect(component).toHaveStyle(`max-width: ${theme.sizing.mqSizes[props.size].maxWidth}`);
    expect(component).toHaveStyle(`padding: 0 ${getSpacing(theme, props.size)}px`);

    props['size'] = 'xs';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`width: 100%`);
    expect(component).toHaveStyle(`max-width: ${theme.sizing.mqSizes[props.size].maxWidth}`);
    expect(component).toHaveStyle(`padding: 0 ${getSpacing(theme, props.size)}px`);

    props['size'] = 'sm';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`width: 100%`);
    expect(component).toHaveStyle(`max-width: ${theme.sizing.mqSizes[props.size].maxWidth}`);
    expect(component).toHaveStyle(`padding: 0 ${getSpacing(theme, props.size)}px`);

    props['size'] = 'lg';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`width: 100%`);
    expect(component).toHaveStyle(`max-width: ${theme.sizing.mqSizes[props.size].maxWidth}`);
    expect(component).toHaveStyle(`padding: 0 ${getSpacing(theme, props.size)}px`);

    props['size'] = 'xl';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`width: 100%`);
    expect(component).toHaveStyle(`max-width: ${theme.sizing.mqSizes[props.size].maxWidth}`);
    expect(component).toHaveStyle(`padding: 0 ${getSpacing(theme, props.size)}px`);

    props['size'] = 'xxl';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`width: 100%`);
    expect(component).toHaveStyle(`max-width: ${theme.sizing.mqSizes[props.size].maxWidth}`);
    expect(component).toHaveStyle(`padding: 0 ${getSpacing(theme, props.size)}px`);
  });

  it('Should be render Container component with row and without row', () => {
    props['row'] = false;

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`padding: 0 ${getSpacing(theme, props.size)}px`);

    props['row'] = true;
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`padding: 0 0`);
  });

  it('Should be render Container component fluid with row', () => {
    props['fluid'] = true;
    props['row'] = true;

    const { getByTestId } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`width: auto`);
    expect(component).toHaveStyle(`max-width: 100%`);
    expect(component).toHaveStyle(`padding: 0 0`);
  });
});
