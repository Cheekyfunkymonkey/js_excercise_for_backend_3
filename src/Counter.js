class Counter {
  constructor() {
    this._count = 0;
  }
  increment() {
    return this._count++;
  }
  decrement() {
    return this._count--;
  }
}

module.exports = Counter;
