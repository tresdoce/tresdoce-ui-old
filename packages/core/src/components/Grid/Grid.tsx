import React, { Children, cloneElement, createElement, ReactElement } from 'react';
import filterProps from '../../utils/filter-props';
import clsx from 'clsx';
import { withTheme, useTheme } from '../Theme';
import { getSizeValue } from '@tresdoce-ui/brand';
import { GridProps } from './Grid.types';
import { GridStyle } from './styles';

const Grid: React.FC<GridProps> = ({
  className,
  children,
  gutter = 'md',
  grow = false,
  row = false,
  columns = 12,
  justify = 'flex-start',
  align = 'stretch',
  style,
  ...rest
}) => {
  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class': false,
    [className]: !!className,
  });
  const { theme } = useTheme();
  const spacing = getSizeValue({ size: gutter, sizes: theme.grid.spacing.gutter });

  const cols = (Children.toArray(children) as ReactElement[]).map((col, index) =>
    cloneElement(col, { gutter, grow, columns, key: index })
  );

  return createElement(
    GridStyle,
    {
      className: classes,
      gutter,
      grow,
      row,
      columns,
      justify,
      align,
      style,
      spacing,
      ...filteredProps,
    },
    cols
  );
};

Grid.displayName = 'Grid';

export default withTheme(Grid);
