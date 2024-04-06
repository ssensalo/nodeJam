function sum (arr) {
  // Addition
  return arr.reduce(function(a, b) { 
    return a + b
  }, 0)
}

module.exports.sum = sum
