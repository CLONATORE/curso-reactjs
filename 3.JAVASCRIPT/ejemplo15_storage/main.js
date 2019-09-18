function populateStorage() {
  localStorage.setItem('bgcolor', 'red');
  localStorage.setItem('font', 'Helvetica');
  localStorage.setItem('image', 'myCat.png');

  sessionStorage.setItem('name', 'Alex');
  let o = {
	  id: 1,
	  name: 'test',
	  description: 'desc'
  };
  sessionStorage.setItem('object', JSON.stringify(o));
}

function printStorage() {
  console.log('bgcolor= ' + localStorage.getItem('bgcolor'));
  console.log('font= ' + localStorage.getItem('font'));
  console.log('image= ' + localStorage.getItem('image'));
  console.log('name= ' + sessionStorage.getItem('name'));
  console.log('object= ', JSON.parse(sessionStorage.getItem('object')));
}
if (typeof(Storage) !== "undefined") {
  populateStorage();
  printStorage();
} else {
  alert('Sin soporte para storage')
}