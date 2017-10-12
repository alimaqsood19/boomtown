import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './styles.css';

const Loader = () => (
  <div className="centerLoader">
    <CircularProgress size={80} thickness={5} />
  </div>
);

export default Loader;
