class Foo {
  foo: string = (function bar() {
    console.log("testing");
    return "value";
  })();
}

var a = new Foo();
console.log(a.foo);
