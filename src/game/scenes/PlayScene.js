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


    // const board = new Board(this, 50, 50, symbols, 10, 14)
    // this.add.existing(board)
    const board1 = new Board(this, 50, 50, symbols, 3, 5)
    const board2 = new Board(this, 400, 50, symbols, 3, 5)
    const board3 = new Board(this, 50, 250, symbols, 3, 5)
    const board4 = new Board(this, 400, 250, symbols, 3, 5)
    
    this.add.existing(
      board1
    )
    this.add.existing(
      board2
    )
    this.add.existing(
      board3
    )
    this.add.existing(
      board4
    )
    // current score
    let money = 100;







    this.add.text(400, 550, 'Spin', {
      font: '24px Arial',
      fill: '#fff'
    }).setOrigin(0.5).setInteractive().on('pointerdown', function () {
      // board.spin()
      board1.spin()
      board2.spin()
      board3.spin()
      board4.spin()
      // subtract money
      money = money - 10;
    })
  }

  update() {}
}