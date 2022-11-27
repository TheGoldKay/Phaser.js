let gameScene = new Phaser.Scene('Game');

gameScene.init = function(){
    this.snake_dir = "left";

}

gameScene.preload = function(){
  this.load.image('head', "darkgray.png");
  this.left = this.input.keyboard.addKey('a');
  this.right = this.input.keyboard.addKey('d');
  this.up = this.input.keyboard.addKey('W');
  this.down = this.input.keyboard.addKey('s');
}

gameScene.create = function(){
  this.head = this.add.sprite(40, 40, 'head');
  this.input.keyboard.on('keydown_W', this.update, this);
}

gameScene.update = function(){
  if(this.left.isDown){
    this.head.x -= 1;
  }
  else if(this.right.isDown){
    this.head.x += 1;
  }
  else if(this.up.isDown){
    this.head.y -= 1;
  }
  else if(this.down.isDown){
    this.head.y += 1;
  }
}



let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    scene: gameScene,
    backgroundColor: "#1e0e4d",
};

let game = new Phaser.Game(config);
