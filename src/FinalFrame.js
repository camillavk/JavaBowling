function FinalFrame() {
	this.pins = 10;
	this.bowlOneScore = 0;
	this.bowlTwoScore = 0;
	this.bowlThreeScore = 0;
};

FinalFrame.prototype.bowlOne = function(number) {
	if(number<this.pins) {
		this.pins -= number
	}
	this.bowlOneScore = number
};

FinalFrame.prototype.bowlTwo = function(number) {
	if(this.checkBonus() === 'Strike') this.pins = 10;
	if(number<this.pins){
		this.pins -= number
	}
	this.bowlTwoScore = number
};

FinalFrame.prototype.bowlThree = function(number) {
	if(this.checkBonus() === 'Strike' || 'Spare') this.pins = 10;
	if(number<this.pins){
		this.pins -= number
	}
	this.bowlThreeScore = number
};

FinalFrame.prototype.calculateScore = function() {
	return this.bowlOneScore + this.bowlTwoScore 
};

FinalFrame.prototype.checkBonus = function() {
	if(this.bowlOneScore === 10) return 'Strike'
	if(this.calculateScore() === 10) return 'Spare'
	return 'none'
};
