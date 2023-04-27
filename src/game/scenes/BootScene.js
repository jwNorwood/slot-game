import { Scene } from 'phaser'
import sky from "../assets/sky.png"
import coin from '../assets/coin.png'
import coins from '../assets/coins.png'
import gem from '../assets/gem.png'
import orange from '../assets/orange.png'
import green from '../assets/green.png'
import wild from '../assets/wild.png'
import jackpot from '../assets/jackpot.png'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', sky)
    this.load.image('coin', coin)
    this.load.image('coins', coins)
    this.load.image('gem', gem)
    this.load.image('orange', orange)
    this.load.image('green', green)
    this.load.image('wild', wild)
    this.load.image('jackpot', jackpot)
  }

  create () {
    this.scene.start('PlayScene')
  }
}
