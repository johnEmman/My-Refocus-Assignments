const arr = ["Web Developer", "Web Developer", "Web Developer", "Refocus",  "Refocus", "Awesome"];
const object = {};

arr.forEach(e => {
    return object[e] = ++object[e] || 1;
})

console.log(object)