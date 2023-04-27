// @ts-nocheck
import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import PlayScene from './scenes/PlayScene';

function launch(containerId) {
  console.log("launching game")
	return new Phaser.Game({
		type: Phaser.AUTO,
		width: 800,
		height: 600,
		parent: containerId,
		physics: {
			default: 'arcade',
			arcade: {
				gravity: { y: 300 },
				debug: false
			}
		},
		scene: [BootScene, PlayScene]
	});
}

export default launch;
export { launch };
