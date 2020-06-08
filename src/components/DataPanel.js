import React from 'react';

const DataPanel = (props) => {
  const localStatus = props.status.link_status === 'no link' ? 'no' : 'ok';
  return (
    <div className="panel data" style={props.style}>
      <div className={`icon ${localStatus}`}></div>
      <div className="text">{props.name}</div>
    </div>
  );
};

export default DataPanel;
