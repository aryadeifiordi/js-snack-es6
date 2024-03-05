console.log('works');

const animali = [
    {nome: 'leone', famiglia: 'felidi', classe: 'mammiferi'},
    {nome: 'cane', famiglia: 'canidi', classe: 'mammiferi'},
    {nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli'},
    {nome: 'coccodrillo', famiglia: 'crocodilidi', classe: 'rettili'},
    {nome: 'rana', famiglia: 'ranidi', classe: 'anfibi'},
    {nome: 'trota', famiglia: 'salmonidi', classe: 'pesci'}


];

console.log(animali);

const mammiferi = animali.filter(animal => animal.classe === 'mammiferi');
console.log(mammiferi);