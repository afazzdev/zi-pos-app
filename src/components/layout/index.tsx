import React, { Suspense } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SideBar from '../sideBar';
import AppBar from '../appBar';
import Loader from '../loader';
import { ISideRoutes } from '../../data/sideRoutes';
import { Search } from '../textfield';

const TranslationButton = React.lazy(() => import('../translationButton'));

type ILayoutProps = {
  children: React.ReactNode;
  sidebar: ISideRoutes;
};

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  })
);

function Layout({ children, sidebar }: ILayoutProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar width={drawerWidth}>
        <Search />
        <Suspense fallback={<Loader />}>
          <TranslationButton />
        </Suspense>
      </AppBar>
      <SideBar width={drawerWidth} sidebar={sidebar} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

export default Layout;
