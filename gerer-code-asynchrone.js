/**************************** CALLBACKS *********************************/

/* callback principe : on definit une fonction appeleée CALLBACKS
                      on passe cette fonction en prametre a une fonction asynchrone
                      la fonction asynchrone finit son travail puis elle appelle la fonction "callback" en lui passant un resultat
                      la fonction callback sera aussi execute comme asynchrone
*/
element.addEventListener('click', function(e) {
    // Do something here ...
});

/* CALLBACKS source d'erreurs dans le code qui est compliqué a ecrire */
// EXEMPLE :
elt.addEventListener('click', function(e) {
    mysql.connect(function(err) {
        mysql.query(sql, function(err, result) {
            fs.readFile(filePath, function(err, data) {
                mysql.query(sql, function(err, result) {
                    // etc ...
                });
            });
        });
    });
});

/*********************************** GERER DES ERREURS CALLBACKS ****************************/

// FCT CALLBACK : 2 parametres : ** 1er parametre est l'erreur (null ou undefined c'est qu'il n'ya pas eu d'erreur )
//                               ** 2 eme parametre est les donnéees de notre fct

fs.readFile(filePath, function(err, data) {
    if (err) {
        throw err;
    }
    // Do something with data
});

/*************************** PROMISE ***********************************/
// equivalent au CALLBACKS mais plus puissantes et plus complexes et plus facile a lire
// PROMISE : Promesse d'un retour a partir d'une fct asynchrone
//            ==> resolve avec un resultat
//            ==>  reject avec une erreur

// fct THEN() ==> executer du code des que la promesse est reolue
//  fct catch() ===> executer du code des qu'une erreur est survenue

functionThatReturnsAPromise()
    .then(function(data) {
        // Do somthing with data
    })
    .catch(function(err) {
        // Do something with error
    });



// chainer notre code asynchrone avec des PROMISES
//EXEMPLE
returnAPromiseWithNumber2()
    .then(function(data) { // Data is 2
        return data + 1;
    })
    .then(function(data) { // Data is 3
        throw new Error('error');
    })
    .then(function(data) {
        // Not executed // PROMISE BEFORE RETURN AN ERROR
    })
    .catch(function(err) {
        return 5; // nouvelle valeur qui est transformée en une PROMISE
    })
    .then(function(data) { // Data is 5
        // Do something
    });


/**************************** Async/await *****************************/

// permettent de gérer le code asynchrone de manière beaucoup plus intuitive
//  bloque l'execution d'un code asynchrone jusqu'a ce qu'il retourne un resultat
async function fonctionAsynchrone1() {/* code asynchrone */}
async function fonctionAsynchrone2() {/* code asynchrone */}

async function fonctionAsynchrone3() {
 const value1 = await fonctionAsynchrone1(); // await : faire appel a des fcts asynchrones et attendre leur resultat
 const value2 = await fonctionAsynchrone2();
 return value1 + value2;
}
// Async/await : utilisent les PROMISES en arriere plan
// Async/await  : gestion des erreurs ===> code asynchrone dans un bloc  try {} catch (e) {} ==> erreur envoyée dans le catch


/******* RESUME
===> CALLBACK : fct appele plus tard ;
===> les Promise : sont des objets qui nous fournissent les fonctions then() et catch() pour gérer le code asynchrone ;
===> async  et   await  permettent de faire de l’asynchrone avec une syntaxes plus naturelle,
    et qu’ils utilisent en arrière plan les Promise.

*/
/********************** 3 techniques pour faire du code asynchrone et pouvoir utiliser sa valeur ************/
