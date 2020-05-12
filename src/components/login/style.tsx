import { makeStyles, Theme } from '@material-ui/core';

const LoginStyles = makeStyles((theme: Theme) => ({
  container: {
    color: theme.palette.grey[600],
    height: '100vh',
  },
  card: {
    minHeight: 400,
    padding: '2rem',
  },
}));

export default LoginStyles;
