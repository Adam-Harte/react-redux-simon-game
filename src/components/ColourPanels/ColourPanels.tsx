import * as React from 'react';

import './ColourPanels.css';

interface Props {
  colour: string;
  onClick: () => void;
}

const ColourPanels: React.FC<Props> = props => {
  const classes = ['Panel', props.colour].join(' ');
  return <div className={classes} onClick={props.onClick} />;
};

export default ColourPanels;
