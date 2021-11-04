/************* ENVOYER DES DONNEES AVEC LA REQUETE POST **************/


//Afin d'envoyer des donees on utilise la methode "send()" en lui passant en parametres les donnees a envoyer
fetch("http://url-service-web.com/api/users",
//second parametre definit toutes les otions qui definissent la requete envye
/* il definit :
*****la méthode HTTP, le body, c’est à dire les données qu’on souhaite envoyer,
*****les headers qui donnent un peu plus d’information sur notre requête. */
{
  method: “POST”,
  headers: {  // header : entete envoyé en meme temps que la requete pour donner plus d'informations sur celle-ci
'Accept': 'application/json',  //prevenir qu'il va recevoir un fichier JSON
'Content-Type': 'application/json'
},
  body: JSON.stringify(jsonBody) //transformer notre objet Javascript en JSON
});


