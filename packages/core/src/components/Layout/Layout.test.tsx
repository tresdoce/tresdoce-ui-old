import * as React from 'react';
import { render } from '@testing-library/react';
import { createTheme } from '@tresdoce-ui/brand';

import Layout from './Layout';
import { LayoutProps } from './Layout.types';

describe('Test Layout', () => {
  let props: LayoutProps;

  beforeEach(() => {
    props = {
      cdnBasepath: '',
      theme: createTheme(),
    };
  });

  const renderComponent = () => render(<Layout {...props} />);

  it('should render', async () => {
    const { container } = renderComponent();

    expect(container).not.toBeNull();
  });
});
