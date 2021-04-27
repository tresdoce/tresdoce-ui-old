import * as React from 'react';
import filterProps from '../../utils/filter-props';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../Theme';
import { LayoutProps } from './Layout.types';

import Baseline from '../Baseline';

export const Layout: React.FC<LayoutProps> = ({
  cdnBasepath,
  containerFluid = false,
  children,
  theme,
  ...rest
}) => {
  const filteredProps = filterProps(rest);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        cdnBasepath,
      }}
    >
      {{/*console.log('CORE Layout: ', theme)*/}}
      <ThemeProvider theme={theme}>
        <div className={containerFluid ? 'container-fluid' : 'container'} {...filteredProps}>{children}</div>
        <Baseline />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

Layout.displayName = 'Layout';

export default Layout;
