function outerFunction(arg: string) {
  var variableInOuterFunction = arg;
  return function() {
    console.log(variableInOuterFunction);
  };
}

var innerFunction = outerFunction("hello closure!");
console.log(innerFunction.toString());
// Note the outerFunction has returned
innerFunction(); // logs hello closure!
