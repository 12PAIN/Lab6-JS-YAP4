
function merge(...args){
    
    let result = [];

    for(let arg of args){
        result.push(...arg);
    }

    return result;
}

let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result); // выведет [1, 2, 3, 4, 5, 6, 7, 8, 9]