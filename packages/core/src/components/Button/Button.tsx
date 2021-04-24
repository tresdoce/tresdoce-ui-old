import * as React from 'react';
import filterProps from '../../utils/filter-props';
import { withTheme } from '../Theme';
import { ButtonProps } from "./Button.types";
import {ButtonStyle} from './styles.jsx';

const Button: React.FC<ButtonProps> = ({
  foo,
  onClick,
  ...rest
}) => {
  const filteredProps = filterProps(rest);
  return(
    <ButtonStyle
      {...filteredProps}
      onClick={onClick}
      data-testid='Button'
      className='foo-bar'>{foo}</ButtonStyle>
  );
};
export default withTheme(Button);
