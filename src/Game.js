function Game() {
	this.frame = []
	for(var i=0; i<10; i++){
		this.frame.push(new Frame(i+1));
	}
	this.totalScore = 0;
};

Game.prototype._frameScore = function(number) {
	if(this.frame[number].checkBonus() === 'Strike') return this._strikeBonus(number);
	if(this.frame[number].checkBonus() === 'Spare') return this._spareBonus(number);
	return this.frame[number].calculateScore()
};

Game.prototype._strikeBonus = function(number) {
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


