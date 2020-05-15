import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBarMaterial from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

type IPropsWidth = { width: number };
type IProps = {
  width: IPropsWidth['width'];
  children?: React.ReactChild;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarMaterial: ({ width }: IPropsWidth) => ({
      width: `calc(100% - ${width}px)`,
      marginLeft: width,
    }),
  })
);

const AppBar = ({ width, children }: IProps) => {
  const classes = useStyles({ width });
  return (
    <>
      <AppBarMaterial position='fixed' className={classes.appBarMaterial}>
        <Toolbar>
          <Typography variant='h6' noWrap>
            {children}
          </Typography>
        </Toolbar>
      </AppBarMaterial>
    </>
  );
};

export default AppBar;
