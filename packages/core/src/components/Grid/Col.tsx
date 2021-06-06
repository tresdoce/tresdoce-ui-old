import * as React from 'react';
import filterProps from '../../utils/filter-props';
import clsx from 'clsx';
import { withTheme } from '../Theme';
import { ColProps } from './Col.types';
import { ColStyle } from './styles';

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
  ...rest
}) => {

  if (!isValidSpan(span) || span > columns) {
    return null;
  }

  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class': false,
    [className]: !!className,
  });

  return React.createElement(ColStyle, {
      'className': classes,
      span,
      columns,
      offset,
      gutter,
      grow,
      ...filteredProps,
    },
    children
  );
};

Col.displayName = '@tresdoce-ui/core/Col';

export default withTheme(Col);
