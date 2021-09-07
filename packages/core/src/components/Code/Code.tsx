import * as React from 'react';
import filterProps from '../../utils/filter-props';
import clsx from 'clsx';
import { withTheme } from '../Theme';
import { CodeProps } from './Code.types';
import * as CodePreStyles from './styles';

//https://github.com/mantinedev/mantine/blob/master/src/mantine-core/src/components/Code/Code.tsx
const Code: React.FC<CodeProps> = ({ className, children, block = false, ...rest }) => {
  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class': false,
    [className]: !!className,
  });

  const element = block ? CodePreStyles.PreStyle : CodePreStyles.CodeStyle;

  return React.createElement(
    element,
    {
      className: classes,
      ...filteredProps,
    },
    children
  );
};

Code.displayName = 'Code';

export default withTheme(Code);
