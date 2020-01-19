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
if (!number || number.length % 2 == 0 || number.length < 3) {
  return undefined;
} else {
  for (var i = 0; i < number.length; i++) {
    if (isNaN(number[i])) {
      var undefined2 = true;
    }
  }
  if (undefined2 == true) {
    return undefined;
  } else {
    const first = number[0];
    const middle = number[(number.length - 1)/ 2];
    const last = number[number.length -1];

    var newArray = [first, middle, last];

    const greatest = Math.max(...newArray);

    return greatest;
  }
}
}

function middle(values) {
  if (!values || values.length % 2 == 0 || values.length < 3) {
    return [];
  } else {
    const middle = values[(values.length - 1)/ 2];
    const middleMinus = values[((values.length - 1)/ 2)-1]
    const middlePlus = values[((values.length - 1)/ 2)+1]

      var newArray = [middleMinus, middle, middlePlus];
      return newArray;
    }
  }

function increasing(numbers) {
  var stop = true;
  if (!numbers || numbers.length < 3) {
    return false;
  } else {
    for (var i = 0; i < numbers.length; i++) {
      if (isNaN(numbers[i]) || numbers[i] != Math.round(numbers[i])) {
        var undefined2 = true;
      }
    }
    if (undefined2) {
      return false;
    } else {
      for (var i = 0; i < numbers.length -2; i++) {
        if (numbers[i] == numbers[i+1] -1 && numbers[i] == numbers[i + 2] -2 && stop) {
          return true;
          var stop = false;
        }
      }
      if (stop != false) {
        return false
      }
    }
  }
}

function everywhere(values, x) {
  var check = true
  if (!values || !x || values.length < 1) {
    return false;
  } else {
    for (var i = 1; i < values.length - 1; i++) {
      if (values[i] !== x && values[i-1] !== x && values[i+1] !== x) {
        var check = false
      }
    }
    if (check) {
      return true
    } else {
      return false
    }
  }
}

function consecutive(numbers) {
  var stop = true;
  if (!numbers || numbers.length < 3) {
    return false;
  } else {
    for (var i = 0; i < numbers.length; i++) {
      if (isNaN(numbers[i]) || numbers[i] != Math.round(numbers[i])) {
        var undefined2 = true;
      }
    }
    if (undefined2) {
      return false;
    } else {
      for (var i = 0; i < numbers.length -2; i++) {
        if ((numbers[i]/2) - (Math.floor(numbers[i]/2)) == (numbers[i + 1]/2) - (Math.floor(numbers[i + 1]/2)) && (numbers[i]/2) - (Math.floor(numbers[i]/2)) == (numbers[i + 2]/2) - (Math.floor(numbers[i + 2]/2)) && stop) {
          return true;
          var stop = false;
        }
      }
      if (stop != false) {
        return false
      }
    }
  }
}

function balance(numbers) {
  var max = -999999999999;
  var repeat = 1;
  if (!numbers || numbers.length < 2) {
    return false;
  } else {
    for (var i = 0; i < numbers.length; i++) {
      if (isNaN(numbers[i]) || numbers[i] != Math.round(numbers[i])) {
        var undefined2 = true;
      }
    }
    while (repeat > 0) {
      var sum = 0
      var repeat = -1
      //errored part
      if (numbers.length = 2) {
        if (numbers[0] == numbers[1]) {
          undefined2 = false
        } else {
          undefined2 = true
        }
        //no more error after
      } else {
        for (var i = 0; i < numbers.length; i++) {
          if (numebers[i] > min) {
            max = numbers[i]
          }
        }
        for (var i = 0; i < numbers.length; i++) {
          if (numbers[i] == min) {
            var repeat = repeat + 1;
          }
        }
        for (var i = 0; i < numbers.length; i++) {
          if (numbers[i] > 0) {
            sum = sum + numbers[i]
          } else {
            max = max + numbers[i]
          }
        }
        if (sum == max) {
          undefined2 = false;
        }
      }
    }
    if (undefined2) {
      return false;
    } else {
      return true;
    }
  }
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
