const fibonacci = function(num) {
    if(typeof num !== 'number' ){
        num = parseInt(num)
    }
    let numAnterior = 0
    let numPosterior = 1
    let numFibonacci = 0

    
    for (let i = 2; i <= num; i++) {

    
         let siguiente = numAnterior + numPosterior
         numAnterior = numPosterior
         numPosterior = siguiente
         numFibonacci = siguiente
     
      
}
if (num < 0) return "OOPS"
if(num === 0) return 0
if(num === 1) return 1

return numFibonacci;
};
fibonacci(8)

// Do not edit below this line
module.exports = fibonacci;
