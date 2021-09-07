import * as React from 'react';
import { render } from '@testing-library/react';

import { createTheme } from '@tresdoce-ui/brand';
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
    props['data-testId'] = 'id-Button';
  });

  const renderComponent = () =>
    render(
      <Layout theme={createTheme()} cdnBasepath={''}>
        <Button {...props} />
      </Layout>
    );

  it('Should has a correct displayName', () => {
    expect(Button.displayName).toEqual('Button');
  });

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';

    const { getByTestId } = renderComponent();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveTextContent(props.foo);
  });
});
