'use strict';

//un set è una collezione di valori unici (che leva duplicati) e che non ha ordine
const orderSet = new Set(['Pasta','Pizza', 'Risotto', 'Pasta']);
console.log(orderSet); // {"Pasta", "Pizza", "Risotto"}
console.log(orderSet.size); //3
console.log(orderSet.has("Pizza")); //true
orderSet.add('Bread');  //aggiunto al set
orderSet.delete('Risotto'); //levato risotto
//orderSet.clear();   //elimina tutti gli elementi 


//non si possono recuperare i valori in uno specifico indice da un set

//iterare un set
for(const order of orderSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];
const staffUnique = [...new Set(staff)]; //uso lo spread op per convertire da array a set
console.log(staffUnique); //['Waiter', 'Chef', 'Manager']