// o que são vetores ou arrays 

// como declarar uma array
let array = ['string', 1, true];
// Deve ser declaraso entre colchetes "[]"
console.log(array);

// como um array pode guardar diferentes valores inclusive outros arrays
// outros arrays
// ex: let array = ['string', 1, true, ['array1'],['array2']];

//como acessar o indice de um array 
console.log(array[0]);

// manipulando um array
// forEach - realiza uma função para item do array
array.forEach(function(item, index){console.log(item, index);});

//push - add item no final da array
array.push('novo item');
console.log(array);

//pop - remove o ultimo item do array
array.pop();
console.log(array);

//shift - remove o primeiro item do array
array.shift();
console.log(array);

//unshift - add item no inicio do array
array.unshift('novo item');
console.log(array);

//indexOf - retorna o indice de um item do array
console.log(array.indexOf(true));

//slice - remove ou substitui um item por indice
//array.splice(0, 2);
//console.log(array);

//slice - retorna uma parte de um array existente
let novoArray = array.slice(0, 2);
console.log(novoArray);