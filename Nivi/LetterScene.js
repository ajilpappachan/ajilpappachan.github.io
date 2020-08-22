class LetterScene extends Phaser.Scene
{
    constructor()
    {
        super({key: "LetterScene"});
    }

    preload()
    {
        this.load.image("background", "background.png");
        this.load.image("nivi", "nivi_new.png");
        this.load.image("letter", "letter.png");
        this.load.image("aju", "aju_new.png");
        this.load.image("letterContent", "LetterContent.png");
    }

    create()
    {
        gameState.background = this.add.image(0, 300, "background");
        gameState.background.move = this.tweens.add({
            targets: gameState.background,
            x: 400,
            duration: 10000,
            yoyo: true,
            repeat: -1
        });

        gameState.letter = this.add.sprite(100, 300, "letter");
        gameState.letterPrompt = this.add.text(25, 200, "Drag yourself here", { font: "20pt Impact", stroke: "black", strokeThickness: 5 });
        gameState.nivi = this.add.sprite(700, 300, "nivi").setInteractive();
        gameState.aju = undefined;

        this.input.setDraggable(gameState.nivi);
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;
    
        });

    }

    update()
    {
        if(checkOverlap(gameState.nivi, gameState.letter))
        {
            this.add.sprite(500, 250, "letterContent");
            gameState.aju = this.add.sprite(710, 450, "aju");
            gameState.nivi.depth = 1;
            gameState.letterPrompt.destroy();
        }

        if(gameState.aju !== undefined)
        {
            if(checkOverlap(gameState.nivi, gameState.aju))
            {
                this.scene.stop("LetterScene");
                this.scene.start("AjuNiviScene");
            }
        }
    }
}

function checkOverlap(spriteA, spriteB) {

    var boundsA = new Phaser.Geom.Rectangle(spriteA.getBounds().x, spriteA.getBounds().y, spriteA.getBounds().width, spriteA.getBounds().height);
    var boundsB = new Phaser.Geom.Rectangle(spriteB.getBounds().x, spriteB.getBounds().y, spriteB.getBounds().width, spriteB.getBounds().height);
    return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);

}