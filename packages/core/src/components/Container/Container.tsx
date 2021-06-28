import React, {createElement} from 'react';
import filterProps from '../../utils/filter-props';
import clsx from 'clsx';
import { withTheme } from '../Theme';
import { ContainerProps } from './Container.types';
import { ContainerStyle } from './styles';

const Container: React.FC<ContainerProps> = ({
 className,
 children,
 row = false,
 fluid = false,
 size = 'md',
 ...rest
}) => {
  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class': false,
    [className]: !!className,
  });

  return createElement(ContainerStyle, {
      'className': classes,
      row,
      fluid,
      size,
      ...filteredProps,
    },
    children,
  );
};

Container.displayName = '@tresdoce-ui/core/Container';

export default withTheme(Container);
