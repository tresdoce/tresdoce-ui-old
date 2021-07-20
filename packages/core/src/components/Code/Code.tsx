import * as React from 'react';
import filterProps from '../../utils/filter-props';
import clsx from 'clsx';
import { withTheme } from '../Theme';
import { CodeProps } from './Code.types';
import { CodeStyle, PreStyle } from './styles';

//https://github.com/mantinedev/mantine/blob/master/src/mantine-core/src/components/Code/Code.tsx
const Code: React.FC<CodeProps> = ({
   className,
   children,
   block = false,
   ...rest
 }) => {
  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class': false,
    [className]: !!className,
  });

  return (
    <CodeStyle
      className={classes}
      {...filteredProps}
    >
    {children}
    </CodeStyle>
  );
};

Code.displayName = '@tresdoce-ui/core/Code';

export default withTheme(Code);
