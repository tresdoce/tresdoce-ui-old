import * as React from 'react';
import filterProps from '../../utils/filter-props';
import clsx from 'clsx';
import { useTheme, withTheme } from '../Theme';
import { ColProps } from './Col.types';
import { ColStyle } from './styles';
import { getSizeValue } from '@tresdoce-ui/brand';

export function isValidSpan(span: number) {
  return typeof span === 'number' && span > 0 && span % 1 === 0;
}

const Col: React.FC<ColProps> = ({
  className,
  span,
  columns,
  offset = 0,
  gutter,
  grow,
  children,
  style,
  ...rest
}) => {
  const theme = useTheme().theme;
  const spacing = getSizeValue({ size: gutter, sizes: theme.grid.spacing.gutter });
  let styles;
  if (!isValidSpan(span) || span > columns) {
    return null;
  }

  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class': false,
    [className]: !!className,
  });

  if (isValidSpan(offset)) {
    styles = {
      //marginLeft : `calc(${100 / (columns / offset)}% + ${spacing / 2}px)`,
      marginLeft : `${100 / (columns / offset)}%`,
    }
  }

  return React.createElement(ColStyle, {
      'className': classes,
      ...filteredProps,
      span,
      columns,
      offset,
      gutter,
      grow,
      spacing,
      style: { ...style, ...styles },
    },
    children
  );
};

Col.displayName = '@tresdoce-ui/core/Col';

export default withTheme(Col);
