import React, { Fragment } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
  Drawer as DrawerMaterial,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { useDrawerContext, IDrawer } from '../../contexts/drawerContext';
import { ISideRoutes } from '../../data/sideRoutes';
import { ListChild } from '../list';

type IPropsWidth = { width: number };

type IProps = {
  width: IPropsWidth['width'];
  sidebar: ISideRoutes;
  children?: React.ReactChild;
};

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

const Drawer = ({ width, sidebar }: IProps) => {
  const classes = useStyles({ width });
  const [open, setOpen] = useDrawerContext();

  const handleClick = (name: string): any => () => {
    // console.log(name);
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
          if (!el.children && el.path) {
            return (
              <ListChild
                key={el.name}
                name={el.name}
                path={el.path}
                icon={el.icon}
                variant='button'
              />
            );
          }
          return (
            <Fragment key={el.name}>
              <ListItem button onClick={handleClick(el.name)} disableRipple>
                {el.icon && <ListItemIcon>{el.icon}</ListItemIcon>}
                <ListItemText
                  primary={el.name}
                  primaryTypographyProps={{ variant: 'button' }}
                />
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
                      <ListChild
                        name={el2.name}
                        path={el2.path}
                        icon={el2.icon}
                        variant='body2'
                      />
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
