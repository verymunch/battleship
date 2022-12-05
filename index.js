let user = {
  name: null,
  maxTurns: 0,
};

let icons = {
  water:
    '<div class="icon">' +
    '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="bi bi-water" viewBox="0 0 16 16">' +
    '<path d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 9.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65z"/>' +
    '</svg>' +
    '</div>',
  boat:
    '<div class="icon">' +
    '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 128 128">' +
    '<path d="M62 8.7 24.65 73.96c8.62-1.78 27.71-5.54 37.35-6.06zM66 8.7v59.2c9.64.52 28.73 4.28 37.35 6.06zM115.96 81.44H12.04a3 3 0 0 0-2.83 3.98l2.11 6.09h105.36l2.11-6.09a3 3 0 0 0-2.83-3.98zM34.97 120.76h58.06a19.023 19.023 0 0 0 16.77-10.07H18.2a19.023 19.023 0 0 0 16.77 10.07zM16.57 106.69h94.86l3.87-11.18H12.7l3.87 11.18zM66 77.438V71.9c-.725-.041-1.4-.066-2-.066s-1.275.025-2 .066v5.534z"/>' +
    '</svg>' +
    '</div>',
  miss:
    '<div class="icon-miss">' +
    '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="bi bi-file-excel-fill" viewBox="0 0 16 16">' +
    '<path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5.884 4.68 8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 1 1 .768-.64z"/>' +
    '</svg>' +
    '</div>',
  hit:
    '<div class="icon-hit">' +
    '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="bi bi-file-check-fill" viewBox="0 0 16 16">' +
    '<path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1.146 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>' +
    '</svg>' +
    '</div>',
  sunk:
    '<div class="icon-sunk">' +
    '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="bi bi-slash-circle" viewBox="0 0 16 16">' +
    '<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>' +
    '<path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z"/>' +
    '</svg>' +
    '</div>',
};

let ships = [
  {
    name: 'Aircraft Carrier',
    code: 'AC',
    size: 5,
    hitCt: 0,
    squares: [],
    placed: false,
    sunk: false,
  },
  {
    name: 'Battleship',
    code: 'BS',
    size: 4,
    hitCt: 0,
    squares: [],
    placed: false,
    sunk: false,
  },
  {
    name: 'Submarine',
    code: 'SM',
    size: 3,
    hitCt: 0,
    squares: [],
    placed: false,
    sunk: false,
  },
  {
    name: 'Cruiser',
    code: 'CR',
    size: 3,
    hitCt: 0,
    squares: [],
    placed: false,
    sunk: false,
  },
  {
    name: 'Destroyer',
    code: 'DS',
    size: 2,
    hitCt: 0,
    squares: [],
    placed: false,
    sunk: false,
  },
];

function setupBoard() {
  let tRow = ' ';
  for (let r = 0; r < game.board.length; r++) {
    tRow += `<tr id="R${r}">`;
    for (let c = 0; c < game.board.length; c++) {
      let tokStr = `${r}${c}`;
      let square = game.board[r][c];
      if (square == null) {
        tRow += `<td id="${tokStr}" class="icon" onclick='game.fire(${tokStr})'> ${icons.water} </td>`;
      } else {
        game.board[r][c] = null;
        tRow += `<td id="${tokStr}" class="icon" onclick='game.fire(${tokStr})'> ${icons.water} </td>`;
      }
    }
    tRow += `</tr>`;
  }
  document.getElementById('battleTable').innerHTML = tRow;
}

function showBoats() {
  let toggle = document.getElementById('showBoats');
  if (toggle.value == 'Yes' || game.checkGameOver()) {
    ships.forEach((ship) => {
      ship.squares.forEach((square) => {
        let row = parseInt(square.substring(0, 1));
        let col = parseInt(square.substring(1));
        let sq = game.board[row][col];
        if (sq != '/') {
          document.getElementById(`${row}${col}`).innerHTML = icons.boat;
        }
      });
    });
    toggle.value = 'No';
  } else if (toggle.value == 'No') {
    ships.forEach((ship) => {
      ship.squares.forEach((square) => {
        let row = parseInt(square.substring(0, 1));
        let col = parseInt(square.substring(1));
        let sq = game.board[row][col];
        if (sq != '/') {
          document.getElementById(`${row}${col}`).innerHTML = icons.water;
        }
      });
    });
    toggle.value = 'Yes';
  } else {
    alert('Show Boats Error!');
  }
}

function gameSetup() {
  setupBoard();
  document.getElementById('name').value = '';
  document.getElementById('turns').value = '';
  document.getElementById('startGame').style.display = 'block';
  document.getElementById('playGame').style.display = 'none';
  document.getElementById('winner').style.display = 'none';
  document.getElementById('winBanner').style.height = '0px';
  document.getElementById('setupError').innerHTML = '';
  user.name = null;
  user.maxTurns = 0;
}

function startGame() {
  user.maxTurns = document.getElementById('turns').value;
  let roundedTurns = Math.round(user.maxTurns);
  if (user.maxTurns >= 1 && user.maxTurns <= 100) {
    user.name = document.getElementById('name').value;
    user.maxTurns = roundedTurns;
    ships.forEach((ship) => {
      ship.placed = false;
      ship.sunk = false;
      ship.hitCt = 0;
      ship.squares = [];
    });
    game.sunkShips = [];
    game.placeShips();
    document.getElementById('startGame').style.display = 'none';
    document.getElementById('playGame').style.display = 'block';
    document.getElementById('showBoats').style.display = 'inline';
    document.getElementById('reset').style.display = 'none';
    document.getElementById('header2').innerHTML = `${user.name}'s War Board`;
    document.getElementById(
      'maxMisses'
    ).innerHTML = `Max Misses: ${roundedTurns}`;
    document.getElementById('shots').innerHTML = '0';
    document.getElementById('hits').innerHTML = '0';
    document.getElementById('misses').innerHTML = '0';
    document.getElementById('sunk').innerHTML = '0';
    document.getElementById('shipsLeft').innerHTML = '5';
    document.getElementById('alert').innerHTML = 'Click a square to begin!';
    document.getElementById('accHits').innerHTML = '0';
    document.getElementById('bsHits').innerHTML = '0';
    document.getElementById('smHits').innerHTML = '0';
    document.getElementById('csHits').innerHTML = '0';
    document.getElementById('dsHits').innerHTML = '0';
    document.getElementById('accStatus').innerHTML = 'Alive';
    document.getElementById('bsStatus').innerHTML = 'Alive';
    document.getElementById('smStatus').innerHTML = 'Alive';
    document.getElementById('csStatus').innerHTML = 'Alive';
    document.getElementById('dsStatus').innerHTML = 'Alive';
  } else {
    document.getElementById(
      'setupError'
    ).innerHTML = `${user.maxTurns} is invalid. Please enter a number from 1-100.`;
  }
}

let game = {
  board: [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ],

  sunkShips: [],

  placeShips: function () {
    let directions = 4;
    ships.forEach((ship) => {
      while (!ship.placed) {
        let row = Math.floor(Math.random() * this.board.length);
        let col = Math.floor(Math.random() * this.board.length);
        let dir = Math.floor(Math.random() * directions);
        let endCheck = '';

        if (dir == 0) {
          endCheck = `${row - ship.size + 1}${col}`;
          if (endCheck.length != 3) {
            let crosses = false;
            for (let i = 0; i < ship.size; i++) {
              if (game.board[row - i][col] != null) {
                crosses = true;
              }
            }
            if (!crosses) {
              for (let i = 0; i < ship.size; i++) {
                let tokStr = `${row - i}${col}`;
                if (game.board[row - i][col] == null) {
                  ship.squares.push(tokStr);
                  game.board[row - i][col] = ship.code;
                } else {
                  alert('Board Config Error');
                }
              }
              ship.placed = true;
            }
          }
        } else if (dir == 1) {
          endCheck = `${row}${col + ship.size - 1}`;
          if (endCheck.length != 3) {
            let crosses = false;
            for (let i = 0; i < ship.size; i++) {
              if (game.board[row][col + i] != null) {
                crosses = true;
              }
            }
            if (!crosses) {
              for (let i = 0; i < ship.size; i++) {
                let tokStr = `${row}${col + i}`;
                if (game.board[row][col + i] == null) {
                  ship.squares.push(tokStr);
                  game.board[row][col + i] = ship.code;
                } else {
                  alert('Board Config Error');
                }
              }
              ship.placed = true;
            }
          }
        } else if (dir == 2) {
          endCheck = `${row + ship.size - 1}${col}`;
          if (endCheck.length != 3) {
            let crosses = false;
            for (let i = 0; i < ship.size; i++) {
              if (game.board[row + i][col] != null) {
                crosses = true;
              }
            }
            if (!crosses) {
              for (let i = 0; i < ship.size; i++) {
                let tokStr = `${row + i}${col}`;
                if (game.board[row + i][col] == null) {
                  ship.squares.push(tokStr);
                  game.board[row + i][col] = ship.code;
                } else {
                  alert('Board Config Error');
                }
              }
              ship.placed = true;
            }
          }
        } else if (dir == 3) {
          endCheck = `${row}${col - ship.size + 1}`;
          if (endCheck.length != 3) {
            let crosses = false;
            for (let i = 0; i < ship.size; i++) {
              if (game.board[row][col - i] != null) {
                crosses = true;
              }
            }
            if (!crosses) {
              for (let i = 0; i < ship.size; i++) {
                let tokStr = `${row}${col - i}`;
                if (game.board[row][col - i] == null) {
                  ship.squares.push(tokStr);
                  game.board[row][col - i] = ship.code;
                } else {
                  alert('Board Config Error');
                }
              }
              ship.placed = true;
            }
          }
        } else {
          alert('No Direction Selected Error.');
        }
      }
    });
  },

  fire: function (square) {
    if (user.name != null) {
      if (isNaN(parseInt(square.toString().substring(1)))) {
        square = '0' + square;
      }

      let row = parseInt(square.toString().substring(0, 1));
      let col = parseInt(square.toString().substring(1));
      let hits = parseInt(document.getElementById('hits').innerHTML);
      let misses = parseInt(document.getElementById('misses').innerHTML);
      let shots = parseInt(document.getElementById('shots').innerHTML);

      if (game.board[row][col] == null) {
        document.getElementById(`${row}${col}`).innerHTML = icons.miss;
        misses += 1;
        shots += 1;
        document.getElementById('misses').innerHTML = `${misses}`;
        document.getElementById('alert').innerHTML = `Miss!`;
        game.board[row][col] = 'X';
      } else if (game.board[row][col] != 'X' && game.board[row][col] != '/') {
        document.getElementById(`${row}${col}`).innerHTML = icons.hit;
        hits += 1;
        shots += 1;
        document.getElementById('hits').innerHTML = `${hits}`;
        this.checkHitSunk(game.board[row][col]);
        game.board[row][col] = '/';
      }

      this.updateShips();
      document.getElementById('shots').innerHTML = `${shots}`;
      if (this.checkGameOver()) {
        showBoats();
        user.name = null;
        document.getElementById('showBoats').style.display = 'none';
        document.getElementById('reset').style.display = 'inline';
      }
    }
  },

  updateShips: function () {
    let sunk = parseInt(document.getElementById('sunk').innerHTML);
    let shipsLeft = parseInt(document.getElementById('shipsLeft').innerHTML);

    ships.forEach((ship) => {
      if (!this.sunkShips.includes(ship.code) && ship.sunk) {
        if (ship.code == 'AC') {
          document.getElementById('accStatus').innerHTML = 'Sunk';
        } else if (ship.code == 'BS' && ship.sunk) {
          document.getElementById('bsStatus').innerHTML = 'Sunk';
        } else if (ship.code == 'SM' && ship.sunk) {
          document.getElementById('smStatus').innerHTML = 'Sunk';
        } else if (ship.code == 'CR' && ship.sunk) {
          document.getElementById('csStatus').innerHTML = 'Sunk';
        } else if (ship.code == 'DS' && ship.sunk) {
          document.getElementById('dsStatus').innerHTML = 'Sunk';
        }
        sunk += 1;
        shipsLeft -= 1;
        this.sunkShips.push(ship.code);
        document.getElementById('shipsLeft').innerHTML = `${shipsLeft}`;
      }
    });
    document.getElementById('sunk').innerHTML = `${sunk}`;
  },

  checkHitSunk: function (hitShipCode) {
    ships.forEach((ship) => {
      if (hitShipCode == ship.code) {
        ship.hitCt += 1;
        if (ship.code == 'AC') {
          document.getElementById('accHits').innerHTML = `${ship.hitCt}`;
        } else if (ship.code == 'BS') {
          document.getElementById('bsHits').innerHTML = `${ship.hitCt}`;
        } else if (ship.code == 'SM') {
          document.getElementById('smHits').innerHTML = `${ship.hitCt}`;
        } else if (ship.code == 'CR') {
          document.getElementById('csHits').innerHTML = `${ship.hitCt}`;
        } else if (ship.code == 'DS') {
          document.getElementById('dsHits').innerHTML = `${ship.hitCt}`;
        }
        if (ship.hitCt == ship.size) {
          ship.sunk = true;
          document.getElementById(
            'alert'
          ).innerHTML = `SHIP SUNK! ${ship.name}`;
          ship.squares.forEach((square) => {
            let row = parseInt(square.substring(0, 1));
            let col = parseInt(square.substring(1));
            document.getElementById(`${row}${col}`).innerHTML = icons.sunk;
          });
        } else {
          document.getElementById('alert').innerHTML = `Hit! ${ship.name}`;
        }
      }
    });
  },

  checkGameOver: function () {
    if (
      parseInt(document.getElementById('misses').innerHTML) == user.maxTurns
    ) {
      document.getElementById(
        'alert'
      ).innerHTML = `GAME OVER! You missed ${user.maxTurns} times.`;
      document.getElementById('winner').innerHTML = 'Computer Wins!';
      document.getElementById('winner').style.display = 'block';
      document.getElementById('winBanner').style.height = '100px';
      let element = document.getElementById('winner');
      let id = 'winner';
      let pos = 0;
      clearInterval(id);
      let idx = setInterval(frame, 5);
      let ct = 0;
      function frame() {
        if (pos == 750) {
          pos = 749;
          ct++;
        } else if (pos == 0) {
          pos = 1;
          ct++;
        } else if (ct % 2 == 0) {
          pos++;
          element.style.left = pos + 'px';
        } else if (ct % 2 == 1) {
          pos--;
          element.style.left = pos + 'px';
        }
      }
      return true;
    } else if (parseInt(document.getElementById('shipsLeft').innerHTML) === 0) {
      document.getElementById(
        'alert'
      ).innerHTML = `GAME OVER! You sunk all ${this.sunkShips.length} ships.`;
      document.getElementById('winner').innerHTML = `${user.name} Wins!`;
      document.getElementById('winner').style.display = 'block';
      document.getElementById('winBanner').style.height = '100px';
      let element = document.getElementById('winner');
      let id = 'winner';
      let pos = 0;
      clearInterval(id);
      let idx = setInterval(frame, 5);
      let ct = 0;
      function frame() {
        if (pos == 750) {
          pos = 749;
          ct++;
        } else if (pos == 0) {
          pos = 1;
          ct++;
        } else if (ct % 2 == 0) {
          pos++;
          element.style.left = pos + 'px';
        } else if (ct % 2 == 1) {
          pos--;
          element.style.left = pos + 'px';
        }
      }
      return true;
    }
    return false;
  },
};