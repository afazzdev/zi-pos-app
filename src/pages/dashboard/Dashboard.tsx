import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Paper } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    globalPadding: { padding: theme.spacing(3) },
    container: {
      display: 'grid',
      gridGap: '.5rem',
      gridTemplateColumns: 'repeat(3, minmax(300px, 1fr))',
      gridTemplateRows: 'auto',
      gridTemplateAreas: `
        "chart chart chart"
        "data data profile"
      `,
      marginTop: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: 'repeat(1, minmax(300px, 1fr))',
        gridTemplateAreas: `
          "chart"
          "data"
          "profile"
        `,
      }
    },
    chart: {
      gridArea: 'chart'
    },
    data: {
      gridArea: 'data'
    },
    profile: {
      gridArea: 'profile'
    }
  })
);

const Dashboard = () => {
  const [t] = useTranslation();
  const classes = useStyles();

  return (
    <Grid container direction='column'>
      <Grid item container>
        <Typography variant='h3'>Dashboard</Typography>
        <Typography variant='body2'>senin, 18 may 2020</Typography>
      </Grid>
      <div className={classes.container}>
        <div className={classes.chart}>
          <Paper
            className={clsx(classes.globalPadding)}
            style={{ width: '100%' }}
          >
            Chart 1
          </Paper>
        </div>
        <div className={classes.data}>
          <Paper
            className={clsx(classes.globalPadding)}
            style={{ width: '100%' }}
          >
            child 1
          </Paper>
        </div>
        <div className={classes.profile}>
          <Paper
            className={clsx(classes.globalPadding)}
            style={{ width: '100%' }}
          >
            child 2
          </Paper>
        </div>
      </div>
    </Grid>
  );
};

export default Dashboard;
