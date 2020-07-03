class BirthdayNiviScene extends Phaser.Scene {
    constructor() {
        super({ key: "BirthdayNiviScene" });
    }

    preload() {
        this.load.image("background", "sky_bg.jpg");
        this.load.image("aju", "aju_new.png");
        this.load.image("nivi", "nivi_birthday.png");
        this.load.spritesheet( "balloon" , "Balloon.png", { frameWidth: 50, frameHeight: 100 });
        this.load.spritesheet( "bearballoon" , "Balloon Bear.png", { frameWidth: 200, frameHeight: 200 });
    }

    create() {
        gameState.background = this.add.image(400, 300, "background");

        gameState.aju = this.add.sprite(700, 300, "aju");
        gameState.nivi = this.add.sprite(400, 300, "nivi");
        gameState.nivi.depth = 1;

        gameState.text = this.add.text(0, 0, "HAPPY\nBIRTHDAY\nNIVI", { font: "60pt Impact", stroke: "black", strokeThickness: 5 });

        const balloons = this.physics.add.group();
        
        this.anims.create({
            key: "movement",
            frames: this.anims.generateFrameNumbers('balloon', { start: 0, end: 4 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "bearmovement",
            frames: this.anims.generateFrameNumbers('bearballoon', { start: 0, end: 4 }),
            frameRate: 10,
            repeat: -1
        });

        function balloonGen()
        {
            const xCoord = Math.random() * 600;
            var balloon = balloons.create(xCoord, 700, "balloon");
            balloon.anims.play("movement", true);
        }
        function bearBalloonGen()
        {
            const xCoord = Math.random() * 600;
            var balloon = balloons.create(xCoord, 700, "bearballoon");
            balloon.anims.play("bearmovement", true);
        }
        

        const balloonGenLoop = this.time.addEvent({
            callback: balloonGen,
            delay: 100,
            callbackScope: this,
            loop: true
        })
        const bearGenLoop = this.time.addEvent({
            callback: bearBalloonGen,
            delay: 500,
            callbackScope: this,
            loop: true
        })
        
    }

    update() {
        
    }
}