function Game() {
	this.frame = []
	for(var i=0; i<9; i++){
		this.frame.push(new Frame(i+1));
	}
	this.frame.push(new FinalFrame());
	this.totalScore = 0;
	this.finalScore = 0;
};

Game.prototype._frameScore = function(number) {
	if(this.frame[number].checkBonus() === 'Strike') return this._strikeBonus(number);
	if(this.frame[number].checkBonus() === 'Spare') return this._spareBonus(number);
	return this.frame[number].calculateScore()
};

Game.prototype._strikeBonus = function(number) {
	if(this.frame[number+1].checkBonus() === 'Strike') {
		return this.frame[number].calculateScore() + this.frame[number+1].calculateScore() + this.frame[number+1].bowlOneScore
	}
	return this.frame[number].calculateScore() + this.frame[number+1].calculateScore();
};

Game.prototype._spareBonus = function(number) {
	return this.frame[number].calculateScore() + this.frame[number+1].bowlOneScore;
};

Game.prototype.calculateScore = function() {
	for(var frame=0; frame<9; frame++){
		this.totalScore += this._frameScore(frame);
	}
	return this.totalScore;
};

Game.prototype.calculateFinalScore = function() {
	for(var frame=0; frame<9; frame++){
		this.totalScore += this._frameScore(frame);
	}
	this.finalScore = this.totalScore + this._finalFrameScore()
	return this.finalScore
};

Game.prototype._finalFrameScore = function() {
	if(this.frame[9].checkBonus() === 'Strike' && this.frame[9].bowlTwoScore === 10) return (10 + this.frame[9].bowlThreeScore);
	if(this.frame[9].checkBonus() === 'Strike') return (this.frame[9].bowlTwoScore + this.frame[9].bowlThreeScore);
	if(this.frame[9].checkBonus() === 'Spare') return (20 + this.frame[9].bowlThreeScore);
	return this.frame[9].calculateScore() + this.frame[9].bowlThreeScore;
};



