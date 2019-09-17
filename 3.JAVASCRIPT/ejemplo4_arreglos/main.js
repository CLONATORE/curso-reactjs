let numbers = [45, 4, 9, 16, 25];
let mayor18 = numbers.filter((value, index, array) => {
  return value > 18
});
console.log(mayor18);

//foreach
let txt = '';
numbers = [45, 4, 9, 16, 25];
numbers.forEach((value, index, array) => {
 txt += value + '|';
});
console.log(txt);

let x = {
    nombre:'valor',
    apellido:'otro dato'
};
console.log(x);
//map
let frutas = ['Fresa','Sandía','Melón','Mango'];
let opciones = frutas.map((value, index, array) => {
  return { value: index + 1, label: value}
});
console.log(opciones);

numbers = [45, 4, 9, 16, 25];
let menor10 = numbers.some((value, index, array) => {
  return value < 10
});
console.log(menor10);

numbers = [175,50,25];
let total = numbers.reduce((total, currentValue, currentIndex, array) => {
  console.log(array);
  return total - currentValue;
});
console.log(total);