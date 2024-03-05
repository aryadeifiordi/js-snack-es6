//Crea un array di oggetti che rappresentano delle persone, ogni persona ha un nome, un cognome e un'età

const persone = [
    { nome: 'arya', cognome: 'ramesh', età: 31 },
    { nome: 'mario', cognome: 'rossi', età: 21 },
    { nome: 'andrea', cognome: 'veri', età: 56 },
    { nome: 'giovanna', cognome: 'verdi', età: 17 },
    { nome: 'michela', cognome: 'forse', età: 91 },
    { nome: 'giovanni', cognome: 'ratti', età: 75 }
];

console.log(persone);
//Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. 
const abilitazionePersone = persone.map(persona => {

    let frase = `${persona.nome} ${persona.cognome} può guidare.`;
    if (persona.età < 18) {
        frase = `${persona.nome} ${persona.cognome} non può guidare.`;
    }
    return frase;

})

console.log(abilitazionePersone)