import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { createTheme } from '@tresdoce-ui/brand';
import Layout from '../components/Layout';

const AllTheProviders: FC = ({ children }) => {
  const theme = createTheme();
  const cdnBasepath = '';
  return (
    <Layout theme={theme} cdnBasepath={cdnBasepath}>
      {children}
    </Layout>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
