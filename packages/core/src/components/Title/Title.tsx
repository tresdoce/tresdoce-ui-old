import React, { createElement } from 'react';
import filterProps from '../../utils/filter-props';
import clsx from 'clsx';
import { withTheme } from '../Theme';
import { TitleProps } from './Title.types';
import * as headingStyles from './styles';

const headingLevels = [1, 2, 3, 4, 5, 6];

const Title: React.FC<TitleProps> = ({
  className,
  level = 1,
  color,
  size,
  align,
  fontStyle,
  weight,
  capitalize,
  children,
  ...rest
}) => {
  if (!headingLevels.includes(level)) {
    return null;
  }

  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class': false,
    [className]: !!className,
  });

  const element = headingStyles[`H${level}`];

  return createElement(
    element,
    {
      className: classes,
      color,
      size,
      align,
      fontStyle,
      weight,
      capitalize,
      ...filteredProps,
    },
    children
  );
};

Title.displayName = 'Title';

export default withTheme(Title);
