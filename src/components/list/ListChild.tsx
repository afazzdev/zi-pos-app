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
      marginRight: theme.spacing(3),
      borderRadius: '0 2rem 2rem 0',
      transition: theme.transitions.create('margin'),
      '&:hover': {
        marginRight: theme.spacing(2),
        background: theme.palette.grey[200],
      },
    },
    activeLink: {
      '& > *': {
        marginRight: theme.spacing(3),
        background: theme.palette.grey[100],
      },
    },
  })
);

const ListChild = ({ name, path, icon, variant }: IListChild) => {
  const classes = useStyles();
  return (
    <div>
      <List
        component={LinkWithRouter}
        to={path}
        // disablePadding
        exact
        activeClassName={classes.activeLink}
      >
        <ListItem button className={classes.nested} disableRipple>
          {icon && <ListItemIcon>{icon}</ListItemIcon>}
          <ListItemText primary={name} primaryTypographyProps={{ variant }} />
        </ListItem>
      </List>
    </div>
  );
};

export default ListChild;
