import {
  Scene
} from 'phaser'
import Board from '../components/Board'
import symbols from '../constants/symbols'

export default class PlayScene extends Scene {
  constructor() {
    super({
      key: 'PlayScene'
    })
  }

  create() {
    this.add.image(400, 300, 'sky')

    //get the width and height of the game
    const width = this.scale.width
    const height = this.scale.height

    // const board = new Board(this, 50, 50, symbols, 10, 14)
    // this.add.existing(board)
    const board = new Board(this, height / 6, width / 5, symbols, 3, 5)
    // const board1 = new Board(this, 50, 50, symbols, 3, 5)
    // const board2 = new Board(this, 400, 50, symbols, 3, 5)
    // const board3 = new Board(this, 50, 250, symbols, 3, 5)
    // const board4 = new Board(this, 400, 250, symbols, 3, 5)
    
    this.add.existing(
      board
    )

    let money = 100;







    this.add.text(400, 550, 'Spin', {
      font: '24px Arial',
      fill: '#fff'
    }).setOrigin(0.5).setInteractive().on('pointerdown', function () {
      board.spin();
    })
  }

  update() {}
}