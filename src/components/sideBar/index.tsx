import React, { Fragment } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { useSideBarContext, ISideBar } from '../../contexts/sideBarContext';
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
    sideBar: ({ width }: IPropsWidth) => ({
      width: width,
      flexShrink: 0,
    }),
    sideBarPaper: ({ width }: IPropsWidth) => ({
      width: width,
    }),
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

const SideBar = ({ width, sidebar }: IProps) => {
  const classes = useStyles({ width });
  const [open, setOpen] = useSideBarContext();
  const { t } = useTranslation();

  const handleClick = (name: string): any => () => {
    // console.log(name);
    return setOpen({ ...open, [name]: !open[name] } as ISideBar);
  };

  // React.useEffect(() => {
  //   console.log(open);
  // }, [open]);

  return (
    <>
      <Drawer
        className={classes.sideBar}
        variant='permanent'
        classes={{
          paper: classes.sideBarPaper,
        }}
        anchor='left'
      >
        <div className={classes.toolbar} />
        {Object.values(sidebar).map((parent) => {
          if (!parent.children && parent.path) {
            return (
              <ListChild
                key={parent.name}
                name={t(`sideBar.${parent.name}`)}
                path={parent.path}
                icon={parent.icon}
                variant='button'
              />
            );
          }
          return (
            <Fragment key={parent.name}>
              <ListItem button onClick={handleClick(parent.name)} disableRipple>
                {parent.icon && <ListItemIcon>{parent.icon}</ListItemIcon>}
                <ListItemText
                  primary={t(`sideBar.${parent.name}`)}
                  primaryTypographyProps={{ variant: 'button' }}
                />
                {open[parent.name] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              {parent.children && (
                <List>
                  {Object.values(parent.children).map((child) => (
                    <Collapse
                      key={child.name}
                      in={open[parent.name]}
                      timeout='auto'
                      unmountOnExit
                    >
                      <ListChild
                        name={t(`sideBar.${child.name}`)}
                        path={child.path}
                        icon={child.icon}
                        variant='body2'
                      />
                    </Collapse>
                  ))}
                </List>
              )}
            </Fragment>
          );
        })}
      </Drawer>
    </>
  );
};

export default SideBar;
