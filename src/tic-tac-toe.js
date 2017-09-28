class TicTacToe {
    constructor() {
            this.game = [];
            for (var i=0; i<3; i++) {
            this.game[i] = [null, null, null];
            }
        this.isFirstPlayer = true;
        this.remainingTurns = 9;

    }

    getCurrentPlayerSymbol() {
        return this.isFirstPlayer ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
    return this.isFirstPlayer ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
    if (this.game[rowIndex][columnIndex])
      return;
    this.game[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
    this.remainingTurns--;

    this.isFirstPlayer = !this.isFirstPlayer;

    }

    isFinished() {
    return !!(this.isDraw() || this.getWinner());

    }

    getWinner() {
        if  (this.game[0][0] !== null &&
      this.game[0][0] === this.game[1][1] &&
      this.game[0][0] === this.game[2][2]) {
      return this.game[0][0];
    }
    if (this.game[0][2] !== null &&
      this.game[0][2] === this.game[1][1] &&
      this.game[0][2] === this.game[2][0]) {
      return this.game[0][2];
    }

    for (var i=0; i<3; i++) {
      if (this.game[i][0] && this.game[i][0] === this.game[i][1] && this.game[i][0] === this.game[i][2]) {
        return this.game[i][0];
      }
      if (this.game[0][i] && this.game[0][i] === this.game[1][i] && this.game[0][i] === this.game[2][i]) {
        return this.game[0][i];
      }
    }
    return null;

    }

    noMoreTurns() {
    return this.remainingTurns === 0;

    }

    isDraw() {
    return !this.getWinner() && this.noMoreTurns();

    }

    getFieldValue(rowIndex, colIndex) {
    return this.game[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
