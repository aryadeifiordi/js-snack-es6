console.log('wor');
/*Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.*/

const zucchine = [
    {nome: 'zucca romanesca', peso:'100', lunghezza:'20cm'},
    {nome: 'zucca trombetta', peso:'150', lunghezza:'25cm'},
    {nome: 'zucca costata', peso:'300', lunghezza:'10cm'},
    {nome: 'zucca crookneck', peso:'200', lunghezza:'30cm'},
    {nome: 'zucca rampicante', peso:'50', lunghezza:'20cm'},
    {nome: 'zucca veneta', peso:'100', lunghezza:'40cm'},
    {nome: 'zucca ligure', peso:'100', lunghezza:'20cm'},
    {nome: 'zucca toscana', peso:'100', lunghezza:'60cm'},
    {nome: 'zucca romana', peso:'100', lunghezza:'10cm'},
    {nome: 'zucca umbra', peso:'100', lunghezza:'50cm'},
    
]

const zucchineCorte = zucchine.filter(zucchina => parseInt(zucchina.lunghezza) <= 15);
const zucchineLunghe = zucchine.filter(zucchina => parseInt(zucchina.lunghezza) > 15);

console.log("Zucchine corte:", zucchineCorte);
console.log("Zucchine lunghe:", zucchineLunghe);
