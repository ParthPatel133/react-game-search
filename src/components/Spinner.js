import spinner from '../img/spinner.gif';
import React from 'react';

const Spinner = () => (
  <React.Fragment>
    <img
      src={spinner}
      alt='Loading...'
      style={{width: '200px', margin: 'auto', display: 'block'}}
    />
  </React.Fragment>
);

export default Spinner;
