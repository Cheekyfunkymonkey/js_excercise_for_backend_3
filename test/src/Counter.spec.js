const assert = require("power-assert");
const Counter = require("../../src/Counter.js");

describe("Count.js test", () => {
  it("should have _count property", () => {
    const counter = new Counter();
    assert.equal(counter.hasOwnProperty("_count"), true);
  });
  it("_count property should have default value 0", () => {
    const counter = new Counter();
    assert.equal(counter._count, 0);
  });
  it("should have increment method", () => {
    const counter = new Counter();
    assert.equal(typeof counter.increment === "function", true);
  });
  it("increment method should increase _count property by 1", () => {
    const counter = new Counter();
    assert.equal(counter._count, 0);

    counter.increment();
    assert.equal(counter._count, 1);
  });
  it("should have decrement method", () => {
    const counter = new Counter();
    assert.equal(typeof counter.decrement === "function", true);
  });
  it("decrement method should decrease _count property by 1", () => {
    const counter = new Counter();
    assert.equal(counter._count, 0);

    counter.decrement();
    assert.equal(counter._count, -1);
  });
});
