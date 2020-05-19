import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loader = () => (
  <div style={{ display: 'grid', placeItems: 'center' }}>
    <CircularProgress size={20} />
  </div>
);

export default Loader;
