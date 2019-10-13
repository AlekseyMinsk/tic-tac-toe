class TicTacToe {
    constructor() {
      this.moveX = true;
      this.remainSteps = 9;
      this.gameField = Array.from(Array(3), () => new Array(3));
    }

    getCurrentPlayerSymbol() {
      return this.moveX ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
      if(this.gameField[rowIndex][columnIndex]) return;
      this.gameField[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
      this.moveX = !this.moveX;
      this.remainSteps--;
    }

    isFinished() {
      return (this.getWinner() ||  this.isDraw() ) ? true : false;
    }

    getWinner() {
      if(this.remainSteps > 4) return null;

      if  (
        this.gameField[0][0] === this.gameField[1][1] &&
        this.gameField[0][0] === this.gameField[2][2]) {
        return this.gameField[0][0];
      }
    if (
      this.gameField[0][2] === this.gameField[1][1] &&
      this.gameField[0][2] === this.gameField[2][0]) {
      return this.gameField[0][2];
    }

    for (var i=0; i<3; i++) {
      if (this.gameField[i][0] && this.gameField[i][0] === this.gameField[i][1] && this.gameField[i][0] === this.gameField[i][2]) {
        return this.gameField[i][0];
      }
      if (this.gameField[0][i] && this.gameField[0][i] === this.gameField[1][i] && this.gameField[0][i] === this.gameField[2][i]) {
        return this.gameField[0][i];
      }
    }
    return null;
    }

    noMoreTurns() {
      return this.remainSteps === 0;
    }

    isDraw() {
      if(!this.remainSteps && !this.getWinner()) return true;
      return false;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.gameField[rowIndex][colIndex] || null;
    }
}

module.exports = TicTacToe;
