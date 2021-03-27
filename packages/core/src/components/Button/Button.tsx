import * as React from "react";
import { ButtonProps } from "./Button.types";
const Button: React.FC<ButtonProps> = ({ foo, onClick }) => (
    <button onClick={onClick} data-testid="Button" className="foo-bar">{foo}</button>
);
export default Button;
