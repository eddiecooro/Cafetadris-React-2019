function fib(n) {
  if (n <= 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
self.addEventListener('message', message => {
  const n = message.data;
  self.postMessage(fib(n));
});
