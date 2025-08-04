const repeatString = function(string , num) {
    if (num < 0) {return "ERROR"        
    }
    let word =""
    for (let index = 0; index < num; index++) {
        word += string
    }
    return word ;
};

const num = function() { 
    let num = Math.random * 1000;
    let numfloor = num * Math.floor;
        
    return numfloor ;
}
        
        
    

 repeatString('bye', num());


// Do not edit below this line
module.exports = repeatString;
