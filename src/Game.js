function Game() {
	this.frame = []
	for(var i=0; i<10; i++){
		this.frame.push(new Frame(i+1));
	}
	this.totalScore = 0;
};

Game.prototype.frameScore = function(one, two) {
	return this.frame[one].calculateScore()
	if(this.frame[one].bowlOneScore = 10){
		return this.frame[one].bowlOneScore + this.frame[two].bowlOneScore + this.frame[two].bowlTwoScore
	}
};

Game.prototype.calculateScore = function() {
	for(var frame=0; frame<9; frame++){
		this.totalScore += this.frameScore(frame);
	}
	return this.totalScore;
};
