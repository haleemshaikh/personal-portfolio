let promise = new Promise(function(resove, reject) {
    alert("Hello")
    resolve(56)
})

console.log("Hello One");
setTimeout(() => {
    console.log("Hello Two will prints in 2 seconds");
}, 1000);

console.log("My name is " + "Hello Three");
console.log(promise);

