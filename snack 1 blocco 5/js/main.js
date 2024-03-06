console.log('works');

const zucchine = [
    {nome: 'zucca romanesca', peso:'100', lunghezza:'20cm'},
    {nome: 'zucca trombetta', peso:'150', lunghezza:'25cm'},
    {nome: 'zucca costata', peso:'300', lunghezza:'10cm'},
    {nome: 'zucca crookneck', peso:'200', lunghezza:'30cm'},
    {nome: 'zucca rampicante', peso:'50', lunghezza:'20cm'},
    {nome: 'zucca romanesca', peso:'100', lunghezza:'40cm'},
]
console.log(zucchine);
let peso = 0;

zucchine.forEach(zucca => {
    peso += zucca.peso
});

console.log(peso);