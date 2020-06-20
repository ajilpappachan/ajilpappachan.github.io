const gameState = {};

const config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    scene: [LetterScene, AjuNiviScene]
};

const game = new Phaser.Game(config);
