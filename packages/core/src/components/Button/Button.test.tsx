import * as React from 'react';
import { render } from '@testing-library/react';

import { createTheme } from '../../../../brand/src';
import Layout from '../Layout';

import Button from './Button';
import { ButtonProps } from './Button.types';

describe('Component - Button', () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      foo: 'bar',
      onClick: () => alert('click'),
    };
  });

  const renderComponent = () => render(<Layout theme={createTheme()} cdnBasepath={''}><Button {...props} /></Layout>);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    props['data-testId'] = 'id-Button';

    const { getByTestId } = renderComponent();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveTextContent(props.foo);
  });
});
