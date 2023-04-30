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

    const width = this.scale.width
    const height = this.scale.height

    const board = new Board(this, height / 6, width / 5, symbols, 3, 5)

    this.add.existing(
      board
    )

    this.add.text(400, 550, 'Spin', {
      font: '24px Arial',
    }).setOrigin(0.5).setInteractive().on('pointerdown', function () {
      board.spin();
    })
  }

  update() {}
}