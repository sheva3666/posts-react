import React from "react";

import Input from "../common/Input/Input";
import Button from "../common/Button/Button";

import "./Form.scss";

interface FormProps {
  isDisabled: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleEmailChange: (e: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handlePasswordChange: (e: any) => void;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  emailValue: string;
  passwordValue: string;
  submitButtonLabel: string;
}

const Form: React.FC<FormProps> = ({
  isDisabled,
  handleEmailChange,
  handlePasswordChange,
  onSubmit,
  emailValue,
  passwordValue,
  submitButtonLabel,
}) => {
  return (
    <form className="form">
      <Input
        onChange={handleEmailChange}
        placeholder="Email"
        value={emailValue}
      />
      <Input
        onChange={handlePasswordChange}
        placeholder="Password"
        value={passwordValue}
        type="password"
      />
      <Button
        disabled={isDisabled}
        name={submitButtonLabel}
        onClick={onSubmit}
      />
    </form>
  );
};

export default Form;
