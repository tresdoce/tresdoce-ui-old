import React from "react";
import { ButtonProps } from "./Button.types";
import {ButtonStyle} from './styles.jsx';


const Button: React.FC<ButtonProps> = ({ foo, onClick }) => (
    <ButtonStyle onClick={onClick} data-testid="Button" className="foo-bar">{foo}</ButtonStyle>
);
export default Button;
