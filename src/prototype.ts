function printStuff(myDocs: string): void {
  this.doc = myDocs;
}

printStuff.prototype.print = () => {
  console.log(this.doc);
};

var newObj = printStuff("hii");
