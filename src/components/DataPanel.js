import React from 'react';

const DataPanel = (props) => {
  const status = props.status;
  const displayStatus = status.link_status === 'no link' ? 'no' : 'ok';
  return (
    <div className="panel data" style={props.style}>
      <div className={`icon ${displayStatus}`}></div>
      <div className="text">{props.name}</div>
      <div className="panelTooltip">
        <ul>
          <li>Link status: {status.link_status}</li>
          <li>Data rate: {status.bps}bps</li>
        </ul>
      </div>
    </div>
  );
};

export default DataPanel;
