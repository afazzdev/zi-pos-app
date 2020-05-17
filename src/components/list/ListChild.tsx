import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TypographyVariant,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import { LinkWithRouter } from '../link';

type IListChild = {
  name: string;
  path: string;
  icon: React.ReactNode;
  variant: TypographyVariant;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(4),
    },
    activeLink: {
      color: 'red',
    },
  })
);

const ListChild = ({ name, path, icon, variant }: IListChild) => {
  const classes = useStyles();
  return (
    <List
      component={LinkWithRouter}
      to={path}
      disablePadding
      exact
      activeClassName={classes.activeLink}
    >
      <ListItem button className={classes.nested} disableRipple>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={name} primaryTypographyProps={{ variant }} />
      </ListItem>
    </List>
  );
};

export default ListChild;
