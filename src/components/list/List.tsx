import React from 'react';
import {
  List as ListMaterial,
  ListItem,
  ListItemIcon,
  ListItemText,
  TypographyVariant,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import { LinkWithRouter } from '../link';
import clsx from 'clsx';

type IList = {
  name: string;
  path?: string;
  icon: React.ReactNode;
  variant: TypographyVariant;
  parent?: boolean;
  onClick?: (event: React.MouseEvent<HTMLUListElement>) => void;
  isActive?: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      marginLeft: theme.spacing(3),
      borderRadius: '2rem 0 0 2rem',
      transition: theme.transitions.create('margin'),
      '&:hover': {
        marginLeft: theme.spacing(2),
        background: theme.palette.grey[200],
      },
    },
    activeButton: {
      '& > *': {
        marginLeft: theme.spacing(2),
        background: theme.palette.grey[100],
      },
    },
    activeNavLink: {
      color: theme.palette.primary.main,
    },
    child: {
      marginLeft: theme.spacing(3),
      display: 'block',
    },
  })
);

const List = ({
  name,
  path,
  icon,
  variant,
  parent,
  onClick,
  isActive,
}: IList) => {
  const classes = useStyles();
  return (
    <ListMaterial
      {...(parent && !path
        ? // This is for parent list but have a child
          {
            button: true,
            disableRipple: true,
            className: isActive ? classes.activeButton : '',
            onClick,
          }
        : // This is for parent list but don't have a child or the child it self
          {
            component: LinkWithRouter,
            to: path,
            exact: true,
            activeClassName: clsx(classes.activeButton, classes.activeNavLink),
            className: !parent ? classes.child : '',
            onClick: !parent ? undefined : onClick,
          })}
    >
      <ListItem button className={classes.nested} disableRipple>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={name} primaryTypographyProps={{ variant }} />
      </ListItem>
    </ListMaterial>
  );
};

export default List;
