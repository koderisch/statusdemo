import React from 'react';

const PsuPanel = (props) => {
  const localStatus = props.status.status === 'ok' ? 'ok' : 'no';
  return (
    <div className="panel psu" style={props.style}>
      <div className={`icon ${localStatus}`}></div>
      <div className="text">{localStatus === 'ok' ? `${props.status.volt}V` : props.status.volt}</div>
    </div>
  );
};

export default PsuPanel;
