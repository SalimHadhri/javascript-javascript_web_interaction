/********************** ENCHANER DES REQUETES HTTP AVEC LES CALLBACKS ********************/




// 2 fonctions GET suivi d'une fct POST
// 2 Parametres :
        //l'URL de la requête,
        //une callback à exécuter quand on a le résultat (avec une variable d'erreur en premier paramètre).
var GETRequestCount = 0;
var GETRequestResults = []; // conserver les réponses des requêtes  GET , car on ne les a pas toutes les 2 en même temps.

function onGETRequestDone(err, result) {
    if (err) throw err;

    GETRequestCount++;
    GETRequestResults.push(result);

    if (GETRequestCount == 2) { // verifier que les 2 requetes GET sont terminees
        post(url3, function(err, result) {
            if (err) throw err;

            // We are done here !
        });
    }
}

get(url1, onGETRequestDone);
get(url2, onGETRequestDone);

/***************************** ENCHAINER DES REQUETES HTTP AVEC LES PROMISE ******************************/

// FCT :  Promise.all : exécuter nos requêtes en parallèle et en séquence avec les  Promise
// Parametre : une liste de  Promise ===> exécuter en parallèle et de retourner une nouvelle  Promise qui sera résolue quand ttes les promises seront resolues


Promise.all([get(url1), get(url2)]) // url1 et url2 sont deux requetes GET lance simultanement
    .then(function(results) { // FCT then() recevra le resultats de ttes les PROMISE sous forme d'un tableau
        return Promise.all([results, post(url3)]); // lancer l'url POST quand les 2 PROMISE seront resolues
    })
    .then(function(allResults) { // allResults contient resultats des 2 GET et de le resultat de la requete POST
        // We are done here !    // allResults = [ [ getResult1, getResult2 ], postResult ]
    });

/**************************************** ENCHAINER DES REQUETES HTTP AVEC "async/await" ******************/

// Promise.all : executer des fcts asynchrones en meme temps
// async : arrière-plan à une  Promise

async function requests() { // async car ces fcts sont asynchrones
    var getResults = await Promise.all([get(url1), get(url2)]); //  await : attendre la fin de l'execution des 2 requetes GET
    var postResult = await post(url3); // await : attendre la fin de l'execution de la requete POST
    return [getResults, postResult]; // tableau avec tous les resultats
}

requests().then(function(allResults) {  // .then() ===> recuperer tous les resultats
    // We are done here !
});
