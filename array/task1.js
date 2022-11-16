//Task 1. Find the most used item on the array

const arr = ["Web Developer","Refocus", "Web Developer", "Web Developer", "Refocus", "Awesome"];


//array reduce method
var map = arr.reduce(function(sum, curr) {
  sum[curr] = ++sum[curr] || 1;
  return sum;
}, {})

console.log(map)




//array forEach method
let countObj = {};

arr.forEach(e => {
    countObj[e] = ++countObj[e] || 1;
  });
console.log(countObj)


