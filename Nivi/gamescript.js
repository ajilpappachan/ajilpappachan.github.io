const gameState = {};

const config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    canvas: document.getElementById("MainCanvas"),
    physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: -100 },
          enableBody: true,
        }
      },
    scene: [BirthdayNiviScene, LetterScene, AjuNiviScene]
};

const game = new Phaser.Game(config);
