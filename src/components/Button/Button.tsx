import * as React from 'react';

import './Button.css';

interface Props {
  btnType: string;
  children?: any;
  onClick: () => void;
}

const Button: React.FC<Props> = props => {
  const classes = ['Button', props.btnType].join(' ');
  return (
    <button className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
