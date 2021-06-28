import React, {createContext, useContext} from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { createTheme } from '@tresdoce-ui/brand';

//import { createTheme } from '../../../../brand/src'; //themes

export interface ThemeProps {
  theme?: any;
  cdnBasepath?: string;
}

export const ThemeContext = createContext<ThemeProps>({
  theme: createTheme(),
  cdnBasepath: '',
});

export const useTheme = () => useContext(ThemeContext);

export const withTheme = (WrappedComponent: any) => {
  const ThemeableComponent = (props: any) => (
    <ThemeContext.Consumer>
      {context => <WrappedComponent {...props} {...context} />}
    </ThemeContext.Consumer>
  );

  ThemeableComponent.displayName = WrappedComponent.displayName;

  return hoistNonReactStatics(ThemeableComponent, WrappedComponent);
};
