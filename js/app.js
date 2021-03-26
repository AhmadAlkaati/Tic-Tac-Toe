function game() {
  let x = true;
  let o = false;
  const oClass = 'O';
  const xClass = 'X';
  const boxes = document.querySelectorAll('.box');
  const playerTurnValue = document.querySelector('.player-turn-value span');
  const resultDiv = document.querySelector('.result');
  const resultValue = document.querySelector('.result-value');
  const startAgainBtn = document.querySelector(' .start-again');

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  playerTurnValue.innerHTML = 'X';
  boxes.forEach((box) => {
    box.addEventListener('click', handleClick, { once: true });
  });

  function handleClick(e) {
    const clickedBox = e.target;
    const currentClass = x ? xClass : oClass; // if x is true then set currentClass to 'x' , otherwise set it to 'o'
    clickedBox.classList.add(currentClass);
    if (x == true) {
      clickedBox.innerHTML = 'X';
      x = false;
      o = true;
      playerTurnValue.innerHTML = 'O';
    } else if (o == true) {
      clickedBox.innerHTML = 'O';
      x = true;
      o = false;
      playerTurnValue.innerHTML = 'X';
    }
    if (checkWin(currentClass)) {
      resultDiv.style.display = 'flex';
      resultValue.innerHTML = `PLayer ${currentClass} is winner`;
    }

    if (checkDraw()) {
      resultDiv.style.display = 'flex';
      resultValue.innerHTML = `Draw`;
    }
  }

  function checkWin(currentClass) {
    return winningCombinations.some((comb) => {
      return comb.every((index) => {
        boxesComb = boxes[index].classList.contains(currentClass);
        return boxesComb;
      });
    });
  }

  function checkDraw() {
    return [...boxes].every((box) => {
      return box.classList.contains(xClass) || box.classList.contains(oClass);
    });
  }

  startAgainBtn.addEventListener('click', startAgain);
  function startAgain() {
    location.reload();
  }
}
game();
