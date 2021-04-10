import React from "react";
import { withTheme } from '../Theme';
import { ButtonProps } from "./Button.types";
import {ButtonStyle} from './styles.jsx';

const Button: React.FC<ButtonProps> = ({ foo, onClick, theme }) => (
    <ButtonStyle onClick={onClick} data-testid="Button" className="foo-bar">{foo}</ButtonStyle>
);
export default withTheme(Button);
