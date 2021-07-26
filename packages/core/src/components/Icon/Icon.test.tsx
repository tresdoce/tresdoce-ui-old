import * as React from 'react';
import { render } from "@testing-library/react";
import { createTheme } from '@tresdoce-ui/brand';
import Layout from '../Layout';

import Icon from './Icon';
import { IconProps } from './Icon.types';

describe('Component - Icon', () => {
  let props: IconProps;
  const theme = createTheme();

  beforeEach(() => {
    props = {
      name: 'activity',
      width: 24,
      height: 24,
      fill: 'none',
      strokeColor: '#000',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    };
    props['data-testId'] = "id-test-Icon-component";
  });

  const renderComponent = () => render(<Layout theme={theme} cdnBasepath={''}><Icon {...props} /></Layout>);
  const updateComponent = (renderer, props) => renderer(<Layout theme={theme} cdnBasepath={''}><Icon {...props} /></Layout>);

  it('Should has a correct displayName', () => {
    expect(Icon.displayName).toEqual('@tresdoce-ui/core/Icon');
  });

  it('Should be render a icon component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId).not.toBeNull();
    const component = getByTestId(props['data-testId']).firstElementChild;
    expect(component.tagName).toEqual(`svg`);
    expect(component).toHaveAttribute('data-name', `icon-${props.name}`);
    expect(component.getAttribute('width')).toBe( `${props.width}`);
    expect(component.getAttribute('height')).toBe( `${props.height}`);
    expect(component.getAttribute('fill')).toBe( `${props.fill}`);
    expect(component.getAttribute('stroke')).toBe( `${props.strokeColor}`);
    expect(component.getAttribute('stroke-width')).toBe(`${props.strokeWidth}`);
    expect(component.getAttribute('stroke-linecap')).toBe(`${props.strokeLinecap}`);
    expect(component.getAttribute('stroke-linejoin')).toBe( `${props.strokeLinejoin}`);
  });

  it('Should be dont return component when icon dont exist', () => {
    props.name = 'activityy';
    const { queryByTestId } = renderComponent();

    const component = queryByTestId(props['data-testId']);
    expect(component).toBeNull();
  });

  it('Should be render a icon component with different size', () => {
    props.width = 24;
    props.height = 24;

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']).firstElementChild;
    expect(component.getAttribute('width')).toBe( `${props.width}`);
    expect(component.getAttribute('height')).toBe( `${props.height}`);

    props.width = 30;
    props.height = 30;
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']).firstElementChild;
    expect(component.getAttribute('width')).toBe( `${props.width}`);
    expect(component.getAttribute('height')).toBe( `${props.height}`);
  });

  it('Should be render a icon component with different icon', () => {
    props.name = 'activity';

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']).firstElementChild;
    expect(component).toHaveAttribute('data-name', `icon-${props.name}`);

    props.name = 'x';
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']).firstElementChild;
    expect(component).toHaveAttribute('data-name', `icon-${props.name}`);
  });

});

