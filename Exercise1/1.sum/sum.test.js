import { sum, closureSum } from './sum';

describe('sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toEqual(3);
  });

  it('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toEqual(5);
  });
  it('should be associative', () => {
    let a = 2;
    let b = 3;
    let expected = 5;
    expect(sum(a, b)).toEqual(expected);
    expect(sum(b, a)).toEqual(expected);
  });
});

describe('closureSum', () => {
  it('should return a function after accepting first number', () => {
    expect(closureSum(1)).toBeInstanceOf(Function);
  });
  it('adds 1 + 2 to equal 3', () => {
    expect(closureSum(1)(2)).toEqual(3);
  });

  it('adds 2 + 3 to equal 5', () => {
    expect(closureSum(2)(3)).toEqual(5);
  });
});
