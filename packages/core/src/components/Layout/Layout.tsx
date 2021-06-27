import * as React from 'react';
import filterProps from '../../utils/filter-props';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../Theme';
import { LayoutProps } from './Layout.types';

import Baseline from '../Baseline';
import Container from '../Container';

const Layout: React.FC<LayoutProps> = ({
  cdnBasepath,
  containerFluid = false,
  row= false,
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
      {console.log('CORE Layout: ', theme)}
      <ThemeProvider theme={theme}>
        <div className='wrapper'>
          <div className='main-content'>
            <Container fluid={containerFluid} row={row} style={{border: '1px solid black'}} {...filteredProps}>{children}</Container>
          </div>
        </div>
        <Baseline />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};


Layout.displayName = '@tresdoce-ui/core/Layout';

export default Layout;
