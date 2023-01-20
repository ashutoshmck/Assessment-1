const { calculateBowlingScore, findBestScore } = require('../src/bowlingGameUtility');

describe('Bowling Game Utility',()=>{
  describe('Bowling game score calculator',()=>{
    it('should throw error when input is not array', ()=> {
      expect(()=> {calculateBowlingScore('qwerty');}).toThrow('Not an array');
    });
    it('should throw error when input is not array of numbers', ()=> {
      expect(()=> {calculateBowlingScore(['qwerty',3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3]);}).toThrow('Invalid element in array');
    });
    it('should return wrong input when inputs don\'t add up', ()=> {
      expect(()=> {calculateBowlingScore([8, 5, 3, 2]);}).toThrow('Invalid input');
    });
    it('should return total score of a game when input is correct', ()=> {
      expect(calculateBowlingScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
    });
  });
  describe('Maximum score calculator',()=>{
    it('should return maximum score from multiple games', ()=> {
      expect( findBestScore([[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6],[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]])).toBe(90);
    });
  });
});