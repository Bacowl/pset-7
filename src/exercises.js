function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }  else if (a[0] !== b[0] && a[a.length -1] !== b[b.length -1]){
    return false;
  } else {
    return true;
  }

  // write your code here
}

function endsMeet(values, n) {
  var ans = []
  if (values == undefined || n < 0 || values.length < n ) {
    return [];
  } else {
    for (var i = 0; i < n; i++) {
     ans[ans.length] = values[i]
    }
    for (var i = 0; i < n; i++) {
      ans[ans.length] = values[values.length -n +i]
  }
  return ans
}
}
function difference(numbers) {
  var high = -999999999999
  var low = 999999999999
  var undefined2 = false
  if (numbers == null || numbers.length < 1 ) {
    return undefined;
    var undefined2 = true
  } else {
    for (var i = 0; i < numbers.length; i++) {
      if (isNaN(numbers[i])) {
        return undefined;
        var undefined2 = true;
      } else {
        if (numbers[i] > high) {
          high = numbers[i]
        }
        if (numbers[i] < low) {
          low = numbers[i]
        }
      }

    }
    if (undefined2 == false) {
      return high - low
    }
  }
}

function max(number) {
  if (numbers == null || numbers.length < 3 || numbers.length % 2 != 0 ) {
    return undefined;
    var undefined2 = true
  }  else {
    for (var i = 0; i < numbers.length; i++) {
      if (isNaN(numbers[i])) {
        return undefined;
        var undefined2 = true;
      }
    }
    var max = numbers[numbers.length]
    var min = numbers[0]
    var mid = numbers[numbers.length / 2]
}
if (undefined2 = false) {
  return Math.max(max,min,mid)
}
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
