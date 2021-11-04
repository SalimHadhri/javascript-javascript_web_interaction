/* NB : Javascript est synchrone ==> un seul fil d'execution */
// chaque ligne sera exécutée l'une après l'autre en attendant la fin de l'exécution de la ligne précédente.

/********** asynchrone en javascript mais avec une execution qui reste synchrone ***********/

let productId = 1;
let productPrice = getProductPriceAsync(productId);
doSomething(productPrice);
// getProductPriceAsync() est asynchrone
// doSomething(productPrice) :  exécutée avant la fin de l'exécution de la fonction asynchrone
// productPrice : impossible a utiliser avant la fin de la fct asynchrone

/************************* EVENT LOOP *****************************/
// execution d'une fct asynchrone ==> placee dans une sorte de file d'attente ===> event loop


/************* FCT setTimeOut ***********************/
// role : exécuter du code asynchrone sans bloquer le fil d'exécution en cours
/* 2 parametres
        La fonction à exécuter de manière asynchrone (qui sera donc ajoutée à la file d'attente de l'event loop) ;
        Le délai, en millisecondes, avant d'exécuter cette fonction.
*/
setTimeout(function() {
    console.log("I'm here!")
}, 5000);

console.log("Where are you?");// retourne une valeur qui permet d'identifier la fonction asynchrone que l'on veut executer

// setTimeout ===> X &&& clearTimout(X) ===> annuler l'execution de la fct asynchrone


/***************** AUTRES FCTS ****************/

/* setInterval : elle fonctionne exactement comme  setTimeout , à ceci près qu'elle exécute la fonction passée en paramètre en boucle
                à une fréquence déterminée par le temps en millisecondes passé en second paramètre.
                Il suffira de passer la valeur de retour de  setInterval  à  clearInterval  pour stopper
                l'exécution en boucle de la fonction ;
  setImmediate : Cette fonction prend en seul paramètre la fonction à exécuter de façon synchrone.
                La fonction en question sera placée dans la file d'attente de l'event loop, mais va passer devant toutes
               les autres fonctions, sauf certaines spécifiques au Javascript : les événements (les mêmes qu'on a vus au premier chapitre
               qui sont donc exécutés de façon asynchrone  😉), le rendu, et l'I/O. Il existe aussi  nextTick ,
               qui permet, là, de court-circuiter tout le monde. À utiliser avec précaution

*/


/******************** CAS I/O ****************************/

// cas:  lecture/écriture des fichiers, requêtes HTTP

// fetch() : fonction asynchrone// requete HTTP ne bloque pas l'execution du code

