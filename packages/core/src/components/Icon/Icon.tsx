import React from 'react';
import filterProps from '../../utils/filter-props';
import clsx from 'clsx';
import { withTheme } from '../Theme';
import { IconProps } from './Icon.types';
import { IconStyle } from './styles';
import icons from './icons.json';

const Icon: React.FC<IconProps> = ({
   className,
   name,
   width = 24,
   height = 24,
   fill = 'none',
   strokeColor = '#000',
   strokeWidth = 2,
   strokeLinecap = 'round',
   strokeLinejoin = 'round',
   ...rest
 }) => {
  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class': false,
    [className]: !!className,
  });

  return (
    <>
      <IconStyle
        className={classes}
        data-name={`icon-${name}`}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill={fill}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        {...filteredProps}
        dangerouslySetInnerHTML={{ __html: icons[name] }}
      />
    </>
  );
};

Icon.displayName = '@tresdoce-ui/core/Icon';

export default withTheme(Icon);
