const { sum, closureSum } = require('./sum');

describe('sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toEqual(3);
  });

  it('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toEqual(5);
  });

  describe('error handling', () => {
    it('throw error when passing invalid arguments', () => {
      expect(() => sum(NaN, undefined)).toThrowError();
      expect(() => sum()).toThrowError();
      expect(() => sum(null, 0)).toThrowError();
    });
  });
});

describe('closureSum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(closureSum(1)(2)).toEqual(3);
  });

  it('adds 2 + 3 to equal 5', () => {
    expect(closureSum(2)(3)).toEqual(5);
  });

  describe('error handling', () => {
    it('throw error when passing invalid arguments', () => {
      expect(() => closureSum(NaN)(undefined)).toThrowError();
      expect(() => closureSum()()).toThrowError();
      expect(() => closureSum(null)(0)).toThrowError();
    });
  });
});
