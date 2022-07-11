// Dari inisiasi stack dengan maksimal elemen sebanyak 10, implementasikan operasi peek.

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

  peek() {
    // TODO: answer here

    if (this.top == -1) {
      throw "stack is empty";
    } else {
      return this.data[this.top];
    }
  }
};
