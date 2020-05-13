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
      <Grid item style={{ maxWidth: 250 }}>
        <Paper className={classes.card}>
          <form onSubmit={handleSubmit}>
            <Typography variant='h4'>Login</Typography>
            <div>
              <TextField
                fullWidth
                name='username'
                value={input.username}
                onChange={handleInput}
                className={classes.textField}
              />
              <TextField
                fullWidth
                name='password'
                value={input.password}
                onChange={handleInput}
                className={classes.textField}
              />
              <Button
                fullWidth
                type='submit'
                variant='contained'
                color='primary'
                className={classes.button}
              >
                Submit
              </Button>
            </div>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginComponent;
