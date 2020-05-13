import React, { useState } from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';
import LoginStyles from './style';

type IInput = {
  username: string;
  password: string;
};

const LoginComponent = () => {
  const classes = LoginStyles();
  const [input, setInput] = useState<IInput>({
    username: '',
    password: '',
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      [e.currentTarget.name]: e.currentTarget.value,
    } as Pick<IInput, keyof IInput>);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <Grid
      container
      alignItems='center'
      justify='center'
      className={classes.container}
    >
      <Grid item xs md={4}>
        <Paper className={classes.card}>
          <form onSubmit={handleSubmit}>
            <Typography variant='h4'>Login</Typography>
            <TextField
              name='username'
              value={input.username}
              onChange={handleInput}
            />
            <TextField
              name='password'
              value={input.password}
              onChange={handleInput}
            />
            <Button type='submit'>Submit</Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginComponent;
