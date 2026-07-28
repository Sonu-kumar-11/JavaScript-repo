let arr =[1,4,2,5,6,7,2,9,2];

let min = arr.reduce((min, el) => {
 if(min > el) {
    return el;
 } else {
    return min;
 }
});
console.log(min);
