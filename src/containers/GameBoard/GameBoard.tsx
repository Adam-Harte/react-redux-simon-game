import * as React from 'react';

import './GameBoard.css';

import ColourPanel from '../../components/ColourPanels/ColourPanels';
import button from '../../components/Button/Button';

class GameBoard extends React.Component<> {
  componentDidMount() {
    const sequence = this.generateSequence();
    let i = 0;
    let playSequence = setInterval(() => {
      this.lightup(sequence[i]);
      i++;
      if (i >= sequence.length) {
        clearInterval(playSequence);
      }
    }, 500);
  }

  getRandomNum = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  generateSequence = (): number[] => {
    const seq = [];

    for (let i = 0; i < 24; i++) {
      seq.push(this.getRandomNum(0, 4));
    }

    console.log(seq);

    return seq;
  };

  lightup = (item: any): void => {
    let panel = document.querySelectorAll('.Panel')[item];
    panel.classList.add('lightup');
    setTimeout(() => {
      panel.classList.remove('lightup');
    }, 500);
  };

  handlePanelClick = (panel: any): void => {
    console.log(panel + 'clicked!');
    this.lightup(panel);
  };

  render() {
    return (
      <div className="GameBoard">
        <ColourPanel colour="Green" clicked={() => this.handlePanelClick(0)} />
        <ColourPanel colour="Red" clicked={() => this.handlePanelClick(1)} />
        <ColourPanel colour="Yellow" clicked={() => this.handlePanelClick(2)} />
        <ColourPanel colour="Blue" clicked={() => this.handlePanelClick(3)} />
      </div>
    );
  }
}

export default GameBoard;
