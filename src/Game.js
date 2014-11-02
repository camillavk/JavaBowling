function Game() {
	this.frame = []
	for(var i=0; i<10; i++){
		this.frame.push(new Frame(i+1));
	}
	this.totalScore = 0;
	this.frameScore = 0;
};

Game.prototype._frameScore = function(one, two) {
	this.frameScore = this.frame[one].calculateScore()
	return this.frameScore
	// if(this.frame[one].bowlOneScore = 10){
	// 	this.frameScore = 
		// return this.frameScore
	// }
};

Game.prototype.calculateScore = function() {
	for(var frame=0; frame<9; frame++){
		this.totalScore += this._frameScore(frame);
	}
	return this.totalScore;
};


// this.frame[one].bowlOneScore + this.frame[two].bowlOneScore + this.frame[two].bowlTwoScore + this.frame[two].bowlOneScore + this.frame[two].bowlTwoScore