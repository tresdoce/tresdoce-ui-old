import * as React from 'react';
import filterProps from '../../utils/filter-props';
import clsx from 'clsx';
import { withTheme } from '../Theme';
import { TitleProps } from './Title.types';
import {H1, H2, H3, H4, H5, H6} from './styles';

const headingLevels = [1, 2, 3, 4, 5, 6];

const Title: React.FC<TitleProps> = ({
   className,
   level,
   children,
   ...rest
 }) => {

  if(!headingLevels.includes(level)){
    return null;
  }

  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class': false,
    [className]: !!className,
  });

  const element = `h${level}`;

  return React.createElement(element, {
      'data-testid': 'id-Title',
      'className': classes,
      ...filteredProps,
    },
    children,
  );
};

Title.displayName = '@tresdoce-ui/core/Title';

export default withTheme(Title);
