import React from 'react';
import PanelToolTip from './PanelToolTip';

const DataPanel = (props) => {
  const status = props.status;
  const displayStatus = status.link_status === 'no link' ? 'no' : 'ok';
  return (
    <div className="panel data" style={props.style}>
      <div className={`icon ${displayStatus}`}></div>
      <div className="text">{props.name}</div>
      <PanelToolTip status={status} />
    </div>
  );
};

export default DataPanel;
