describe('Frame', function() {

	var frame

	beforeEach(function() {
		frame = new Frame
	});

	describe('Each frame', function() {

		it('should start with ten pins', function() {
			expect(frame.pins).toEqual(10)
		});

		it('should have two turns', function() {
			expect(frame.turns).toEqual(2)
		});

		it('should be able to calculate the remaining pins after two bowls', function() {
			frame.bowlOne(3)
			frame.bowlTwo(3)
			expect(frame.calculateScore()).toEqual(6)
		});

	});

	describe('Each turn', function() {

		it('should decrease the number of pins if pins are hit', function() {
			frame.bowlOne(3)
			expect(frame.pins).toEqual(7)
		});

		it('should be able to calculate the score of the turn', function() {
			frame.bowlOne(4)
			expect(frame.bowlOneScore).toEqual(4)
		});

	});

});