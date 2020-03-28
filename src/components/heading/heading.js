import React from 'react';
import './heading.scss';


const Heading = props => {
  return(
    <div className="heading">
      <h2 className="heading__title">Welcome Back <strong>{props.name}</strong></h2>
      <p className="heading__subtitle">If at any point you would need assistance <strong>dorp your MBM OM a message</strong></p>
    </div>
  );
}

export default Heading;