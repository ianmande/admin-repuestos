import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const index = ({ name, porcentaje = 0, color = 'blue' }) => {
  return (
    <div>
      <h6>{name}</h6>
      <ProgressBar now={porcentaje} style={{ backgroundColor: color }} />
    </div>
  );
};

export default index;
