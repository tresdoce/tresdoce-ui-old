import React from 'react';
import { ThemeContext } from '../Theme';


export interface LayoutProps {
  theme: any;
  children?: any;
  cdnBasepath: any;
  container?: boolean;
  resetStyles?: boolean;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
 cdnBasepath,
 container,
 children,
 theme,
}) => (
  <ThemeContext.Provider
    value={{
      theme,
      cdnBasepath,
    }}
  >
    {!container && children}
    {container && <div className='container-fluid'>{children}</div>}

  </ThemeContext.Provider>
);

Layout.displayName = 'Layout';

export default Layout;
