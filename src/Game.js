function Game() {
	this.frame = []
	for(var i=0; i<10; i++){
		this.frame.push(new Frame(i+1));
	}
	this.totalScore = 0;
};

Game.prototype.frameScore = function(number) {
	return this.frame[number].calculateScore()
};

Game.prototype.calculateScore = function() {
	for(var frame=0; frame<9; frame++){
		this.totalScore += this.frameScore(frame);
	}
	return this.totalScore;
};

