function Frame() {
	this.pins = 10;
	this.bowlOneScore = 0;
	this.bowlTwoScore = 0;
	this.bowlThreeScore = 0;
};

Frame.prototype.bowlOne = function(number) {
	if(number<this.pins) {
		this.pins -= number
	}
	this.bowlOneScore = number
};

Frame.prototype.bowlTwo = function(number) {
	if(number<this.pins){
		this.pins -= number
	}
	this.bowlTwoScore = number
};

// Frame.prototype.bowlThree = function(number) {
// 	if(number<this.pins){
// 		this.pins -= number
// 	}
// 	this.bowlThreeScore = number
// };

Frame.prototype.calculateScore = function() {
	return this.bowlOneScore + this.bowlTwoScore
};







