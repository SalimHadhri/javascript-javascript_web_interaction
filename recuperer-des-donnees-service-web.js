/*********************** API FETCH ****************************/

//Fetch est un ensemble d'objets et de fonctions mis à disposition par le langage
      //JavaScript, afin d'exécuter des requêtes HTTP de manière asynchrone.

//executer des requetes HTTP sans avoir a recharger la page du navigateur

/************************* ENVOYER UNE PREMIERE REQUETE ******************/

//envoyer une requete HTTP de type GET au service web se trouvant a l'adresse http://url-service-web.com/api/users
fetch("http://url-service-web.com/api/users");


/****** RECUPERER DES DONNEES AU FORMAT JSON *************************/


// JSON : JavaScript Object Notation (format textuel)


/*********************** OBJET JAVASCRPIT *************************/
// creer un objet
const obj = {
    name: "Mon contenu",
    id: 1234,
    message: "Voici mon contenu",
    author: {
        name: "John"
    },
    comments: [
        {
            id: 45,
            message: "Commentaire 1"
        },
        {
            id: 46,
            message: "Commentaire 2"
        }
    ]
};

/************************* OBJET JSON ***********************/
// decrire une structure
{
    "name": "Mon contenu",
    "id": 1234,
    "message": "Voici mon contenu",
    "author": {
        "name": "John"
    },
    "comments": [
        {
            "id": 45,
            "message": "Commentaire 1"
        },
        {
            id: 46,
            "message": "Commentaire 2"
        }
    ]
}

/********************** RECUPERE LE RESULTAT DE LA REQUETE *************************/
// FETCH ===> nous envoie une PROMISE
//PROMISE : ** fonction then ==> executee lorsque le resultat sera obtenu
//          ** fonction catch ===> appelle s'il ya eu unne erreur lors de l'envie de la requete

fetch(“https://mockbin.com/request”)
  .then(function(res) { // pour recuperer le resultat de la requete au format JSON
    if (res.ok) { // verifier que la requete s'était bien passée
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);
  })
  .catch(function(err) {
    // Une erreur est survenue
  });



