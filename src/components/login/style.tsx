import { makeStyles, Theme } from '@material-ui/core';

const LoginStyles = makeStyles((theme: Theme) => ({
  container: {
    color: theme.palette.grey[600],
    height: '100vh',
  },
  card: {
    padding: '2rem',
    textAlign: 'center',
  },
  textField: {
    marginTop: '1rem',
  },
  button: {
    marginTop: '1rem',
  },
}));

export default LoginStyles;
