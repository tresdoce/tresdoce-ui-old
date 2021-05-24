import * as React from 'react';
import filterProps from '../../utils/filter-props';
import { withTheme } from '../Theme';
import { ButtonProps } from './Button.types';
import { ButtonStyle } from './styles';

const Button: React.FC<ButtonProps> = ({
 foo,
 onClick,
 ...rest
}) => {
  const filteredProps = filterProps(rest);
  return (
    <ButtonStyle
      className='foo-bar'
      onClick={onClick}
      {...filteredProps}
    >
      {foo}
    </ButtonStyle>
  );
};

Button.displayName = '@tresdoce-ui/core/Button';

export default withTheme(Button);
