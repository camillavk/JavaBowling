describe('Game', function() {

	var game
	var frame

	beforeEach(function() {
		game = new Game
	});

	describe('Playing the game', function() {

		it('starts with nine normal frames', function() {
			expect(game.frame.length).toEqual(10)
		});

		it('it can display the score of a frame', function() {
			game.frame[0].bowlOne(3)
			game.frame[0].bowlTwo(4)
			expect(game.frameScore(0)).toEqual(7)
		});

		it('it can calculate the total score', function() {
			game.frame[0].bowlOne(10)
			game.frame[1].bowlOne(3)
			game.frame[1].bowlTwo(3)
			game.calculateScore()
			expect(game.totalScore).toEqual(16)
		});

	});

});