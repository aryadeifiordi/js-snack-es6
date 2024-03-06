console.log('works');
/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal*/
const bicilette = [
    {nome: 'bianchi', peso: '1500gr'},
    {nome: 'legnano', peso: '2500gr'},
    {nome: 'giant', peso: '3500gr'},
    {nome: 'graziella', peso: '5500gr'},
    {nome: 'colnago', peso: '4500gr'},

];
// trovo la bici con il peso minore
let leggera = bicilette[0];
for (let i = 1; i < bicilette.length; i++) {
    if (parseInt(bicilette[i].peso) < parseInt(leggera.peso)) {
        leggera = bicilette[i];
    }
}
console.log(leggera);

// destructuring
const { nome, peso } = leggera;
console.log(`La bici più leggera è ${nome} e pesa ${peso}.`);