function Frame() {
	this.pins = 10;
	this.turns = 2;
	this.bowlOneScore = null;
	this.bowlTwoScore = null;
};

Frame.prototype.bowlOne = function(number) {
	this.pins -= number
	this.bowlOneScore = number
};

Frame.prototype.bowlTwo = function(number) {
	this.pins -= number
	this.bowlTwoScore = number
};

Frame.prototype.calculateScore = function() {
	return this.bowlOneScore + this.bowlTwoScore
};



