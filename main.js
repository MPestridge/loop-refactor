'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    let sum = base;
    return arr.reduce((prev, base) => {
      return base += prev;
    }, base);
  },

  someObjsContainProp: (arr, prop) => {
    return arr.some(function (val) {
      if (val.hasOwnProperty(prop)) {
        return true;
      }
    })
    return false;
  },

  convertNameArrayToObject: (arr) => {
    return arr.map(function(arr) {
      let obj = {};
      obj.first = arr[0];
      obj.last = arr[1];
      return obj;
    })
  },

  objContainsProp: (arr, prop) => {
    return arr.every(function (val) {
      if (val.hasOwnProperty(prop)) {
        return true;
      }
    })
    return false;
  },

  stringMatch: (arr, str) => {
    return arr.filter(function(element){
      return (element.indexOf(str)) > -1;
    })
  },
};
