/* The leetcode specs asked to not return a new board but rather to modify the
board passed to the gameOfLife function */

const getCell = (board, row, col) => {
  if(row > board.length - 1 || row < 0) return undefined;
  else if (col > board[0].length - 1 || col < 0) return undefined;
  else return board[row][col];
};

const countLivingNeighbors = (board, row, col) => {
  let count = 0;
  for(let i = -1; i < 2; i++) {
    for(let j = -1; j < 2; j++) {
      if(i === 0 && j === 0) { //do nothing
      } else if(getCell(board, row + i, col + j) === 1) {
        count++;
      }
    }
  }
  return count;
};

const gameOfLife = board => {
  let newBoardConfig = [];
  for(let i = 0; i < board.length; i++) {
      let newRowConfig = [];
      for(let j = 0; j < board[0].length; j++) {
          let livingNeighbors = countLivingNeighbors(board, i, j);
          if(livingNeighbors < 2 || livingNeighbors > 3) newRowConfig.push(0);
          else if(livingNeighbors === 3) newRowConfig.push(1);
          else if(livingNeighbors === 2) newRowConfig.push(board[i][j]);
      }
      newBoardConfig.push(newRowConfig);
  }
  for(let i = 0; i < board.length; i++) {
      board[i] = newBoardConfig[i];
  }
};
