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
let p2 = new Promise(function(resolve, reject){
    let t = setTimeout(function(){
		resolve(1);
	    //reject("rechazado");
	}, 3000);
});
p2.then(function(value) {
    console.log("A. " + value);
    return ++value;
 }).then(function(value) {
    console.log("B. " + value);
 }).catch(function(value) {
    console.log("algo salio mal " + value);
 });
 
