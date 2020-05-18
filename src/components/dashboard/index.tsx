import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Paper } from '@material-ui/core';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Charts } from '../chart';
import { ButtonGroup } from '../button';
import { useDashboardContext } from '../../contexts/dashboardContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    globalPadding: { padding: theme.spacing(3), width: '100%' },
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
      },
    },
    chart: {
      gridArea: 'chart',
    },
    data: {
      gridArea: 'data',
    },
    profile: {
      gridArea: 'profile',
    },
  })
);

const DashboardComp = () => {
  const classes = useStyles();
  const [t] = useTranslation();
  const [dashboardCtx] = useDashboardContext();
  const { charts } = dashboardCtx;
  const [state, setState] = React.useState('MONTH');

  return (
    <Grid container direction='column'>
      <Grid item container justify='space-between'>
        <Typography variant='h3'>Dashboard</Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ButtonGroup
            data={[
              {
                name: 'WEEK',
                child: 'Week',
              },
              {
                name: 'MONTH',
                child: 'Month',
              },
              {
                name: 'YEAR',
                child: 'year',
              },
            ]}
            onClick={setState}
            isOn={state}
          />
        </div>
        {/* <Typography variant='body2'>senin, 18 may 2020</Typography> */}
      </Grid>
      <div className={classes.container}>
        {/* Chart module */}
        <Paper className={clsx(classes.globalPadding, classes.chart)}>
          <Charts
            title={t('dashboard.charts.title', { time: t('time.month') })}
            data={charts.data}
            options={charts.options}
          />
        </Paper>
        {/* In-progress */}
        <Paper className={clsx(classes.globalPadding, classes.data)}>
          child 1
        </Paper>
        {/* In-progress */}
        <Paper className={clsx(classes.globalPadding, classes.profile)}>
          child 2
        </Paper>
      </div>
    </Grid>
  );
};

export default DashboardComp;
