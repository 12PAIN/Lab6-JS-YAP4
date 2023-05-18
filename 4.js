
function mean(...args){
    
    let value = 0;
    for(let arg of args) value += arg;

    return value / args.length
}

console.log(mean(1,2,3,4,5,6,7,8,9,10));