const removeFromArray = function(Array, ...args) {
let filterArray = Array.filter(item => !args.includes(item))
return filterArray;
};


removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
