// Dari inisiasi stack dengan jumlah maksimal elemen 10, cobalah implementasikan operasi pop.

module.exports = class Stack {
  constructor() {
    // TODO: answer here

    this.data = [];
    this.top = -1;

    this.size = 10;
  }

  push(elemen) {
    // TODO: answer here

    if (this.top < this.size - 1) {
      this.top += 1;
      return this.data.push(elemen);
    } else {
      throw "stack overflow";
    }
  }

  pop() {
    // TODO: answer here

    if (this.top == -1) {
      throw "stack underflow";
    } else {
      let pop = this.data.pop();
      this.top -= 1;
      return pop;
    }
  }
};
