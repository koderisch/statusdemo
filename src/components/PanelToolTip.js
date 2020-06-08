import React from 'react';

const PanelToolTip = (props) => {
  return (
    <div className="panelTooltip">
      <ul>
        {Object.entries(props.status).map((st, index) => {
          return (
            <li>
              {st[0]}: {st[1]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PanelToolTip;
