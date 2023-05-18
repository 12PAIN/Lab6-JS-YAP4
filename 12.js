function funcDay() {
    return new Date().getDate()
}
    
function funcMonth() {
    return new Date().getMonth()+1
}

function funcYear() {
    return new Date().getFullYear()
}

let [year = funcYear(), month = funcMonth(), day = funcDay()] = []

console.log(year);
console.log(month);
console.log(day);
