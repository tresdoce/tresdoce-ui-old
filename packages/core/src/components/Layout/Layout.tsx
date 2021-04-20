import * as React from 'react';
import { ThemeContext } from '../Theme';
import Baseline from '../Baseline';


export interface LayoutProps {
  theme: any;
  children?: any;
  cdnBasepath: any;
  container?: boolean;
  resetStyles?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
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
    {console.log('CORE Layout: ', theme)}
    {!container && children}
    {container && <div className='container-fluid'>{children}</div>}
    <Baseline />
  </ThemeContext.Provider>
);

Layout.displayName = 'Layout';

export default Layout;
