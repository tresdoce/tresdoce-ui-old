import * as React from 'react';
import { render } from '@testing-library/react';
import { createTheme } from '../../../../brand/src';

import Layout from './Layout';
import { LayoutProps } from './Layout.types';

describe('Test Layout', () => {
  let props: LayoutProps;

  beforeEach(() => {
    props = {
      cdnBasepath: '',
      theme: createTheme({}),
      containerFluid: false
    };
  });

  const renderComponent = () => render(<Layout {...props} />);

  it('should render container', async () => {
    const { container } = renderComponent();

    expect(container).not.toBeNull();
  });

  it('should render container-fluid', async () => {
    props.containerFluid = true;

    const { container } = renderComponent();

    expect(container).not.toBeNull();
    expect(container.firstChild).toHaveClass('container-fluid');
  });
});
