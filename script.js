//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.
const bicycles = [
    {name: 'Graziella', weight: 500}, {name: 'Mountain Bike', weight: 800}, {name: 'Bianchi', weight: 100}
];
let littleBicycle = bicycles[2];
for (let i = 1; i < bicycles.length; i++) {
    if (bicycles[i].weight < littleBicycle.weight) {
        littleBicycle = bicycles[i];
    }
}
console.log(littleBicycle.name);
//Snack2
//Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


//Snack 3 (Bonus)
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.