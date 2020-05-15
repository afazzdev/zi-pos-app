import React, { Fragment } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import DrawerMaterial from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom';
import { useDrawerContext, IDrawer } from '../../contexts/drawerContext';

type IPropsWidth = { width: number };

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: ({ width }: IPropsWidth) => ({
      width: width,
      flexShrink: 0,
    }),
    drawerPaper: ({ width }: IPropsWidth) => ({
      width: width,
    }),
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

const sidebar = {
  transaction: {
    name: 'transaction',
    children: {
      buy: {
        name: 'buy',
        path: '/buy',
      },
      sell: {
        name: 'sell',
        path: '/sell',
      },
    },
  },
  cashier: {
    name: 'cashier',
    children: {
      member: {
        name: 'cashier-names',
        path: '/cashier-names',
      },
      owner: {
        name: 'owner',
        path: '/owner',
      },
    },
  },
};

const Drawer = ({ width }: IPropsWidth) => {
  const classes = useStyles({ width });
  const [open, setOpen] = useDrawerContext();

  const handleClick = (name: string): any => () => {
    console.log(name);
    return setOpen({ ...open, [name]: !open[name] } as IDrawer);
  };

  // React.useEffect(() => {
  //   console.log(open);
  // }, [open]);

  return (
    <>
      <DrawerMaterial
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
      >
        <div className={classes.toolbar} />
        {Object.values(sidebar).map((el) => {
          return (
            <Fragment key={el.name}>
              <ListItem button onClick={handleClick(el.name)}>
                {/* <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon> */}
                <ListItemText primary={el.name} />
                {open[el.name] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              {el.children && (
                <List>
                  {Object.values(el.children).map((el2) => (
                    <Collapse
                      key={el2.name}
                      in={open[el.name]}
                      timeout='auto'
                      unmountOnExit
                    >
                      <List component={Link} to={el2.path} disablePadding>
                        <ListItem button className={classes.nested}>
                          {/* <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon> */}
                          <ListItemText primary={el2.name} />
                        </ListItem>
                      </List>
                    </Collapse>
                  ))}
                </List>
              )}
            </Fragment>
          );
        })}
      </DrawerMaterial>
    </>
  );
};

export default Drawer;
