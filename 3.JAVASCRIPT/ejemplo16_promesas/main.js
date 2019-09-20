let p = new Promise(function(resolve, reject){
    let t = setTimeout(function(){
		//resolve("bien");
	    reject("rechazado");
	}, 3000);
});


p.then(function(value) {
  console.log("todo bien " + value);
},
function(value) {
  console.log("algo salio mal " + value);
});


//encadenamiento
let p_1 = new Promise(function(resolve, reject){
    let t = setTimeout(function(){
		resolve(1);
	    //reject("rechazado");
	}, 3000);
});
p_1.then(function(value) {
    console.log("A. " + value);
    return ++value;
 }).then(function(value) {
    console.log("B. " + value);
 }).catch(function(value) {
    console.log("algo salio mal " + value);
 });
 

var p1 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 1000, "one"); 
}); 
var p2 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 2000, "two"); 
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three");
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "four");
});
var p5 = new Promise((resolve, reject) => {
  //reject("reject");
  resolve("five");
});

Promise.all([p1, p2, p3, p4, p5]).then(values => { 
  console.log(values);
}, reason => {
  console.log('rechazada', reason)
});
 
