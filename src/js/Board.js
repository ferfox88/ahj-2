export default class Board {
  constructor() {
    this.board = 16;
    this.cells = [];
  }

  addBoard() {
    const body = document.querySelector('body');

    body.innerHTML = `
      <div class="board-container">
      </div>
      `;

    const container = document.querySelector('.board-container');

    for (let i = 0; i < this.board; i += 1) {
      const element = document.createElement('div');
      element.classList.add('cell');
      container.insertAdjacentElement('beforeend', element);
    }
  }

  generatePosition() {
    this.cells = Array.from(document.querySelectorAll('.cell'));
    const position = Math.floor(Math.random() * this.board);
    let positionActive = null;

    this.cells.forEach((element) => {
      if (element.classList.contains('goblin')) {
        element.classList.remove('goblin');
        positionActive = position;
      }
    });
    if (positionActive !== position) {
      this.cells[position].classList.add('goblin');
    }
  }

  start() {
    setInterval(() => {
      this.generatePosition();
    }, 1000);
  }
}
