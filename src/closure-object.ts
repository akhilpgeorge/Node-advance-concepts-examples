function createCounter() {
  let val: number = 0;
  return {
    increment() {
      val++;
    },
    getVal() {
      return val;
    }
  };
}

let counter = createCounter();
console.log("num=", counter.getVal()); //0
counter.increment();
console.log("num=", counter.getVal()); //1

for (let i = 0; i < 10; i++) {
  console.log(counter.getVal());
  counter.increment();
}
