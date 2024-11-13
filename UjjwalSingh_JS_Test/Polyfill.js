// Implement polyfills for reduce and filter in JavaScript.

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, intiVal) {
    if (typeof callback !== "function") {
      throw new TypeError("Callback must be a function");
    }
    if (this === null) {
      throw new Error("myReduce called on null");
    }
    let startIndex = 0;
    let acc = intiVal;
    if (intiVal === undefined) {
      if (this.length == 0) {
        throw new Error("maReduce called on empty array");
      }
      acc = this[0];
      startIndex = 1;
    }
    for (let i = startIndex; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }
    return acc;
  };
}

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback) {
    if (this === null) {
      throw new Error("myFilter is called on null");
    }
    if (typeof callback !== "function") {
      throw new TypeError("Callback must be a function");
    }
    let result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
}
