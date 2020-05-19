import React, { Fragment } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Drawer, Collapse } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSideBarContext, ISideBar } from '../../contexts/sideBarContext';
import { ISideRoutes } from '../../data/sideRoutes';
import { List } from '../list';

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
      overflowX: 'hidden',
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
    if (name === 'dashboard') {
      // if dashboard then save previous opened list
      return setOpen({ ...open, [name]: !open[name] } as ISideBar);
    } else {
      // if not then change to new value
      return setOpen({ [name]: !open[name] } as ISideBar);
    }
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
          // This is for List who don't have a child(ren)
          if (!parent.children && parent.path) {
            return (
              <List
                key={parent.name}
                name={t(`sideBar.${parent.name}`)}
                path={parent.path}
                icon={parent.icon}
                variant='button'
                parent
                onClick={handleClick(parent.name)}
              />
            );
          }
          // This for list and have a child(ren)
          return (
            <Fragment key={parent.name}>
              <List
                name={t(`sideBar.${parent.name}`)}
                path={parent.path}
                icon={parent.icon}
                parent
                onClick={handleClick(parent.name)}
                variant='button'
                isActive={open[parent.name]}
              />
              {/* Hidden child(ren) */}
              {parent.children &&
                Object.values(parent.children).map((child) => (
                  <Collapse
                    key={child.name}
                    in={open[parent.name]}
                    timeout='auto'
                    unmountOnExit
                  >
                    <List
                      name={t(`sideBar.${child.name}`)}
                      path={child.path}
                      icon={child.icon}
                      variant='body2'
                    />
                  </Collapse>
                ))}
            </Fragment>
          );
        })}
      </Drawer>
    </>
  );
};

export default SideBar;
