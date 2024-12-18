const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
for(let i = 0; i < teachers.length; i++){
  if(teachers[i] == 'Carlo'){
    teachers[i] = 'Patrick';
  }
}
console.log(teachers);
/* oppure
teachers.splice(4,1, 'Patrick');
console.log(teachers);
*/

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(lastTeacher);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(firstTeacher);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa');
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah');
console.log(teachers);

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
for(let i = 0; i < teachers.length; i++){
  if(teachers[i] == 'Fabio'){
   const isFabioPresent = teachers[i];
   console.log(isFabioPresent);
  }
}
// oppure:
for(let i = 0; i < teachers.length; i++){
  if(teachers[i] == 'Fabio'){
    const isFabioPresente = true;
    console.log(isFabioPresente);
  }
}
/*oppure
const isFabioPresent = teachers.includes('Fabio');
console.log(isFabioPresent);
*/

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
for(let i = 0; i < teachers.length; i++){
  if(teachers[i] == 'Lewis'){
    const lewisIndex = teachers.indexOf(teachers[i]);
    console.log(lewisIndex);
  }
}
/* oppure
const lewisIndex = teachers.indexOf('Lewis');
console.log(lewisIndex);
*/

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
let teachersString = '';  // cambiato const in let
for(let i = 0; i < teachers.length; i++){
  teachersString+=teachers[i]+', ';
}
console.log(teachersString);
/* oppure
const teachersString = teachers.join();
console.log(teachersString)
*/

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
let isTeachersEmpty = false; // cambiato const in let
if(teachers.length == 0){
  isTeachersEmpty = true;
}
console.log(isTeachersEmpty);
