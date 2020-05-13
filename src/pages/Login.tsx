import React, { useState } from 'react';
import LoginComponent from '../components/login';
import { History } from 'history';

export type IInput = {
  username: string;
  password: string;
};

const Login = ({ history }: { history: History }) => {
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
    if (input.username === 'admin' && input.password === 'admin') {
      localStorage.setItem('token', 'testtoken');
      history.push('/dashboard');
    }
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
