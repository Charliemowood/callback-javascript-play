var functionCaller = function(myCallback, number) {
  return myCallback(2);
}

var increment = function(number) {
  return number + 1;
}

var square = function(number) {
  return (number) ** 2;
}

var doSomeMathsForMe = function(number, callback) {
  return callback(number);
}

console.log(doSomeMathsForMe(1, increment));
console.log(doSomeMathsForMe(22, square));
