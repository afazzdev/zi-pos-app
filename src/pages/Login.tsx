import React, { useState } from 'react';
import LoginComponent from '../components/login';

export type IInput = {
  username: string;
  password: string;
};

const Login = () => {
  const [input, setInput] = useState<IInput>({
    username: '',
    password: '',
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    } as Pick<IInput, keyof IInput>);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert(JSON.stringify(input));
  };

  return (
    <LoginComponent
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      input={input}
    />
  );
};

export default Login;
