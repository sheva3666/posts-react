import { ChangeEventHandler } from "react";
import "./Input.scss";

export interface InputProps {
  placeholder: string;
  value: string;
  type?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type = "text",
  onChange,
}) => (
  <input
    className="input"
    placeholder={placeholder}
    value={value}
    type={type}
    onChange={onChange}
  />
);

export default Input;
