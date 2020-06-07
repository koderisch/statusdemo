import React from 'react';
import PsuPanel from './PsuPanel';
import DataPanel from './DataPanel';

const Panels = (props) => {
  return (
    <div className="panels">
      <PsuPanel style={style.psu1} status={props.server.psu1} />
      <PsuPanel style={style.psu2} status={props.server.psu2} />
      <DataPanel style={style.mgmt1} name="mgmt1" status={props.server.mgmt1.link_status} />
      <DataPanel style={style.mgmt2} name="mgmt2" status={props.server.mgmt2.link_status} />
      <DataPanel style={style.data1} name="data1" status={props.server.data1.link_status} />
      <DataPanel style={style.data2} name="data2" status={props.server.data2.link_status} />
    </div>
  );
};

const style = {
  psu1: {
    top: 126,
    left: 20,
  },
  psu2: {
    top: 126,
    left: 172,
  },
  mgmt1: {
    top: 126,
    left: 530,
  },
  mgmt2: {
    top: 126,
    left: 608,
  },
  data1: {
    top: 126,
    left: 880,
  },
  data2: {
    top: 126,
    left: 963,
  },
};

export default Panels;
