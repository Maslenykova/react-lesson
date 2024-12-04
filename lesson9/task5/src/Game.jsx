import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  state = {
    squares: Array(9).fill(null),
    isXNext: true,
  };

  handleClick = (i) => {
    const squares = [...this.state.squares];

    if (squares[i] || this.calculateWinner(squares)) {
      return;
    }

    squares[i] = this.state.isXNext ? 'X' : 'O';

    this.setState({
      squares,
      isXNext: !this.state.isXNext,
    });
  };

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    const status = winner
      ? `Winner: ${winner}`
      : `Next player: ${this.state.isXNext ? 'X' : 'O'}`;

    return (
      <div className="game">
        <div className="game-status">{status}</div>
        <Board
          squares={this.state.squares}
          onClick={(i) => this.handleClick(i)}
        />
      </div>
    );
  }
}

export default Game;