import React, { createElement } from 'react';
import filterProps from '../../utils/filter-props';
import clsx from 'clsx';
import { withTheme } from '../Theme';
import { TextProps } from './Text.types';
import * as textStyles from './styles';

const Text: React.FC<TextProps> = ({
  className,
  color,
  size,
  align,
  fontStyle,
  weight,
  capitalize,
  children,
  ...rest
}) => {
  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class': false,
    [className]: !!className,
  });

  const element = textStyles['P'];
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

Text.displayName = 'Text';

export default withTheme(Text);
