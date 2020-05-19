import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: '1.5rem',
      height: '2rem',
      fontWeight: 300,
      paddingRight: '2rem',
      '& > svg': {
        marginRight: '1rem',
      },
    },
  })
);

const Search = () => {
  const classes = useStyles();
  return (
    <InputBase
      fullWidth
      classes={{ root: classes.root }}
      startAdornment={<SearchIcon />}
    />
  );
};

export default Search;
