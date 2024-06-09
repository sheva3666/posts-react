import { useState } from "react";

export interface UseFormProps {
  email: string;
  password: string;
}

const useForm = ({ email, password }: UseFormProps) => {
  const [formState, setFormState] = useState({ email, password });

  const handleForm = (key: string, value: string) => {
    setFormState((prevState) => ({ ...prevState, [key]: value }));
  };

  return { handleForm, formState };
};

export default useForm;
