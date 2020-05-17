import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loader = () => (
  <div style={{ width: '100%', textAlign: 'center', marginTop: '1rem' }}>
    <CircularProgress size={20} />
  </div>
);

export default Loader;
