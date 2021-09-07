import * as React from 'react';
import { render } from '@testing-library/react';
import { createTheme } from '@tresdoce-ui/brand';

import Layout from './Layout';
import { LayoutProps } from './Layout.types';

describe('Component - Layout', () => {
  let props: LayoutProps;

  beforeEach(() => {
    props = {
      cdnBasepath: '',
      theme: createTheme(),
      containerFluid: false,
    };
  });

  const renderComponent = () => render(<Layout {...props} />);

  it('Should has a correct displayName', () => {
    expect(Layout.displayName).toEqual('Layout');
  });

  it('should render container', async () => {
    const { container } = renderComponent();
    expect(container).not.toBeNull();
  });

  it('should render container-fluid', async () => {
    props.containerFluid = true;
    const { container } = renderComponent();
    expect(container).not.toBeNull();
    expect(container.firstChild.firstChild.firstChild).toHaveStyle(`width: auto`);
    expect(container.firstChild.firstChild.firstChild).toHaveStyle(`max-width: 100%`);
  });
});
