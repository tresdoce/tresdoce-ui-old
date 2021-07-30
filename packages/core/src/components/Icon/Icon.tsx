import React from 'react';
import filterProps from '../../utils/filter-props';
import clsx from 'clsx';
import { withTheme } from '../Theme';
import { IconProps } from './Icon.types';
import { ContainerIcon } from './styles';

import { icons } from './constants/icons';
import { defaultAttrs } from './constants/default-attrs';

const Icon: React.FC<IconProps> = ({
  className,
  name,
  width = defaultAttrs.width,
  height = defaultAttrs.height,
  fill = defaultAttrs.fill,
  strokeColor = defaultAttrs.stroke,
  strokeWidth = defaultAttrs['stroke-width'],
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  ...rest
}) => {
  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class': false,
    [className]: !!className,
  });

  if (!Object.keys(icons).includes(name)) {
    return null;
  }

  return (
    <ContainerIcon className={classes} {...filteredProps}>
      <svg
        data-name={`icon-${name}`}
        xmlns={`${defaultAttrs.xmlns}`}
        width={width}
        height={height}
        viewBox={`${defaultAttrs.viewBox}`}
        fill={fill}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        dangerouslySetInnerHTML={{ __html: icons[name] }}
      />
    </ContainerIcon>
  );
};

Icon.displayName = '@tresdoce-ui/core/Icon';

export default withTheme(Icon);
