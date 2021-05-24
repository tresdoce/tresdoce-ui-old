import * as React from 'react';
import { render } from '@testing-library/react';

import Baseline from './Baseline';
import {BaselineProps} from './Baseline.types'

describe('Test Baseline', () => {
  let props: BaselineProps;

  beforeEach(() => {
    props = {
      cdnBasepath: ''
    };
  });

  const renderComponent = () => render(<Baseline {...props} />);

  it('should render', async () => {
    const { container } = renderComponent();
    expect(container).not.toBeNull();
  });
});
