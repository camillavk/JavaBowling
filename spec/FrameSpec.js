describe('Frame', function() {

	var frame

	beforeEach(function() {
		frame = new Frame
	});

	describe('Each frame', function() {

		it('should start with ten pins', function() {
			expect(frame.pins).toEqual(10)
		});

		it('should be able to calculate the remaining pins after two bowls', function() {
			frame.bowlOne(3)
			frame.bowlTwo(3)
			expect(frame.calculateScore()).toEqual(6)
		});

		it('should know if the throw was a strike', function() {
			frame.bowlOne(10)
			expect(frame.checkBonus()).toEqual('Strike')
		});

		it('should know if it was a spare', function() {
			frame.bowlOne(5)
			frame.bowlTwo(5)
			expect(frame.checkBonus()).toEqual('Spare')
		});

		it('should know if there are no bonuses', function() {
			frame.bowlOne(2)
			frame.bowlTwo(2)
			expect(frame.checkBonus()).toEqual('none')
		})

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

		it('should not be able to hit more than ten pins', function() {
			frame.bowlOne(10)
			expect(frame.bowlTwoScore).toEqual(0)
		});

	});

});