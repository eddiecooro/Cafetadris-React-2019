var a = 2;

function foo(a) {
  console.log(this.a);
}

function bar(a, b, c) {
  console.log(a, b, c);
  this.foo();
}

let obj = {
  a: 3,
  arr: [1, 2, 3, 4, 5],
  foo: foo,
  bar: bar,
  baz: function() {
    (function() {}.bind(this)(() => {}));
    this.arr.forEach(element => {
      console.log(this.a + element);
    });
  }
};
let bind = function(fn, th) {
  return function(...args) {
    return fn.apply(th, args);
  };
};
// let bindedFoo = function() {
//   foo.call(obj)
// }
obj.foo = foo.bind(obj);
let hello = obj.foo;
hello();
obj.baz();

function New(fn) {
  let th = {};
  th.constructor = fn;
  return function(...args) {
    fn.apply(th, args);
    return th;
  };
}
function Foo(name) {
  this.name = name;
  console.log(this);
}
Foo.bind({
  myObj: true
});
new Foo('Hello');
// let myFoo = new Foo("Eddie");
// console.log(myFoo);
// let mySecondFoo = New(Foo)("Mamad")
// console.log(mySecondFoo)

// obj.bar()
// let myBar = obj.bar;

// obj.baz();

class MyClass {}
