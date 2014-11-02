describe('Game', function() {

	var game
	var frame
	var finalframe

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
			game.frame[0].bowlOne(9)
			game.frame[1].bowlOne(3)
			game.frame[1].bowlTwo(3)
			game.calculateScore()
			expect(game.totalScore).toEqual(15);
		});

		it('should score zero for a gutter game', function() {
			for(var i=0; i<10; i++){
				game.frame[i].bowlOne(0);
				game.frame[i].bowlTwo(0);
			}
		game.calculateScore()
		expect(game.totalScore).toEqual(0);
		});

		it('should be able to give bonus points for strike', function() {
			game.frame[0].bowlOne(10)
			game.frame[1].bowlOne(5)
			game.frame[1].bowlTwo(2)
			game.calculateScore()
			expect(game.totalScore).toEqual(24)
		});

		it('should be able to give bonus points for spare', function() {
			game.frame[0].bowlOne(5)
			game.frame[0].bowlTwo(5)
			game.frame[1].bowlOne(3)
			game.calculateScore()
			expect(game.totalScore).toEqual(16)
		});

		it('should score 300 for a perfect game', function() {
			for(var i=0; i<10; i++){
				game.frame[i].bowlOne(10);
			}
			game.frame[9].bowlTwo(10);
			game.frame[9].bowlThree(10);
			game.calculateFinalScore()
			expect(game.finalScore).toEqual(300);
		});

		it('can calculate score for final frame', function() {
			for(var i=0; i<10; i++){
				game.frame[i].bowlOne(10);
			}
			game.frame[9].bowlTwo(10);
			game.frame[9].bowlThree(5);
			game.calculateFinalScore()
			expect(game.finalScore).toEqual(295);
		});

		it('can calculate score for final frame with spare', function() {
			for(var i=0; i<9; i++){
				game.frame[i].bowlOne(10);
			}
			game.frame[9].bowlOne(5)
			game.frame[9].bowlTwo(5);
			game.frame[9].bowlThree(10);
			game.calculateFinalScore()
			expect(game.finalScore).toEqual(290);
		});

	});

});



