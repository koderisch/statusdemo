import React from 'react';

const PsuPanel = (props) => {
  const status = props.status;
  const displayStatus = status.status === 'ok' ? 'ok' : 'no';
  return (
    <div className="panel psu" style={props.style}>
      <div className={`icon ${displayStatus}`}></div>
      <div className="text">{displayStatus === 'ok' ? `${status.volt}V` : status.volt}</div>
      <div className="panelTooltip">
        <ul>
          <li>PSU status: {status.status}</li>
          <li>Volt: {status.volt}</li>
        </ul>
      </div>
    </div>
  );
};

export default PsuPanel;
