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
			expect(game._frameScore(0)).toEqual(7)
		});

		it('it can calculate the total score', function() {
			game.frame[0].bowlOne(10)
			game.frame[1].bowlOne(3)
			game.frame[1].bowlTwo(3)
			game.calculateScore()
			expect(game.totalScore).toEqual(16);
		});

		it('should score zero for a gutter game', function() {
			for(var i=0; i<10; i++){
				game.frame[i].bowlOne(0);
				game.frame[i].bowlTwo(0);
			}
		game.calculateScore()
		expect(game.totalScore).toEqual(0);
		});

		xit('should be able to give bonus points for strike', function() {
			game.frame[0].bowlOne(10)
			game.frame[1].bowlOne(5)
			game.frame[1].bowlTwo(2)
			game.calculateScore()
			expect(game.totalScore).toEqual(24)
		});

		xit('should be able to give bonus points for spare', function() {
			game.frame[0].bowlOne(5)
			game.frame[0].bowlTwo(5)
			game.frame[1].bowlOne(3)
			game.calculateScore()
			expect(game.totalScore).toEqual(16)
		});

	});

});

