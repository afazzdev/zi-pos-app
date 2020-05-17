import React from 'react';
import { styled, Link as MaterialLink } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const LinkWithRouter = styled((props) => (
  <MaterialLink component={NavLink} {...props} />
))({
  textDecoration: 'none',
  color: 'black',
  textTransform: 'uppercase',
  '&:hover': {
    textDecoration: 'none',
  },
});

export default LinkWithRouter;
