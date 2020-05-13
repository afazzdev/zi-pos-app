import React from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';
import LoginStyles from './style';
import { IInput } from '../../pages/Login';

type IProps = {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
  input: IInput;
};

const LoginComponent = ({ handleInput, handleSubmit, input }: IProps) => {
  const classes = LoginStyles();

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
