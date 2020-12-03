/*
Istruzioni:

Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso il for in tutte le proprietà.

Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine:
nome, cognome e età.
*/

//ogg studente
var studente = {
    Età: 35,
    Cognome: 'Gaggìa',
    Nome: 'Andrea'
};
for (var key in studente) {
    document.getElementById('oggetto-studente').insertAdjacentHTML("afterbegin", `${key}: <strong>${studente[key]}</strong><br>`);
}

//arr di ogg studente
var studenti = [
    {
        nome: 'Umberto',
        cognome: 'Bindi',
        età: 28
    },
    {
        nome: 'Jacopo',
        cognome: 'Incani',
        età: 30
    },
    {
        nome: 'Jonata',
        cognome: 'Sabbioni',
        età: 29
    },
    {
        nome: 'Giovanni',
        cognome: 'Truppi',
        età: 37
    }
];
for (var i = 0; i < studenti.length; i++) {
    document.getElementById('array-oggetti').insertAdjacentHTML('afterbegin', `${studenti[i].nome} ${studenti[i].cognome}<br>`);
}

//funzione che aggiunge oggetto da prompt e ristampa a schermo
setTimeout(() => {
    var studenteInserito = {
        nome: prompt('inserisci nome nuovo studente'),
        cognome: prompt('inserisci cognome nuovo studente'),
        età: Number(prompt('inserisci età in anni nuovo studente'))
    };
    
    if (studenteInserito.nome == "" || studenteInserito.cognome == "" || studenteInserito.età == "") {
        console.log('Problemi nell\'inserimento, Oggetto non aggiunto.');
    } else {
        studenti.push(studenteInserito);
    }

    document.getElementById('array-oggetti').innerHTML = '';
    for (var i = 0; i < studenti.length; i++) {
        document.getElementById('array-oggetti').insertAdjacentHTML('afterbegin', `${studenti[i].nome} ${studenti[i].cognome}<br>`);
    }
    console.log(studenti);
}, 1500);