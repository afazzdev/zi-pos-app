import React, { Fragment } from 'react';
import {
  createStyles,
  Theme,
  makeStyles,
  styled,
} from '@material-ui/core/styles';
import {
  Link as MaterialLink,
  Drawer as DrawerMaterial,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useDrawerContext, IDrawer } from '../../contexts/drawerContext';
import { ISideRoutes } from '../../data/sideRoutes';

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

const NormalizedLink = styled((props) => (
  <MaterialLink component={Link} {...props} />
))({
  textDecoration: 'none',
  color: 'black',
  textTransform: 'uppercase',
});

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
          return (
            <Fragment key={el.name}>
              <ListItem button onClick={handleClick(el.name)}>
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
                      <List
                        component={NormalizedLink}
                        to={el2.path}
                        disablePadding
                      >
                        <ListItem button className={classes.nested}>
                          {el2.icon && <ListItemIcon>{el2.icon}</ListItemIcon>}
                          <ListItemText
                            primary={el2.name}
                            primaryTypographyProps={{ variant: 'body2' }}
                          />
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
