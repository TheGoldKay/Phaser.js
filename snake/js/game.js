let gameScene = new Phaser.Scene('Game');

gameScene.init = function(){
    this.snake_dir = "left";
}

gameScene.preload = function(){
  this.load.image('head', "darkgray.png");
}

gameScene.create = function(){
  this.head = this.add.sprite(40, 40, 'head');
}

gameScene.update = function(){
  this.head.x += 1;
  this.head.y += 1;
}



let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    scene: gameScene,
    backgroundColor: "#1e0e4d",
};

let game = new Phaser.Game(config);
