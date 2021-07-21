import * as React from 'react';
import { render } from '@testing-library/react';

import { NormalizeCSS } from './NormalizeCSS';

describe('Component - NormalizeCSS', () => {

  const renderComponent = () => render(<NormalizeCSS/>);

  it('should render', async () => {
    const { container } = renderComponent();
    expect(container).not.toBeNull();
  });
});
