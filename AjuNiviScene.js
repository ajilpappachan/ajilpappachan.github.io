class AjuNiviScene extends Phaser.Scene {
    constructor() {
        super({ key: "AjuNiviScene" });
    }

    preload() {
        this.load.image("background", "assets/background.png");
        this.load.image("aju", "assets/aju_new.png");
        this.load.image("nivi", "assets/nivi_new.png");
    }

    create() {
        gameState.background = this.add.image(0, 300, "background");
        gameState.background.move = this.tweens.add({
            targets: gameState.background,
            x: 400,
            duration: 10000,
            yoyo: true,
            repeat: -1
        });

        gameState.aju = this.add.sprite(100, 300, "aju");
        gameState.nivi = this.add.sprite(700, 300, "nivi");

        gameState.aju.move = this.tweens.add({
            targets: gameState.aju,
            x: 350,
            duration: 5000,
            ease: "Sine.easeInOut",
            yoyo: true,
            repeat: -1
        });

        gameState.nivi.move = this.tweens.add({
            targets: gameState.nivi,
            x: 450,
            duration: 5000,
            ease: "Sine.easeInOut",
            yoyo: true,
            repeat: -1
        });

        gameState.text = this.add.text(200, 100, "", { font: "60pt Impact", stroke: "black", strokeThickness: 5 });
    }

    update() {
        if (checkOverlap(gameState.aju, gameState.nivi)) {
            gameState.text.text = "I love You <3";
        }
        else {
            gameState.text.text = "";
        }
    }
}

function checkOverlap(spriteA, spriteB) {

    var boundsA = new Phaser.Geom.Rectangle(spriteA.getBounds().x, spriteA.getBounds().y, spriteA.getBounds().width, spriteA.getBounds().height);
    var boundsB = new Phaser.Geom.Rectangle(spriteB.getBounds().x, spriteB.getBounds().y, spriteB.getBounds().width, spriteB.getBounds().height);
    return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);

}