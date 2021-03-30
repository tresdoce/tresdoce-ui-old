import * as React from "react";
import { ButtonProps } from "./Button.types";
//import './styles.css';
import {Button as button} from './styles.jsx';

const Button: React.FC<ButtonProps> = ({ foo, onClick }) => (
    <button onClick={onClick} data-testid="Button" className="foo-bar">{foo}</button>
);
export default Button;
