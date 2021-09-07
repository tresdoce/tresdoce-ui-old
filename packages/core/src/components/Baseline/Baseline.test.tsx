import * as React from 'react';
import { render } from '@testing-library/react';

import { createTheme } from '@tresdoce-ui/brand';
import Layout from '../Layout';

import Baseline from './Baseline';
import { BaselineProps } from './Baseline.types';

describe('Component - Baseline', () => {
  let props: BaselineProps;

  beforeEach(() => {
    props = {
      cdnBasepath: '',
    };
  });

  const renderComponent = () =>
    render(
      <Layout theme={createTheme()} cdnBasepath={''}>
        <Baseline {...props} />
      </Layout>
    );

  it('Should has a correct displayName', () => {
    expect(Baseline.displayName).toEqual('Baseline');
  });

  it('should render', async () => {
    const { container } = renderComponent();
    expect(container).not.toBeNull();
  });
});
