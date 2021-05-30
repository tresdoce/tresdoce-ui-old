import * as React from 'react';
import { render } from '@testing-library/react';
import { createTheme } from '../../../../brand/src';
import Layout from '../Layout';

import Text from './Text';
import { TextProps } from './Text.types';

describe('Component - Text', () => {
  let props: TextProps;

  beforeEach(() => {
    props = {
      'className': '',
      'color': '',
      'size': '',
      'align': '',
      'fontStyle': '',
      'weight': '',
      'capitalize': '',
      'children': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    };
  });

  const renderComponent = () => render(<Layout theme={createTheme()} cdnBasepath={''}><Text {...props} /></Layout>);
  const updateComponent = (rerender, props) => rerender(<Layout theme={createTheme()} cdnBasepath={''}><Text {...props} /></Layout>);

  it('Should be render text component', () => {
    props['data-testId'] = 'id-test-text-component';

    const { getByTestId } = renderComponent();
    expect(getByTestId).not.toBeNull();
    const component = getByTestId(props['data-testId']);
    expect(component.tagName).toEqual('P');
    expect(component).toHaveTextContent(props.children);
    expect(component).toHaveStyle(`text-align: left`);
    expect(component).toHaveStyle(`font-style: normal`);
    expect(component).toHaveStyle(`font-weight: normal`);
    expect(component).toHaveStyle(`text-transform: initial`);
  });

  it('Should be render text component align left, center, right and justify', () => {
    props['data-testId'] = 'id-test-text-component';
    props.align = 'left';

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`text-align: ${props.align}`);

    props.align = 'center';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`text-align: ${props.align}`);

    props.align = 'right';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`text-align: ${props.align}`);

    props.align = 'justify';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`text-align: ${props.align}`);
  });

  it('Should be render text component with different color', () => {
    props['data-testId'] = 'id-test-text-component';
    props.color = '#1B1C1D';

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`color: ${props.color}`);

    props.color = '#34354A';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`color: ${props.color}`);
  });

  it('Should be render text component with different size', () => {
    props['data-testId'] = 'id-test-text-component';
    props.size = '0.875rem';

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`font-size: ${props.size}`);

    props.size = '16px';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`font-size: ${props.size}`);
  });

  it('Should be render text component with different font style', () => {
    props['data-testId'] = 'id-test-text-component';
    props.fontStyle = 'initial';

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`font-style: ${props.fontStyle}`);

    props.fontStyle = 'normal';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`font-style: ${props.fontStyle}`);

    props.fontStyle = 'italic';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`font-style: ${props.fontStyle}`);
  });

  it('Should be render text component with different font weight', () => {
    props['data-testId'] = 'id-test-text-component';
    props.weight = 'normal';

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`font-weight: ${props.weight}`);

    props.weight = 'thin';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`font-weight: 100`);

    props.weight = 'light';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`font-weight: 300`);

    props.weight = 'regular';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`font-weight: 400`);

    props.weight = 'medium';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`font-weight: 500`);

    props.weight = 'bold';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`font-weight: 700`);

    props.weight = 'black';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`font-weight: 900`);
  });

  it('Should be render text component with different capitalize', () => {
    props['data-testId'] = 'id-test-text-component';
    props.capitalize = 'initial';

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`text-transform: ${props.capitalize}`);

    props.capitalize = 'capitalize';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`text-transform: ${props.capitalize}`);

    props.capitalize = 'lowercase';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`text-transform: ${props.capitalize}`);

    props.capitalize = 'uppercase';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`text-transform: ${props.capitalize}`);

    props.capitalize = 'first-letter';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`text-transform: ${props.capitalize}`);
  });

});
