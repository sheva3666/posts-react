import { MouseEventHandler } from "react";

export interface ButtonProps {
  name: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ name, onClick, disabled }) => (
  <button disabled={disabled} onClick={onClick}>
    {name}
  </button>
);

export default Button;
