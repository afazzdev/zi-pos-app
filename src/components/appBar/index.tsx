import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { AppBar as AppBarMaterial, Toolbar, Grid } from '@material-ui/core';

type IPropsWidth = { width: number };
type IProps = {
  width: IPropsWidth['width'];
  children?: React.ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarMaterial: ({ width }: IPropsWidth) => ({
      width: `calc(100% - ${width}px)`,
      marginLeft: width,
    }),
    children: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
  })
);

const AppBar = ({ width, children }: IProps) => {
  const classes = useStyles({ width });
  return (
    <>
      <AppBarMaterial
        position='fixed'
        color='default'
        className={classes.appBarMaterial}
      >
        <Toolbar>
          <Grid container>
            <div className={classes.children}>{children}</div>
          </Grid>
        </Toolbar>
      </AppBarMaterial>
    </>
  );
};

export default AppBar;
