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
  const updateComponent = (renderer, props) => renderer(<Layout theme={createTheme()} cdnBasepath={''}><Text {...props} /></Layout>);

  it('Should be render component text', () => {
    props['data-testId'] = 'id-test-component-text';

    const { getByTestId } = renderComponent();
    expect(getByTestId).not.toBeNull();
    const component = getByTestId(props['data-testId']);
    expect(component.tagName).toEqual('P');
    expect(component).toHaveTextContent(props.children);
  });

  it('Should be render component text align left, center, right and justify', () => {
    props['data-testId'] = 'id-test-component-text';
    props.align = 'left';

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`text-align: ${props.align}`);

    props.align = 'center';
    updateComponent(rerender,props);
    expect(component).toHaveStyle(`text-align: ${props.align}`);

    props.align = 'right';
    updateComponent(rerender,props);
    expect(component).toHaveStyle(`text-align: ${props.align}`);

    props.align = 'justify';
    updateComponent(rerender,props);
    expect(component).toHaveStyle(`text-align: ${props.align}`);
  });

});
