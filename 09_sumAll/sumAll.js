const sumAll = function (a, b) {
    if (a < 0 || b < 0) {
        console.log("ERROR");
        return "ERROR"
    }
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        console.log("ERROR");
        return "ERROR";
        
    }
    if (!Number.isInteger(a)|| !Number.isInteger(b)) {
        console.log("ERROR");
        return "ERROR";
    }

    let sumArray = []
    let start = Math.min(a, b)
    let end = Math.max(a, b)
    for (let index = start; index <= end; index++) {
        sumArray.push(index)

    }
    let sum = sumArray.reduce((acum, valorAct) => acum + valorAct)





    return sum;



}
    ;

sumAll(1, 4);
//console.log(sum);

// Do not edit below this line
module.exports = sumAll;
