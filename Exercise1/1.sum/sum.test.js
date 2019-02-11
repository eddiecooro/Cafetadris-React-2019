const { sum, closureSum } = require('./sum');

describe('sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toEqual(3);
  });

  it('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toEqual(5);
  });
});

describe('closureSum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(closureSum(1)(2)).toEqual(3);
  });

  it('adds 2 + 3 to equal 5', () => {
    expect(closureSum(2)(3)).toEqual(5);
  });
});
