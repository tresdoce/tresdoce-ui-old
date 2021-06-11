import * as React from 'react';
import filterProps from '../../utils/filter-props';
import clsx from 'clsx';
import { withTheme, useTheme } from '../Theme';
import { getSizeValue } from '@tresdoce-ui/brand';
import { GridProps } from './Grid.types';
import { GridStyle } from './styles';

const Grid: React.FC<GridProps> = ({
  className,
  children,
  gutter = "md",
  grow = false,
  columns = 12,
  justify = 'flex-start',
  align = 'stretch',
  ...rest
}) => {
  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class': false,
    [className]: !!className,
  });
  const theme = useTheme().theme;
  const spacing = getSizeValue({ size: gutter, sizes: theme.grid.spacing.gutter });

  const cols = (React.Children.toArray(children) as React.ReactElement[]).map((col, index) =>
    React.cloneElement(col, { gutter, grow, columns, key: index }),
  );

  return React.createElement(GridStyle, {
      'className': classes,
      gutter,
      grow,
      columns,
      justify,
      align,
      spacing,
      ...filteredProps,
    },
    cols,
  );

};

Grid.displayName = '@tresdoce-ui/core/Grid';

export default withTheme(Grid);
