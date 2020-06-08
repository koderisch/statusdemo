import React from 'react';
import PanelToolTip from './PanelToolTip';

const PsuPanel = (props) => {
  const status = props.status;
  const displayStatus = status.status === 'ok' ? 'ok' : 'no';
  return (
    <div className="panel psu" style={props.style}>
      <div className={`icon ${displayStatus}`}></div>
      <div className="text">{displayStatus === 'ok' ? `${status.volt}V` : status.volt}</div>
      <PanelToolTip status={status} />
    </div>
  );
};

export default PsuPanel;
