const { calculateBowlingScore, findBestScore } = require('../src/bowlingGameUtility');

describe('Bowling Game Utility', () => {
  describe('Bowling game score calculator', () => {
    it('should throw error when input is not array', () => {
      expect(() => { calculateBowlingScore('qwerty'); }).toThrow('Not an array');
    });
    it('should throw error when input is not array of numbers', () => {
      expect(() => { calculateBowlingScore(['qwerty', 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3]); }).toThrow('Invalid element in array');
    });
    it('should return wrong input when inputs don\'t add up', () => {
      expect(() => { calculateBowlingScore([8, 5, 3, 2]); }).toThrow('Invalid input');
    });
    it('should return total score of a game when input is correct', () => {
      expect(calculateBowlingScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
    });
  });
  describe('Calculates the score in the bowling game', () => {

    it('should give 30 score when scored set1', () => {
      const set1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];

      expect(calculateBowlingScore(set1)).toBe(30);
    });

    it('should give 90 when scored set2', () => {
      const set2 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
      expect(calculateBowlingScore(set2)).toBe(90);
    });

    it('should give 16 when scored set3', () => {
      const set2 = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(calculateBowlingScore(set2)).toBe(16);
    });
    it('should give 136 when scored set3', () => {
      const set2 = [10, 9, 1, 10, 4, 5, 3, 6, 4, 4, 1, 3, 10, 1, 9, 5, 5, 2];
      expect(calculateBowlingScore(set2)).toBe(136);
    });
    it('should give 81 when scored set3', () => {
      const set2 = [10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(calculateBowlingScore(set2)).toBe(81);
    });
    it('should give 48 when scored set3', () => {
      const set2 = [10, 5, 5, 9, 0];
      expect(calculateBowlingScore(set2)).toBe(48);
    });
    it('should give 20 when scored set3', () => {
      const set2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 10];
      expect(calculateBowlingScore(set2)).toBe(20);
    });
  });
  describe('Maximum score calculator', () => {
    it('should return maximum score from multiple games', () => {
      expect(findBestScore([[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]])).toBe(90);
    });
  });
});