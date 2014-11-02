function Game() {
	this.frame = []
	for(var i=0; i<10; i++){
		this.frame.push(new Frame(i+1));
	}
	
};

Game.prototype.frameScore = function(number) {
	return this.frame[number].calculateScore()
};