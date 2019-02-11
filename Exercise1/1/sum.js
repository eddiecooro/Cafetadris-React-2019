let sum = (a, b) => {
  let sum = a + b;
  if (typeof a !== 'number' || isNaN(a) || typeof b !== 'number' || isNaN(b))
    throw new Error('Invalid argument');
  return sum;
};

let closureSum = a => b => sum(a, b);

module.exports = {
  sum,
  closureSum
};
