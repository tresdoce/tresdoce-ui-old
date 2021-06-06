import * as React from 'react';
import filterProps from '../../utils/filter-props';
import clsx from 'clsx';
import { withTheme } from '../Theme';
import { GridProps } from "./Grid.types";
import { GridStyle } from "./styles";

const Grid: React.FC<GridProps> = ({
  className,
  children,
  gutter= 15,
  grow= false,
  columns = 12,
  justify = 'flex-start',
  align = 'stretch',
  ...rest
}) => {
  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class':false,
    [className]: !!className
  });

  const cols = (React.Children.toArray(children) as React.ReactElement[]).map((col, index) =>
    React.cloneElement(col, { gutter, grow, columns, key: index })
  );

  return(
    <GridStyle
      className={classes}
      gutter={gutter}
      grow={grow}
      columns={columns}
      justify={justify}
      align={align}
      {...filteredProps}
    >
      {cols}
    </GridStyle>
    );
};

Grid.displayName = '@tresdoce-ui/core/Grid';

export default withTheme(Grid);
